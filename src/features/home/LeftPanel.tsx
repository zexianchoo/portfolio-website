// src/components/LeftPanel.tsx
import VerticalNav from "@/features/navbar/VerticalNav";
import LightDarkToggle from "@/components/LightDarkToggle";

export default function LeftPanel() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      
      {/* Top section: Bio & Nav */}
      <div>
        <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl">
          Sean Choo Ze Xian
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-foreground/70">
          I build accessible, inclusive products and digital experiences for the web.
        </p>
        
        <VerticalNav />
      </div>

      {/* Bottom section: Theme Toggle & Socials */}
      <div className="mt-8 flex items-center gap-4">
        <LightDarkToggle />
        {/* You can add GitHub/LinkedIn icons here later! */}
      </div>
      
    </header>
  );
}