import { createFileRoute, Link } from '@tanstack/react-router'
import { projects } from '@/features/projects/ProjectsContent'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
})

function ProjectDetail() {
  // 1. Grab the ID from the URL. 
  // Because the filename is $projectId.tsx, the key is projectId.
  const { projectId } = Route.useParams()

  // 2. Find the project in your array
  const project = projects.find((p) => p.id === projectId)

  // 3. Handle 404
  if (!project) {
    return <div className="p-24 text-center">Project not found.</div>
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link to="/projects" className="flex items-center gap-2 text-accent mb-8">
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      
      <h1 className="text-4xl font-bold font-heading">{project.title}</h1>
      <p className="mt-4 text-foreground/70">{project.description}</p>
      
      <div className="mt-8 flex gap-2">
        {project.technologies.map(tech => (
          <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}