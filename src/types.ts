export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  details: string;
  category: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  verified: boolean;
  highlight?: string;
}

export interface HeroSlide {
  id: number;
  badge: string;
  headline: string;
  supportingText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
