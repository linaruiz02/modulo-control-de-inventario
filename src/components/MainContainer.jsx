import React from 'react';
import './Container.css';
import Layout from './layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormProduct from './form/FormProduct';
import TableProduct from './Table/TableProduct';
import FormCategory from './form/FormCategory';
import DetailProduct from './Table/DetailProduct';
import FormEntrada from './form/FormEntrada';
import FormOrden from './form/FormOrden';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TableProduct />
      },
      {
        path: 'lista',
        element: <TableProduct />
      },
      {
        path: 'producto',
        element: <FormProduct />
      },
      {
        path: 'categoria',
        element: <FormCategory />
      },
      {
        path: 'orden',
        element: <FormOrden />
      },
      {
        path: 'entrada',
        element: <FormEntrada />
      },
    
      {
        path: 'detalles',
        element: <DetailProduct />
      },
    ],
  },
]);

function MainContainer() {
  return <RouterProvider router = {router} />
}

export default MainContainer;
