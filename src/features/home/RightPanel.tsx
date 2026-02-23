import { aboutMe, experiences } from "@/features/home/RightPanelContentMaps";
import { projects } from "@/features/projects/ProjectsContent"
import { Link } from '@tanstack/react-router';

export default function RightPanel() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 gap-y-10">
      {/* ABOUT */}
      <section 
        id="about" 
        className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36 lg:scroll-mt-24 pt-4"
      >
        <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-foreground mb-4">
          About
        </h2>
        
        <div className="flex flex-col gap-4 text-foreground/80 leading-relaxed font-sans">
          {aboutMe.paragraphs.map((para, index) => (
            <p key={index}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-foreground mb-4">
          Experience
        </h2>
        
        {/* We wrap the map in a 'group/list' so we can dim siblings on hover */}
        <div className="group/list">
          {experiences.map((job, index) => (
            <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:mb-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/* Background Glow on Hover */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg" />
              
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-foreground/50 mt-1">
                {job.year}
              </header>
              
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground font-heading">
                  <div>
                    <span className="text-accent">{job.role}</span> • {job.company}
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-foreground/70">
                  {job.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <li key={tech} className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-foreground mb-4">
          Projects
        </h2>
        <div className="group/list">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:mb-12 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/5" />
              <div className="z-10 sm:col-span-2 mt-1 rounded border-2 border-foreground/10 transition group-hover:border-foreground/30 sm:order-1">
                <div className="bg-slate-800 h-16 w-full rounded flex items-center justify-center text-[10px] text-foreground/30 uppercase tracking-tighter">
                  Preview
                </div>
              </div>

              <div className="z-10 sm:col-span-6 sm:order-2">
                <h3 className="font-medium leading-snug text-foreground font-heading group-hover:text-accent">
                  <Link to={project.link} 
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base before:absolute before:-inset-x-4 before:-inset-y-4 before:hidden before:rounded lg:before:block"
                  >
                    <span>{project.title}</span>
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-normal text-foreground/70">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 relative z-20">
                  {project.technologies.map(tech => (
                    <li key={tech} className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* pure space */}
      <div className="h-[20vh]" aria-hidden="true" />
    </main>
  );
}