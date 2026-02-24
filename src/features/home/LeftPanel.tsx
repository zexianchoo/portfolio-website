import VerticalNav from "@/features/navbar/VerticalNav";
import SocialLinks from "@/components/SocialLinks";

export default function LeftPanel() {
  return (
    // Added a smaller default padding for mobile (py-12), and the larger padding for desktop (lg:py-24)
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-12 lg:py-24">
      
      {/* MOBILE: items-center & text-center
        DESKTOP: lg:items-start & lg:text-left 
      */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        
        {/* MOBILE: mx-auto (centered) | DESKTOP: lg:mx-0 (flushed left) */}
        <div className="group mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-foreground/10 shadow-2xl sm:h-48 sm:w-48 transition-all hover:border-accent/20 mx-auto lg:mx-0">
          <img 
            src="/me.webp" 
            srcSet="/me-small.webp 400w, /me.webp 800w"
            sizes="(max-width: 1024px) 400px, 800px" 
            alt="Sean Choo Ze Xian"
            fetchPriority="high"
            decoding="async" 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Sean Choo Ze Xian
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Backend / Infra Software Engineer
        </h2>
        {/* Same responsive margin trick for the paragraph text max-width */}
        <p className="mt-4 max-w-xs leading-normal text-foreground/50 mx-auto lg:mx-0">
          I build backend systems for work but I'm secretly a k8s homelab merchant.
        </p>
        
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <VerticalNav />
          </ul>
        </nav>
      </div>

      {/* MOBILE: justify-center | DESKTOP: lg:justify-start */}
      <ul className="mt-8 flex items-center justify-center lg:justify-start gap-5">
        <SocialLinks />
      </ul>
      
    </header>
  );
}