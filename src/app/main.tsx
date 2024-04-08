import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BudgetPage } from '@/pages'
import { IndexPage } from '@/pages/IndexPage'
import { ListPage } from '@/pages/ListPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { ROUTES } from '@/shared/constants/routes'
import { LayoutMain } from '@/widgets'
import { ChakraProvider, Container } from '@chakra-ui/react'

import { customTheme } from './theme'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: (
      <LayoutMain>
        <IndexPage />
      </LayoutMain>
    ),
  },
  {
    path: ROUTES.list,
    element: (
      <LayoutMain>
        <ListPage />
      </LayoutMain>
    ),
  },
  {
    path: ROUTES.budget,
    element: (
      <LayoutMain>
        <BudgetPage />
      </LayoutMain>
    ),
  },
  {
    path: ROUTES.settings,
    element: (
      <LayoutMain>
        <SettingsPage />
      </LayoutMain>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <Container
        maxW={'430px'}
        margin={'0 auto'}
        height={'100dvh'}
        backgroundColor={'white'}
        color={'black'}
      >
        <RouterProvider router={router} />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
)
