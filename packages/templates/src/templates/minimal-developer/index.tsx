import React from 'react';
import type { TemplateProps } from '../../registry';

export const MinimalDeveloperTemplate: React.FC<TemplateProps> = ({ data, theme, settings }) => {
  const { profile, projects, experiences, educations, socialLinks } = data;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 font-mono text-sm leading-relaxed" style={{ color: theme?.textColor, backgroundColor: theme?.backgroundColor }}>
      <header className="mb-20">
        <h1 className="text-2xl font-bold mb-4">{profile.fullName}</h1>
        <p className="opacity-80 mb-6 max-w-xl">{profile.bio}</p>
        <div className="flex flex-wrap gap-4 text-xs opacity-70">
          {profile.email && <a href={`mailto:${profile.email}`} className="hover:underline">email</a>}
          {socialLinks.map(link => (
            <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="hover:underline lowercase">
              {link.platform}
            </a>
          ))}
          {profile.resumeUrl && <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="hover:underline">resume</a>}
        </div>
      </header>

      {settings?.showProjects && projects.length > 0 && (
        <section className="mb-20">
          <h2 className="uppercase tracking-widest opacity-50 mb-8 text-xs font-bold border-b pb-2">Projects</h2>
          <div className="space-y-12">
            {projects.map(project => (
              <article key={project.title}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-bold text-base">{project.title}</h3>
                  <div className="flex gap-3 text-xs">
                    {project.liveUrl && <a href={project.liveUrl} className="hover:underline" style={{ color: theme?.primaryColor }}>live</a>}
                    {project.githubUrl && <a href={project.githubUrl} className="hover:underline" style={{ color: theme?.primaryColor }}>code</a>}
                  </div>
                </div>
                <p className="opacity-80 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs opacity-60">
                  {project.technologies.join(' · ')}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {settings?.showExperience && experiences.length > 0 && (
        <section className="mb-20">
          <h2 className="uppercase tracking-widest opacity-50 mb-8 text-xs font-bold border-b pb-2">Experience</h2>
          <div className="space-y-8">
            {experiences.map(exp => (
              <div key={`${exp.company}-${exp.role}`} className="grid md:grid-cols-[120px_1fr] gap-4">
                <div className="opacity-50 text-xs pt-1">
                  {new Date(exp.startDate).getFullYear()} - {exp.isCurrent ? 'Now' : exp.endDate ? new Date(exp.endDate).getFullYear() : ''}
                </div>
                <div>
                  <h3 className="font-bold">{exp.role}</h3>
                  <div className="opacity-80 mb-2">{exp.company}</div>
                  <p className="opacity-70 text-xs">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {settings?.showEducation && educations.length > 0 && (
        <section className="mb-20">
          <h2 className="uppercase tracking-widest opacity-50 mb-8 text-xs font-bold border-b pb-2">Education</h2>
          <div className="space-y-6">
            {educations.map(edu => (
              <div key={edu.institution} className="grid md:grid-cols-[120px_1fr] gap-4">
                <div className="opacity-50 text-xs pt-1">
                  {new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : ''}
                </div>
                <div>
                  <h3 className="font-bold">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <div className="opacity-80">{edu.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-20 pt-8 border-t opacity-50 text-xs text-center">
        © {new Date().getFullYear()} {profile.fullName}.
      </footer>
    </div>
  );
};
