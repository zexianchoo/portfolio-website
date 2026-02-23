// src/routes/projects/index.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { projects } from '@/features/projects/ProjectsContent'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/projects/')({
  component: ProjectsArchive,
})

function ProjectsArchive() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <Link to="/" className="group mb-8 inline-flex items-center font-semibold text-accent">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Sean Choo Ze Xian
      </Link>

      <h1 className="text-4xl font-heading font-bold text-foreground mb-16">
        Full Project Archive
      </h1>

      <div className="grid gap-16">
        {projects.map((project) => (
          <div key={project.id} className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-4 text-xs font-semibold uppercase tracking-widest text-foreground/30">
               {project.technologies.join(' / ')}
             </div>
             <div className="md:col-span-8">
               <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-accent">
                 <Link to="/projects/$projectId" params={{ projectId: project.id }}>
                   {project.title}
                 </Link>
               </h2>
               <p className="mt-4 text-foreground/70">{project.description}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}