import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Flashcards from './pages/flashcards.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "/flashcards",
        element: <Flashcards />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="gray" appearance="light" grayColor="slate">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
