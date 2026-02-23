import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '../features/home/LandingPage'

export const Route = createFileRoute('/')({
  component: LandingPage, 
})

function PortfolioHome() {
  return (
    <main className="min-h-screen bg-brand-primary text-background font-heading p-6 md:p-12">

    </main>
  )
}