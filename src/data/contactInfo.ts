
import { Phone, Mail, MapPin, Clock, LucideIcon } from 'lucide-react';

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  details: string;
  link: string | null;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (704) 519-7228',
    link: 'tel:+17045197228'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@shineemup.com',
    link: 'mailto:info@shineemup.com'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Charlotte, NC',
    link: 'https://maps.google.com'
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Sat: 8AM-6PM',
    link: null
  }
];
