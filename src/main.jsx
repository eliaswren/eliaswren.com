import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './pages/home/Landing.jsx'
import Music from './pages/music/Music.jsx'
import CS from './pages/cs/Cs.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/music',
        element: <Music />   
    }, 
    {
        path: '/computer-science',
        element: <CS />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )