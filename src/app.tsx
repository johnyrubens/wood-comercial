import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { querClient } from './lib/react-query'
import { router } from './routs'

export function App() {
  return (
    <ThemeProvider storageKey="woodadmin-theme" defaultTheme="system">
      <QueryClientProvider client={querClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
