// import { aboutMe, experiences } from "@/features/home/RightPanelContentMaps";
import { allProjects, allAbouts, allExperiences } from "content-collections";
import { Link } from '@tanstack/react-router';
import TechStack from "@/features/techstack/TechStack";
const sortedFeaturedProjects = [...allProjects]
  .sort((a, b) => a.order - b.order)
  // .slice(0, 4); only show the top 4 on the home page
  
const aboutMe = allAbouts[0];
const sortedExperiences = [...allExperiences].sort((a, b) => a.order - b.order);

export default function RightPanel() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 gap-y-10">
      {/* ABOUT */}
      <section 
        id="about" 
        className="mb-16 scroll-mt-24 md:mb-24 lg:mb-24 lg:scroll-mt-24 pt-4"
      >
        <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-foreground mb-4">
          About Me
        </h2>
        
        {/* Render About Me Markdown with nice vertical spacing */}
        <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed font-sans prose-p:mb-4">
           {aboutMe ? (
             <div dangerouslySetInnerHTML={{ __html: aboutMe.html }} />
           ) : (
             <p>Yes... ni hao</p>
           )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-foreground mb-4">
          Experience
        </h2>
        
        <div className="group/list">
          {sortedExperiences.map((job) => (
            <div key={job._meta.path} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:mb-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
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
                
                {/* Use the Markdown HTML for experience descriptions */}
                <div 
                  className="mt-2 text-sm leading-normal text-foreground/70 prose prose-invert prose-sm max-w-none prose-p:mb-2"
                  dangerouslySetInnerHTML={{ __html: job.html }} 
                />
                
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
          {sortedFeaturedProjects.map((project) => (
            <div 
              key={project._meta.path} 
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:mb-12 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-foreground/5" />
              
              {/* Thumbnail Preview */}
              <div className="z-10 sm:col-span-2 mt-1 rounded border-2 border-foreground/10 transition group-hover:border-foreground/30 sm:order-1 overflow-hidden">
                {project.thumbnail ? (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="h-full w-full object-cover aspect-video"
                  />
                ) : (
                  <div className="bg-slate-800 h-16 w-full rounded flex items-center justify-center text-[10px] text-foreground/30 uppercase tracking-tighter">
                    Preview
                  </div>
                )}
              </div>

              <div className="z-10 sm:col-span-6 sm:order-2">
                <h3 className="font-medium leading-snug text-foreground font-heading group-hover:text-accent">
                  {/* 2. Update Link to use TanStack params and _meta.path */}
                  <Link 
                    to="/projects/$projectId" 
                    params={{ projectId: project._meta.path }}
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base before:absolute before:-inset-x-4 before:-inset-y-4 before:hidden before:rounded lg:before:block"
                  >
                    <span>{project.title}</span>
                  </Link>
                </h3>
                
                {/* 3. Use 'summary' for the short description in the list */}
                <p className="mt-2 text-sm leading-normal text-foreground/70 line-clamp-2">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 relative z-20">
                  {project.technologies.map(tech => (
                    <li key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Link */}
        <div className="mt-12">
          <Link 
            to="/projects" 
            className="inline-flex items-center font-semibold text-foreground hover:text-accent transition-colors group"
          >
            View Full Project Archive
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
      
      <section id="techStack" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-foreground mb-4">
          TECH STACK
        </h2>
        <TechStack />
      </section>
      {/* pure space */}
      <div className="h-[30vh]" aria-hidden="true" />


    </main>
  );
}