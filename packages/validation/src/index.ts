import { z } from 'zod';

export const ThemeSchema = z.object({
  primaryColor: z.string(),
  secondaryColor: z.string(),
  backgroundColor: z.string(),
  textColor: z.string(),
  fontFamily: z.string(),
  borderRadius: z.string(),
  animationEnabled: z.boolean(),
});

export const SettingsSchema = z.object({
  showAbout: z.boolean(),
  showSkills: z.boolean(),
  showProjects: z.boolean(),
  showExperience: z.boolean(),
  showEducation: z.boolean(),
  showContact: z.boolean(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  favicon: z.string().optional(),
});

export const SocialLinkSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
  displayOrder: z.number().int(),
});

export const EducationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  field: z.string().optional(),
  startDate: z.union([z.string(), z.date()]),
  endDate: z.union([z.string(), z.date()]).optional(),
  displayOrder: z.number().int(),
});

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  description: z.string().optional(),
  startDate: z.union([z.string(), z.date()]),
  endDate: z.union([z.string(), z.date()]).optional(),
  isCurrent: z.boolean(),
  displayOrder: z.number().int(),
});

export const SkillSchema = z.object({
  name: z.string(),
  category: z.string().optional(),
  level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT']),
  displayOrder: z.number().int(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  technologies: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  displayOrder: z.number().int(),
});

export const ProfileSchema = z.object({
  fullName: z.string(),
  headline: z.string().optional(),
  bio: z.string().optional(),
  profileImage: z.string().url().optional(),
  location: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  resumeUrl: z.string().url().optional(),
});

export const PortfolioDataSchema = z.object({
  profile: ProfileSchema,
  projects: z.array(ProjectSchema),
  skills: z.array(SkillSchema),
  experiences: z.array(ExperienceSchema),
  educations: z.array(EducationSchema),
  socialLinks: z.array(SocialLinkSchema),
});
