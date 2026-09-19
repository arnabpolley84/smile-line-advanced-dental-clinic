import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // ms before start
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  showCursor?: boolean;
  onComplete?: () => void;
  triggerKey?: string | number; // Re-trigger typing when key changes (e.g. active slide)
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 28,
  delay = 100,
  className = '',
  as: Component = 'span',
  showCursor = true,
  onComplete,
  triggerKey,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsTyping(false);
      onComplete?.();
      return;
    }

    // Reset when triggerKey changes
    setDisplayedText('');
    setIsTyping(false);
    setHasTriggered(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerKey, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      return;
    }

    if (!hasTriggered) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let currentIndex = 0;

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [hasTriggered, text, speed, delay, prefersReducedMotion]);

  return (
    <Component 
      ref={containerRef as any} 
      className={`inline-block ${className}`}
    >
      <span>{displayedText}</span>
      {showCursor && isTyping && !prefersReducedMotion && (
        <span 
          className="inline-block w-[2px] h-[1em] ml-1 bg-teal-400 align-middle animate-pulse"
          aria-hidden="true"
        />
      )}
    </Component>
  );
};
