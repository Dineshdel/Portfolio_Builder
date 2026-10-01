import React from 'react';
import type { TemplateProps } from '../../registry';

export const CreativeDeveloperTemplate: React.FC<TemplateProps> = ({ data, theme, settings }) => {
  const { profile, projects, skills, socialLinks } = data;

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: theme?.backgroundColor, color: theme?.textColor }}>
      
      {/* Dynamic Background Element */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" style={{
        background: `radial-gradient(circle at 50% 50%, ${theme?.primaryColor} 0%, transparent 50%)`,
        filter: 'blur(100px)'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-24">
          <div className="text-2xl font-black italic tracking-tighter">{profile.fullName.split(' ')[0]}</div>
          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" 
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:scale-110 transition-transform"
                style={{ borderColor: theme?.primaryColor, color: theme?.primaryColor }}>
                {link.platform.charAt(0)}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-6">
              {profile.headline?.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-transparent" : ""} 
                      style={i % 2 === 1 ? { WebkitTextStroke: `2px ${theme?.textColor}` } : {}}>
                  {word}<br/>
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-80 max-w-md mb-8 border-l-4 pl-4" style={{ borderColor: theme?.primaryColor }}>
              {profile.bio}
            </p>
          </div>
          {profile.profileImage && (
            <div className="relative group">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl" style={{ backgroundColor: theme?.primaryColor }}></div>
              <img src={profile.profileImage} alt={profile.fullName} 
                   className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          )}
        </div>

        {/* Scrolling Skills Marquee (Simulated) */}
        {settings?.showSkills && skills.length > 0 && (
          <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] py-8 border-y-2 transform -rotate-2 bg-white text-black mb-32 flex overflow-hidden">
            <div className="flex space-x-12 whitespace-nowrap px-4 text-4xl font-black uppercase">
              {skills.map(skill => <span key={skill.name}>{skill.name}</span>)}
              {skills.map(skill => <span key={skill.name + '-dup'}>{skill.name}</span>)}
            </div>
          </div>
        )}

        {/* Projects */}
        {settings?.showProjects && projects.length > 0 && (
          <div className="mb-32">
            <h2 className="text-5xl font-black mb-16 text-center">FEATURED WORK</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {projects.map((project, idx) => (
                <div key={project.title} className={`group ${idx % 2 === 1 ? 'md:mt-24' : ''}`}>
                  <div className="overflow-hidden rounded-2xl mb-6 relative" style={{ backgroundColor: theme?.primaryColor }}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover mix-blend-luminosity group-hover:mix-blend-normal hover:scale-105 transition-all duration-700" />
                    ) : (
                      <div className="w-full aspect-[4/3] flex items-center justify-center text-4xl font-black opacity-20">No Image</div>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="opacity-70 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.liveUrl && <a href={project.liveUrl} className="font-bold underline underline-offset-4 hover:opacity-70" style={{ textDecorationColor: theme?.primaryColor }}>View Site</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
