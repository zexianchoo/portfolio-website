import { createFileRoute } from '@tanstack/react-router'
import BackLink from '@/components/BackLink'
import { allProjects } from "content-collections";

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
})

function ProjectDetail() {
  const { projectId } = Route.useParams()
  const project = allProjects.find((p) => p._meta.path === projectId)

  if (!project) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-24 text-center">
        <h1 className="mb-4 text-2xl font-bold">Project not found.</h1>
        <BackLink to="/projects" label="Back to Projects" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <BackLink to="/projects" label="Back to Projects" />
      
      {/* Header Section */}
      <header className="mb-12 border-b border-foreground/10 pb-12">
        <h1 className="text-4xl font-bold font-heading text-foreground md:text-5xl">
          {project.title}
        </h1>
        {project.thumbnail && (
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="rounded-xl mb-8" 
          />
        )}
        {project.summary && (
          <p className="mt-4 text-xl text-foreground/60 leading-relaxed italic">
            {project.summary}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium tracking-wide uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Main Content Section */}
      <article 
        className={`
          prose prose-invert max-w-none 
          prose-headings:font-heading prose-headings:text-foreground
          prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
          prose-li:text-foreground/80
          prose-strong:text-accent prose-strong:font-semibold
          prose-img:rounded-xl prose-img:border prose-img:border-foreground/10
        `}
        dangerouslySetInnerHTML={{ __html: project.html }} 
      />
      
      {/* Footer / Contact call to action maybe? */}
      <footer className="mt-20 border-t border-foreground/10 pt-10 text-center">
        <BackLink to="/projects" label="See more projects" />
      </footer>
    </div>
  )
}