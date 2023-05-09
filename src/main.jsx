import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolates from './component/AddChocolates.jsx';
import UpdateChocolates from './component/UpdateChocolates.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/chocolates')
  },
  {
    path: '/addChocolates',
    element: <AddChocolates></AddChocolates>
  },
  {
    path: '/updateChocolates/:id',
    element: <UpdateChocolates></UpdateChocolates>,
    loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
