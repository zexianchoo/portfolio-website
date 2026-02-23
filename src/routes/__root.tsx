import React, { Suspense } from 'react'
// 1. Add ScrollRestoration to your TanStack imports
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'

import HorNavBar from '@/features/navbar/HorNav'
import appCss from '../styles.css?url'

// 3. Create a lazy-loaded wrapper for the devtools
const LazyDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      Promise.all([
        import('@tanstack/react-devtools'),
        import('@tanstack/react-router-devtools'),
      ]).then(([core, router]) => ({
        default: () => (
          <core.TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <router.TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ),
      }))
    )
  : () => null // Renders absolutely nothing in production

const themeScript = `
  (function() {
    try {
      var savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      }
    } catch (e) {}
  })();
`;

export const Route = createRootRoute({
  head: () => ({
    // ... (your meta and links stay exactly the same)
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Sean Choo | Portfolio' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} /> 
      </head>
      <body>
        <HorNavBar />
        
        {children}

        {/* 5. Render the lazy DevTools inside a Suspense boundary */}
        <Suspense fallback={null}>
          <LazyDevtools />
        </Suspense>

        <Scripts />
      </body>
    </html>
  )
}