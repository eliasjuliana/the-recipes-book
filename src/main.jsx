import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'

import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster position='top-right' richColors/>
    </QueryClientProvider>
  </React.StrictMode>,
)
