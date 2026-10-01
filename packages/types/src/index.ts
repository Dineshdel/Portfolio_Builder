export type PortfolioTheme = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  borderRadius: string;
  animationEnabled: boolean;
};

export type PortfolioSettings = {
  showAbout: boolean;
  showSkills: boolean;
  showProjects: boolean;
  showExperience: boolean;
  showEducation: boolean;
  showContact: boolean;
  seoTitle?: string;
  seoDescription?: string;
  favicon?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  displayOrder: number;
};

export type Education = {
  institution: string;
  degree: string;
  field?: string;
  startDate: string | Date;
  endDate?: string | Date;
  displayOrder: number;
};

export type Experience = {
  company: string;
  role: string;
  description?: string;
  startDate: string | Date;
  endDate?: string | Date;
  isCurrent: boolean;
  displayOrder: number;
};

export type SkillLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

export type Skill = {
  name: string;
  category?: string;
  level: SkillLevel;
  displayOrder: number;
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  displayOrder: number;
};

export type PortfolioProfile = {
  fullName: string;
  headline?: string;
  bio?: string;
  profileImage?: string;
  location?: string;
  email?: string;
  phone?: string;
  resumeUrl?: string;
};

export type PortfolioData = {
  profile: PortfolioProfile;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  educations: Education[];
  socialLinks: SocialLink[];
};
