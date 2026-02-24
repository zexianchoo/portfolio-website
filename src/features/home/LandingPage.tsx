// import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { Suspense, lazy } from 'react'
const LeftPanel = lazy(() => import('@/features/home/LeftPanel'))
import { LeftPanelSkeleton } from "@/features/home/LeftPanel";

export function LandingPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Suspense fallback={<LeftPanelSkeleton />}>
          <LeftPanel />
        </Suspense>
        <RightPanel />
      </div>
    </div>
  )
}