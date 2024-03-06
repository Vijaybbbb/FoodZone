import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import ProductPage from './components/ProductsPage/ProductPage'
import Profile from './components/Profile/Profile'
import ProductView from './components/ProductView.jsx/ProductView'
import Cart from './components/Cart/Cart'

function App() {

  const router = createBrowserRouter([
    {
      path: 'signup',
      element: <Signup />
    },
    {
      path: '/',
      element: <Login />
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'products',
      element:<ProductPage/>
    },
    {
      path:'profile',
      element:<Profile/>
    },
    {
      path:'productview/:id',
      element:<ProductView/>
    }
    ,{
      path:'cart',
      element:<Cart/>

    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
