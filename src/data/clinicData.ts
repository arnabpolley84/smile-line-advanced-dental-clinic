import { ServiceItem, ReviewItem, HeroSlide } from '../types';

export const CLINIC_INFO = {
  name: "Smile Line Advanced Dental Clinic",
  bengaliName: "স্মাইল লাইন অ্যাডভান্সড ডেন্টাল ক্লিনিক",
  category: "Dental Clinic",
  rating: 5.0,
  reviewCount: 15,
  phone: "062891 95295",
  phoneRaw: "06289195295",
  phoneTel: "tel:06289195295",
  whatsappUrl: "https://wa.me/916289195295?text=Hello%20Smile%20Line%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.",
  address: "151/1, Basanta Rd., Nitai Nagar, near Jyotirindra Metro Station, Purbalok, Kolkata, West Bengal 700099",
  addressShort: "Purbalok, Kolkata (near Jyotirindra Metro Station)",
  landmark: "Near Jyotirindra Metro Station, Purbalok",
  plusCode: "F9WX+JR Kolkata, West Bengal",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=151%2F1+Basanta+Rd+Nitai+Nagar+Purbalok+Kolkata+700099",
  mapsEmbedUrl: "https://www.google.com/maps?q=151%2F1,+Basanta+Rd.,+Nitai+Nagar,+Purbalok,+Kolkata,+West+Bengal+700099&output=embed",
  googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Smile+Line+Advanced+Dental+Clinic+Purbalok+Kolkata",
  attributes: [
    { label: "Women-Owned", desc: "Patient-centered dental leadership" },
    { label: "LGBTQ+ Friendly", desc: "Welcoming, respectful and safe environment" },
    { label: "Metro Accessible", desc: "Walking distance from Jyotirindra Metro Station" },
    { label: "5.0 ★ Google Rated", desc: "Based on 15 verified patient reviews" }
  ],
  openingHours: {
    statusNote: "Open in Evening Hours · Advance Booking Welcomed",
    schedule: [
      { days: "Monday – Saturday", hours: "5:30 PM – 9:30 PM", status: "Regular Clinic Hours" },
      { days: "Sunday", hours: "By Advance Appointment", status: "Prior Booking Required" }
    ]
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Advanced Dental Care in Purbalok, Kolkata",
    headline: "Confident Smiles Start With Exceptional Dental Care",
    supportingText: "Professional, patient-focused dental care in Purbalok, Kolkata. Providing clear explanations and a comfortable, gentle clinical experience.",
    primaryCtaText: "Book an Appointment",
    secondaryCtaText: "Call 062891 95295",
    // Generic high-resolution modern dental clinic image
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=85",
    fallbackImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Modern dental treatment room and equipment at Smile Line Dental Clinic",
    objectPosition: "center right"
  },
  {
    id: 2,
    badge: "Personalized Dental Attention",
    headline: "Your Smile Deserves Personalized Care",
    supportingText: "A comfortable and welcoming dental clinic focused on individualized patient care, meticulous procedures, and friendly guidance.",
    primaryCtaText: "Explore Our Services",
    secondaryCtaText: "Call 062891 95295",
    // Generic modern dental suite and patient care setting
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1920&q=85",
    fallbackImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Clean, comfortable modern dental suite with ergonomic chair",
    objectPosition: "center right"
  },
  {
    id: 3,
    badge: "Clear Communication & Trust",
    headline: "Modern Dental Care With a Patient-First Approach",
    supportingText: "Clear communication, careful treatment and a gentle dental experience. Located conveniently near Jyotirindra Metro Station in Purbalok.",
    primaryCtaText: "Contact the Clinic",
    secondaryCtaText: "Book an Appointment",
    // Generic friendly dental consultation and examination
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=85",
    fallbackImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Friendly dental consultation and patient oral examination",
    objectPosition: "center right"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Shayan DASGUPTA",
    rating: 5,
    timeAgo: "Verified Google Review",
    text: "Very reliable and dependable dental clinic. The doctors are very meticulous and knowledgeable. Their commitment to solve the patient's problem is truly exceptional.",
    verified: true,
    highlight: "Very reliable and dependable clinic"
  },
  {
    id: "rev-2",
    author: "Nabyendu Kuiti",
    rating: 5,
    timeAgo: "Verified Google Review",
    text: "Dr. Sharmistha is truly excellent. She took the time to carefully understand my dental issue and clearly explained everything before starting the procedure. I highly recommend her.",
    verified: true,
    highlight: "Clearly explained everything before starting"
  },
  {
    id: "rev-3",
    author: "Subhra Halder",
    rating: 5,
    timeAgo: "Verified Google Review",
    text: "Exceptional service! The dentists here are highly skilled and take the time to explain procedures thoroughly. They use top-notch equipment, which gives me confidence in their care. Highly recommend this dental clinic to anyone in need of quality dental care.",
    verified: true,
    highlight: "Dentists are highly skilled and take time to explain"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "general-consultation",
    name: "General Dental Consultation",
    category: "Preventive Care",
    shortDesc: "Comprehensive oral examination, diagnostic review, and clear, step-by-step treatment guidance.",
    details: "Thorough assessment of teeth, gums, and oral structures. The dentist walks you through each observation to help you make informed oral healthcare choices.",
    iconName: "Stethoscope"
  },
  {
    id: "cleaning-scaling",
    name: "Dental Cleaning & Scaling",
    category: "Hygiene & Prevention",
    shortDesc: "Gentle removal of plaque, tartar deposits, and external stains for refreshed oral freshness and gum health.",
    details: "Ultrasonic scaling and polishing to maintain periodontal wellness, eliminate bad breath, and protect teeth from long-term calculus buildup.",
    iconName: "Sparkles"
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    category: "Restorative Dentistry",
    shortDesc: "Careful, pain-relieving therapy to save natural teeth infected by deep cavities or pulp inflammation.",
    details: "Gentle debridement of infected nerve canals, disinfection, and precision obturation designed to restore comfort and retain your natural tooth structure.",
    iconName: "Activity"
  },
  {
    id: "dental-fillings",
    name: "Tooth-Colored Dental Fillings",
    category: "Restorative Dentistry",
    shortDesc: "Aesthetic composite restorations that seal cavities and repair chipped edges while blending with your enamel.",
    details: "Biocompatible composite resin layered meticulously to recreate original tooth contours, preventing further decay and restoring normal chewing function.",
    iconName: "ShieldCheck"
  },
  {
    id: "crowns-bridges",
    name: "Crowns & Dental Bridges",
    category: "Prosthodontics",
    shortDesc: "Custom-fitted restorative caps and tooth replacements that rebuild structural strength and chewing confidence.",
    details: "Precision-crafted ceramic and zirconia crowns to fortify root-canal-treated or cracked teeth, as well as bridges for seamless gap closure.",
    iconName: "Gem"
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry & Smile Care",
    category: "Aesthetic Dental Care",
    shortDesc: "Non-invasive smile enhancement, enamel shaping, and whitening options for a brighter, natural smile.",
    details: "Individualized aesthetic planning to address discoloration, spacing, minor alignment discrepancies, and cosmetic harmony tailored to your facial profile.",
    iconName: "Smile"
  },
  {
    id: "gum-care",
    name: "Gum Care & Periodontal Therapy",
    category: "Periodontics",
    shortDesc: "Focused treatments for bleeding gums, gingival swelling, and deep periodontal maintenance.",
    details: "Targeted subgingival debridement and gum health protocols designed to stop infection, strengthen tooth anchorage, and prevent bone loss.",
    iconName: "HeartPulse"
  },
  {
    id: "pediatric-dentistry",
    name: "Children's Dental Care",
    category: "Family & Pediatric",
    shortDesc: "Friendly, gentle dental check-ups, cavity prevention, and habit guidance for kids in a calm setting.",
    details: "Compassionate, patient care dedicated to making young patients feel at ease while protecting primary teeth and monitoring dental development.",
    iconName: "Baby"
  },
  {
    id: "preventive-care",
    name: "Preventive Dental Care",
    category: "Oral Wellness",
    shortDesc: "Fluoride applications, dental sealants, and personalized home-care routines for long-term oral wellness.",
    details: "Proactive strategies aimed at catching micro-cavities early, strengthening tooth enamel, and avoiding complex dental procedures down the road.",
    iconName: "CheckCircle2"
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    id: "patient-focused",
    title: "Patient-Focused Care",
    desc: "Every consultation begins by listening carefully to your concerns, past experiences, and individual comfort requirements.",
    icon: "UserCheck",
    proof: "Reviewers highlight attentive listening and gentle bedside manner."
  },
  {
    id: "clear-explanations",
    title: "Clear, Honest Explanations",
    desc: "Patients repeatedly commend Dr. Sharmistha and the team for taking the time to explain procedures thoroughly before starting any treatment.",
    icon: "MessageSquare",
    proof: "Directly praised in Google patient testimonials for transparent diagnosis."
  },
  {
    id: "skilled-professionals",
    title: "Skilled & Knowledgeable Doctors",
    desc: "Meticulous clinical hands and deep diagnostic knowledge ensure your dental treatments are carried out with precision and utmost care.",
    icon: "Award",
    proof: "5.0 ★ rating with unanimous patient appreciation for doctor expertise."
  },
  {
    id: "reliable-treatment",
    title: "Reliable & Dependable Clinic",
    desc: "A consistent, dependable practice where patients find genuine commitment to resolving oral health problems effectively.",
    icon: "Clock",
    proof: "Patients describe the clinic as dependable and committed to true patient wellness."
  },
  {
    id: "comfortable-setting",
    title: "Quality Dental Experience",
    desc: "Modern, hygienic clinic amenities, proper equipment sterilization, and a calming clinical ambiance in Purbalok.",
    icon: "ShieldAlert",
    proof: "A clean, modern clinic setting near Jyotirindra Metro Station."
  }
];

export const CARE_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Consultation & Listening",
    desc: "We begin with a careful oral check-up and take time to understand your specific dental concern or discomfort."
  },
  {
    step: "02",
    title: "Clear Explanation",
    desc: "We walk you through your oral condition and discuss suitable, honest treatment alternatives clearly without rush."
  },
  {
    step: "03",
    title: "Personalized Treatment",
    desc: "Your chosen procedure is executed with meticulous technique, gentle hands, and constant attention to your comfort."
  },
  {
    step: "04",
    title: "Ongoing Care & Guidance",
    desc: "We provide easy-to-follow post-treatment oral care guidance and ensure you know how to maintain lasting oral health."
  }
];
