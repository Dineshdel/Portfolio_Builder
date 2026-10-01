import type { PortfolioData, PortfolioTheme, PortfolioSettings } from '@portfolioforge/types';

export const mockPortfolioData: PortfolioData = {
  profile: {
    fullName: "Alex Rivera",
    headline: "Senior Full-Stack Engineer & SaaS Architect",
    bio: "I build scalable, production-ready web applications using modern TypeScript and cloud-native architectures. Passionate about developer experience and performance.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
    location: "San Francisco, CA",
    email: "alex.rivera@example.com",
    phone: "+1 (555) 123-4567",
    resumeUrl: "https://example.com/resume.pdf"
  },
  projects: [
    {
      title: "PortfolioForge",
      description: "A multi-tenant SaaS platform allowing users to generate and host beautiful portfolios instantly using a runtime React rendering engine.",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL"],
      githubUrl: "https://github.com/example/portfolioforge",
      liveUrl: "https://portfolioforge.com",
      displayOrder: 1
    },
    {
      title: "CloudFlow Analytics",
      description: "Real-time dashboard for cloud infrastructure monitoring. Processes millions of events daily and visualizes metrics with low latency.",
      technologies: ["Next.js", "GraphQL", "Redis", "AWS"],
      githubUrl: "https://github.com/example/cloudflow",
      displayOrder: 2
    }
  ],
  skills: [
    { name: "TypeScript", level: "EXPERT", displayOrder: 1, category: "Language" },
    { name: "React", level: "EXPERT", displayOrder: 2, category: "Frontend" },
    { name: "Node.js", level: "ADVANCED", displayOrder: 3, category: "Backend" },
    { name: "PostgreSQL", level: "ADVANCED", displayOrder: 4, category: "Database" },
  ],
  experiences: [
    {
      company: "TechNova Inc.",
      role: "Lead Software Engineer",
      description: "Led a team of 6 engineers to re-architect the core monolithic application into scalable microservices.",
      startDate: "2021-03-01",
      isCurrent: true,
      displayOrder: 1
    },
    {
      company: "Innovate Web",
      role: "Frontend Developer",
      description: "Developed modern, accessible user interfaces for e-commerce clients resulting in a 40% increase in conversions.",
      startDate: "2018-06-01",
      endDate: "2021-02-28",
      isCurrent: false,
      displayOrder: 2
    }
  ],
  educations: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2014-09-01",
      endDate: "2018-05-30",
      displayOrder: 1
    }
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/alexrivera", displayOrder: 1 },
    { platform: "LinkedIn", url: "https://linkedin.com/in/alexrivera", displayOrder: 2 },
    { platform: "Twitter", url: "https://twitter.com/alexrivera", displayOrder: 3 }
  ]
};

export const mockTheme: PortfolioTheme = {
  primaryColor: "#3b82f6",
  secondaryColor: "#1e40af",
  backgroundColor: "#f8fafc",
  textColor: "#0f172a",
  fontFamily: "Inter, sans-serif",
  borderRadius: "0.5rem",
  animationEnabled: true
};

export const mockSettings: PortfolioSettings = {
  showAbout: true,
  showSkills: true,
  showProjects: true,
  showExperience: true,
  showEducation: true,
  showContact: true
};
