import React from 'react';
import { Table  } from 'react-bootstrap';
import HeaderProduct from './HeaderProduct';
import './tablestyle.css';

function TableProduct () {

  const productos = JSON.parse(localStorage.getItem('Productos'));
  console.log(productos);

  return(
    <>
      <HeaderProduct ruta='/producto'/>
     
      <Table bordered hover>
        <thead  className='th'>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos !== null ? productos.map(dato => (
            <tr key={dato.codigo}>
              <td>
                {dato.codigo}
              </td>  
              <td>
                {dato.nombre}
              </td>
              <td>
                {dato.descripcion}
              </td>
              <td>
                {dato.categoria}
              </td>
              <td>
                {dato.estado}
              </td>
            </tr>
          )): (
            <tr><td colSpan={5}>¡No existen productos!</td></tr>
          )
          }
          
        </tbody>
      </Table>
   
    </>
  );
}

export default TableProduct;