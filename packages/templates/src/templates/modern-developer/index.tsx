import React from 'react';
import type { TemplateProps } from '../../registry';

export const ModernDeveloperTemplate: React.FC<TemplateProps> = ({ data, theme, settings }) => {
  const { profile, projects, skills, experiences, educations, socialLinks } = data;

  return (
    <div className="min-h-screen">
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-200" style={{ backgroundColor: `${theme?.backgroundColor}cc` }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">{profile.fullName}</h1>
          <nav className="hidden md:flex gap-6">
            {settings?.showAbout && <a href="#about" className="hover:opacity-70 transition-opacity">About</a>}
            {settings?.showProjects && <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>}
            {settings?.showExperience && <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>}
            {settings?.showContact && <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center gap-12 pt-10 md:pt-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              {profile.headline}
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl leading-relaxed">
              {profile.bio}
            </p>
            <div className="flex gap-4 pt-4">
              {settings?.showContact && (
                <a href="#contact" className="px-6 py-3 font-medium text-white shadow-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: theme?.primaryColor, borderRadius: theme?.borderRadius }}>
                  Get in touch
                </a>
              )}
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="px-6 py-3 font-medium border transition-transform hover:-translate-y-1" style={{ borderColor: theme?.primaryColor, color: theme?.primaryColor, borderRadius: theme?.borderRadius }}>
                  View Resume
                </a>
              )}
            </div>
            <div className="flex gap-4 pt-6">
              {socialLinks.map(link => (
                <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition-opacity font-medium">
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          {profile.profileImage && (
            <div className="w-48 h-48 md:w-80 md:h-80 relative flex-shrink-0">
              <img src={profile.profileImage} alt={profile.fullName} className="w-full h-full object-cover shadow-2xl" style={{ borderRadius: theme?.borderRadius }} />
            </div>
          )}
        </section>

        {/* Projects Section */}
        {settings?.showProjects && projects.length > 0 && (
          <section id="projects" className="space-y-12">
            <h3 className="text-3xl font-bold border-b pb-4">Selected Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div key={project.title} className="group overflow-hidden border border-gray-100 bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300" style={{ borderRadius: theme?.borderRadius }}>
                  {project.image && (
                    <div className="h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="opacity-80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-gray-200/50 text-gray-800 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      {project.liveUrl && <a href={project.liveUrl} className="text-sm font-semibold hover:underline" style={{ color: theme?.primaryColor }}>Live Demo &rarr;</a>}
                      {project.githubUrl && <a href={project.githubUrl} className="text-sm font-semibold hover:underline" style={{ color: theme?.primaryColor }}>Source Code</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience & Skills */}
        <div className="grid md:grid-cols-2 gap-16">
          {settings?.showExperience && experiences.length > 0 && (
            <section id="experience" className="space-y-8">
              <h3 className="text-3xl font-bold border-b pb-4">Experience</h3>
              <div className="space-y-8">
                {experiences.map(exp => (
                  <div key={`${exp.company}-${exp.role}`} className="relative pl-6 border-l-2" style={{ borderColor: theme?.primaryColor }}>
                    <div className="absolute w-3 h-3 rounded-full -left-[7px] top-2" style={{ backgroundColor: theme?.primaryColor }}></div>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <div className="flex justify-between items-center opacity-70 text-sm mb-3">
                      <span>{exp.company}</span>
                      <span>
                        {new Date(exp.startDate).getFullYear()} - {exp.isCurrent ? 'Present' : exp.endDate ? new Date(exp.endDate).getFullYear() : ''}
                      </span>
                    </div>
                    <p className="opacity-80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {settings?.showEducation && educations.length > 0 && (
            <section id="education" className="space-y-8 mt-16">
              <h3 className="text-3xl font-bold border-b pb-4">Education</h3>
              <div className="space-y-6">
                {educations.map(edu => (
                  <div key={edu.institution} className="grid md:grid-cols-[120px_1fr] gap-4">
                    <div className="opacity-50 text-sm font-medium">
                      {new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{edu.degree} {edu.field && `in ${edu.field}`}</h4>
                      <div className="opacity-80">{edu.institution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {settings?.showSkills && skills.length > 0 && (
            <section id="skills" className="space-y-8">
              <h3 className="text-3xl font-bold border-b pb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <div key={skill.name} className="px-4 py-2 border shadow-sm font-medium" style={{ borderRadius: theme?.borderRadius, borderColor: 'rgba(0,0,0,0.1)' }}>
                    {skill.name} <span className="opacity-50 text-xs ml-1">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer / Contact */}
      {settings?.showContact && (
        <footer id="contact" className="mt-32 py-16 text-center border-t border-gray-200" style={{ backgroundColor: theme?.primaryColor, color: theme?.backgroundColor }}>
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            <h3 className="text-4xl font-bold">Let's work together</h3>
            <p className="opacity-90 text-lg">I'm currently available for freelance work and open to new opportunities.</p>
            <a href={`mailto:${profile.email}`} className="inline-block px-8 py-4 font-bold bg-white text-black hover:scale-105 transition-transform" style={{ borderRadius: theme?.borderRadius, color: theme?.primaryColor }}>
              Say Hello
            </a>
            <div className="pt-8 opacity-70 text-sm">
              © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
