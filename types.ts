export interface Artist {
  id: number;
  name: string;
  image: string;
}

export interface Release {
  id: number;
  title: string;
  artist: string;
  image: string;
  link: string;
  color?: string; // Hex color for the glow effect
  audio?: string; // URL to the audio file
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceUnit: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
  icon: 'mic' | 'waveform' | 'disc';
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface EquipmentItem {
  id: number;
  title: string;
  description: string;
  icon: 'settings' | 'ear' | 'light';
}

export interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  ctaLink: string;
}