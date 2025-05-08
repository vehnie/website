export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  position: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Education {
  id: number;
  institution: string;
  location: string;
  degree: string;
  period: string;
  description: string;
  tags: string[];
}