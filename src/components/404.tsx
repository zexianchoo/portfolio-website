import { Link, useRouterState } from '@tanstack/react-router'
import { Home } from 'lucide-react'

const FourOhFour = () => {
    const { location } = useRouterState();
    const pathname = location.pathname;

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 text-center overflow-hidden">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500 animate-pulse">
                404
            </h1>
            
            <div className="mt-4 space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                    System Error: Page Not Found
                </h2>
                <p className="max-w-md text-slate-400 font-mono text-sm">
                    {/* Replaced window.location.pathname with the hook value */}
                    The requested route <span className="text-pink-400">"{pathname}"</span> 
                    does not exist in the current build.
                </p>
            </div>

            <div className="mt-10">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all bg-pink-600 rounded-lg hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] active:scale-95"
                >
                    <Home size={18} />
                    Return to Source
                </Link>
            </div>

            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        </div>
    )
};

export default FourOhFour;