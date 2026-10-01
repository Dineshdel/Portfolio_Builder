

export interface Portfolio {
  id: string;
  name: string;
  slug: string;
  templateId: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  updatedAt: string;
  previewUrl?: string;
}

export const portfolioApi = {
  getPortfolios: async (): Promise<Portfolio[]> => {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 800));
    
    // Fallback mock data if API is not ready
    return [
      {
        id: '1',
        name: 'My Freelance Site',
        slug: 'alex-freelance',
        templateId: 'modern-developer',
        status: 'PUBLISHED',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Design Portfolio',
        slug: 'alex-design',
        templateId: 'creative-developer',
        status: 'DRAFT',
        updatedAt: new Date(Date.now() - 86400000).toISOString(),
      }
    ];
  },

  createPortfolio: async (data: Partial<Portfolio>): Promise<Portfolio> => {
    await new Promise(r => setTimeout(r, 800));
    return {
      id: Math.random().toString(),
      name: data.name || 'Untitled',
      slug: data.slug || 'untitled',
      templateId: data.templateId || 'minimal-developer',
      status: 'DRAFT',
      updatedAt: new Date().toISOString(),
    };
  },

  updatePortfolio: async (id: string, data: Partial<Portfolio>): Promise<Portfolio> => {
    await new Promise(r => setTimeout(r, 500));
    return { id, ...data } as Portfolio;
  },

  deletePortfolio: async (_id: string): Promise<void> => {
    await new Promise(r => setTimeout(r, 500));
  },

  publishPortfolio: async (id: string): Promise<Portfolio> => {
    await new Promise(r => setTimeout(r, 500));
    return { id, status: 'PUBLISHED' } as Portfolio;
  }
};
