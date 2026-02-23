import { createFileRoute, Link } from '@tanstack/react-router'
import BackLink from '@/components/BackLink'
import { allPoems } from 'content-collections';

export const Route = createFileRoute('/poetry/')({
  component: PoetryArchive,
})

function PoetryArchive() {
  const sortedPoems = [...allPoems].sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none opacity-100 overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="h-full w-full bg-no-repeat bg-center bg-cover transform-gpu"
          style={{ 
            backgroundImage: "url('/wave.webp')",
          }}
        />
      </div>
      <BackLink to="/" label="Back to Home" />

      <header className="mb-16">
        <h1 className="text-4xl font-heading font-bold text-foreground sm:text-5xl">
          Poetry
        </h1>
        <p className="mt-4 text-foreground/60">
          The art of wisely choosing words.
        </p>
      </header>

    <div className="grid gap-12">
        {sortedPoems.map((poem) => (
          <div 
            key={poem._meta.path} 
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-6 transition-all lg:hover:bg-foreground/5 rounded-xl border border-transparent hover:border-foreground/10"
          >
            {/* YEAR / TECH SIDEBAR */}
            <div className="md:col-span-2 text-xs font-semibold uppercase tracking-widest text-foreground/40 mt-1">
              {poem.date || "Ongoing"}
            </div>

            {/* THUMBNAIL */}
            <div className="md:col-span-3 overflow-hidden rounded-lg border border-foreground/10 aspect-video bg-foreground/5">
               {poem.thumbnail ? (
                  <img 
                    src={`${poem.thumbnail}`} 
                    alt={poem.title} 
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
                <Link 
                  to="/poetry/$poetryId" 
                  params={{ poetryId: poem._meta.path }}
                  className="static before:absolute before:inset-0 before:z-0"
                >
                  {poem.title}
                </Link>
              </h2>
              
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {poem.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}