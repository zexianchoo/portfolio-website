import { createFileRoute } from '@tanstack/react-router'
import BackLink from '@/components/BackLink'
import { allPoems } from "content-collections";

export const Route = createFileRoute('/poetry/$poetryId')({
  loader: ({ params }) => {
      const poem = allPoems.find((p) => p._meta.path === params.poetryId)
      return { poem }
    },
  component: PoemDetail,
})

function PoemDetail() {
  const { poem } = Route.useLoaderData()

  if (!poem) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-24 text-center">
        <h1 className="mb-4 text-2xl font-bold">poem not found.</h1>
        <BackLink to="/poetry" label="Back to poems" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
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

      <BackLink to="/poetry" label="Back to poems" />
      
      <div className="mx-auto max-w-xl px-6 py-24 text-center lg:text-left">
        <div className="inline-block text-left"> 
          <header className="mb-12 border-b border-foreground/10 pb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent/80 mb-4">
              {poem.date}
            </p>
            <h1 className="text-5xl font-serif font-bold text-foreground italic">
              {poem.title}
            </h1> 
            {poem.thumbnail && (
              <div className="relative my-12 group">
                <div className="absolute -inset-1 bg-linear-to-r from-accent/20 to-transparent rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />
                
                <img 
                  src={`${poem.thumbnail}`} 
                  alt={poem.title}
                  fetchPriority="high"
                  decoding="async"
                  className="relative rounded-2xl w-full max-w-md mx-auto lg:mx-0 object-cover 
                            grayscale-30 contrast-110 brightness-90
                            sepia-20 opacity-80 transition-all duration-700
                            group-hover:grayscale-0 group-hover:brightness-100
                            border border-foreground/5 shadow-2xl" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-bg-linear-to-r from-[#020617] via-transparent to-transparent opacity-40 rounded-2xl" />
              </div>
            )}
            {poem.summary && (
              <p className="mt-4 text-xl text-foreground/60 leading-relaxed italic">
                {poem.summary}
              </p>
            )}

            
          </header>

          <article className="prose prose-invert font-serif text-lg leading-loose tracking-wide text-foreground/90 prose-p:mb-0">
            <div dangerouslySetInnerHTML={{ __html: poem.html }} />
          </article>
        </div>
      </div>
      
      <footer className="mt-20 border-t border-foreground/10 pt-10 text-center">
        <BackLink to="/poetry" label="See more poems" />
      </footer>
    </div>
  )
}

