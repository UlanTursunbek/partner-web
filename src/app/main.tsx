import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Index } from '@/pages'
import { Settings } from '@/pages/settings'
import { ROUTES } from '@/shared/constants/routes'

import './index.css'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Index />,
  },
  {
    path: ROUTES.settings,
    element: <Settings />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
