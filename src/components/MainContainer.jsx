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
import GifTable from './Table/GifTable';


const router = createBrowserRouter([
  {
    path: '/modulo-control-de-inventario',
    element: <Layout />,
    children: [
      {
        path: '/modulo-control-de-inventario',
        element: <TableProduct />
      },
      {
        path: '/modulo-control-de-inventario/lista',
        element: <TableProduct />
      },
      {
        path: '/modulo-control-de-inventario/producto',
        element: <FormProduct tipo={'guardar'}/>
      },
      {
        path: '/modulo-control-de-inventario/categoria',
        element: <FormCategory />
      },
      {
        path: '/modulo-control-de-inventario/orden',
        element: <FormOrden />
      },
      {
        path: '/modulo-control-de-inventario/entrada',
        element: <FormEntrada tipo={'guardar'} />
      },
    
      {
        path: '/modulo-control-de-inventario/detalles',
        element: <DetailProduct />
      },

      {
        path: '/modulo-control-de-inventario/gif',
        element: <GifTable/>
      }
    ],
  },
]);

function MainContainer() {
  return <RouterProvider router = {router} />
}

export default MainContainer;
