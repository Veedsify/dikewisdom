export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  category: string;
  status: 'live' | 'in-development' | 'discontinued';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineEntry {
  title: string;
  company: string;
  description?: string;
}

export interface TimelineItem {
  year: string;
  entries: TimelineEntry[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface NavItem {
  url: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
