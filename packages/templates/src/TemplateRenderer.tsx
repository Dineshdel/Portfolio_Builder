import React from 'react';
import type { PortfolioData, PortfolioTheme, PortfolioSettings } from '@portfolioforge/types';
import { templateRegistry } from './registry';

export interface TemplateRendererProps {
  templateSlug: string;
  data: PortfolioData;
  theme?: PortfolioTheme;
  settings?: PortfolioSettings;
}

export const TemplateRenderer: React.FC<TemplateRendererProps> = ({
  templateSlug,
  data,
  theme,
  settings,
}) => {
  const TemplateComponent = templateRegistry[templateSlug];

  if (!TemplateComponent) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Template Not Found</h2>
        <p>The template "{templateSlug}" does not exist in the registry.</p>
      </div>
    );
  }

  // Inject CSS variables for theme dynamically at runtime.
  // In a real scenario, this could be handled by styled-components, tailwind config overriding, or inline styles.
  const themeStyles = theme
    ? {
        '--pf-primary': theme.primaryColor,
        '--pf-secondary': theme.secondaryColor,
        '--pf-bg': theme.backgroundColor,
        '--pf-text': theme.textColor,
        '--pf-font': theme.fontFamily,
        '--pf-radius': theme.borderRadius,
      } as React.CSSProperties
    : {};

  return (
    <div 
      className="portfolioforge-template-root" 
      style={{
        ...themeStyles,
        backgroundColor: theme?.backgroundColor || '#ffffff',
        color: theme?.textColor || '#000000',
        fontFamily: theme?.fontFamily || 'Inter, sans-serif'
      }}
    >
      <TemplateComponent data={data} theme={theme} settings={settings} />
    </div>
  );
};
