import React, { Suspense } from 'react'
import FourOhFour from '@/components/404'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'

import HorNavBar from '@/features/navbar/HorNav'
import appCss from '../styles.css?url'

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
      { property: 'og:title', content: 'Sean Choo | Backend & Infra Engineer' },
      { property: 'og:description', content: 'I build backend systems and k8s homelabs.' },
      { property: 'og:image', content: 'https://seanchoo.dev/me.webp' },
      { property: 'og:url', content: 'https://seanchoo.dev' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { 
        rel: 'preload', 
        href: '/fonts/inter-v20-latin-regular.woff2', 
        as: 'font', 
        type: 'font/woff2', 
        crossOrigin: 'anonymous' 
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: FourOhFour,
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

        <Suspense fallback={null}>
          <LazyDevtools />
        </Suspense>

        <Scripts />
      </body>
    </html>
  )
}