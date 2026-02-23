import VerticalNav from "@/features/navbar/VerticalNav";
import SocialLinks from "@/components/SocialLinks";

export default function LeftPanel() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      
      <div className="flex flex-col items-center lg:items-start">
        
        <div className="group mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-foreground/10 shadow-2xl sm:h-72 sm:w-72 transition-all hover:border-accent/20 mx-auto lg:mx-0">
          <img 
            src="/me.webp" 
            srcSet="/me-small.webp 400w, /me.webp 800w"
            alt="Sean Choo Ze Xian"
            fetchPriority="high"
            decoding="async" 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-heading font-bold tracking-tight text-balance text-foreground sm:text-5xl leading-tight">
            Sean Choo Ze Xian
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Backend / Infra Software Engineer
          </h2>
          <p className="mt-4 max-w-xs mx-auto lg:mx-0 leading-normal text-foreground/70">
            I build backend systems for work but I'm secretly a k8s homelab merchant
          </p>
          

          <div className="mt-12">
            <VerticalNav />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center lg:justify-start items-center gap-4">
        <SocialLinks />
      </div>
      
    </header>
  );
}