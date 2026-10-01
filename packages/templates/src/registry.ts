import type { FC } from 'react';
import type { PortfolioData, PortfolioTheme, PortfolioSettings } from '@portfolioforge/types';
import { ModernDeveloperTemplate } from './templates/modern-developer';
import { MinimalDeveloperTemplate } from './templates/minimal-developer';
import { CreativeDeveloperTemplate } from './templates/creative-developer';

export interface TemplateProps {
  data: PortfolioData;
  theme?: PortfolioTheme;
  settings?: PortfolioSettings;
}

export const templateRegistry: Record<string, FC<TemplateProps>> = {
  'modern-developer': ModernDeveloperTemplate,
  'minimal-developer': MinimalDeveloperTemplate,
  'creative-developer': CreativeDeveloperTemplate,
};
