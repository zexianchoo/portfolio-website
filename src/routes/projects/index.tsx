import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import BackLink from '@/components/BackLink'

export const Route = createFileRoute('/projects/')({
  component: ProjectsArchive,
})

function ProjectsArchive() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <BackLink to="/" label="Back to Home" />

      <h1 className="text-4xl font-heading font-bold text-foreground mb-16">
        All my projects! :3
      </h1>

      <div className="grid gap-16">
        {allProjects.map((project) => (
          <div 
            key={project._meta.path} 
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-4 transition-all lg:hover:bg-foreground/5 rounded-xl"
          >
            <div className="md:col-span-4 text-xs font-semibold uppercase tracking-widest text-foreground/50 relative z-10">
              {project.technologies.join(' | ')}
            </div>

            <div className="md:col-span-8">
              <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-accent">
                <Link 
                  to="/projects/$projectId" 
                  params={{ projectId: project._meta.path }}
                  className="static before:absolute before:inset-0 before:z-0"
                >
                  {project.title}
                </Link>
              </h2>
              
              {project.summary && (
                <p className="mt-2 text-foreground/60 line-clamp-2">
                  {project.summary}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}