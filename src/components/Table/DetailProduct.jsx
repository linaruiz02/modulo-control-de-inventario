import React from 'react';
import { Table } from 'react-bootstrap';
import './detallestyle.css';
import HeaderProduct from './HeaderProduct';

function DetailProduct () {

  const entradas = JSON.parse(localStorage.getItem('Entradas'));
  return(
    <>
      <HeaderProduct ruta='/entrada'/>

      <Table bordered hover>
        <thead  className='th'>
          <tr>
            <th>Orden</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Precio Compra</th>
            <th>Precio Venta</th>
            <th>Descripción</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {entradas.map(entrada => (
            <tr key={entrada.id}>
              <td>
                {entrada.orden}
              </td>  
              <td>
                {entrada.producto}
              </td>
              <td>
                {entrada.categoria}
              </td>
              <td>
                {entrada.cantidad}
              </td>
              <td>
                {entrada.precio}
              </td>
              <td>
                {entrada.venta}
              </td>
              <td>
                {entrada.descripcion}
              </td>
            </tr>
          ))}
          
        </tbody>
      </Table>
   
    </>
  );
}


export default DetailProduct;