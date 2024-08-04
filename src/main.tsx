import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/home.tsx'
import Flashcards from './pages/flashcards.tsx'
import Note from './pages/note.tsx'
import Todo from './pages/todolist.tsx'
import Clock from './pages/clock.tsx'

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
      },
      {
        path: "/note",
        element: <Note />
      },
      {
        path: "/todo",
        element: <Todo />
      },
      {
        path: "/clock",
        element: <Clock />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
