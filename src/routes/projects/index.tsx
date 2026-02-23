// index.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import BackLink from '@/components/BackLink'

export const Route = createFileRoute('/projects/')({
  loader: () => {
    const sortedProjects = [...allProjects].sort((a, b) => a.order - b.order);
    return { sortedProjects };
  },
  component: ProjectsArchive,
})

function ProjectsArchive() {
  const { sortedProjects } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <BackLink to="/" label="Back to Home" />

      <header className="mb-16">
        <h1 className="text-4xl font-heading font-bold text-foreground sm:text-5xl">
          All my projects :3
        </h1>
        <p className="mt-4 text-foreground/60">
          A collection of things I've built while probably semi-insane and too obsessed
        </p>
      </header>

      <div className="grid gap-12">
        {sortedProjects.map((project) => (
          <div 
            key={project._meta.path} 
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-6 transition-all lg:hover:bg-foreground/5 rounded-xl border border-transparent hover:border-foreground/10"
          >
            {/* YEAR / TECH SIDEBAR */}
            <div className="md:col-span-2 text-xs font-semibold uppercase tracking-widest text-foreground/40 mt-1">
              {project.year || "Ongoing"}
            </div>

            {/* THUMBNAIL */}
            <div className="md:col-span-3 overflow-hidden rounded-lg border border-foreground/10 aspect-video bg-foreground/5">
               {project.thumbnail ? (
                  <img 
                    src={`${project.thumbnail}`} 
                    alt={project.title} 
                    // 3. Defer loading for images further down the page
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-tighter">
                    No Preview
                  </div>
                )}
            </div>

            {/* CONTENT */}
            <div className="md:col-span-7">
              <h2 className="text-2xl font-heading font-bold text-foreground group-hover:text-accent">
                {/* TanStack <Link> automatically pre-fetches the loader data of the destination! */}
                <Link 
                  to="/projects/$projectId" 
                  params={{ projectId: project._meta.path }}
                  className="static before:absolute before:inset-0 before:z-0"
                >
                  {project.title}
                </Link>
              </h2>
              
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {project.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2 relative z-10">
                {project.technologies.map(tech => (
                  <li key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}