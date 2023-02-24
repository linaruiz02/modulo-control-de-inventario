import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import HeaderProduct from './HeaderProduct';

import './tablestyle.css';
import ModalOpen from '../modal/ModalOpen';
import FormProduct from '../form/FormProduct';

function TableProduct() {

  const [productos, setProductos] = useState([]);
  
  const [show, setShow] = useState(false);
  const [ codigo, setCodigo ] = useState();
 
  const handleShow = (codigo) =>{
    setShow(true);
    setCodigo(codigo);
  } 
  
  const handleClose = () => setShow(false);
  
  useEffect(()=>{
    const productos = JSON.parse(localStorage.getItem('Productos'));
    setProductos(productos);
  },[]);

  return (
    <>
      <HeaderProduct ruta="/modulo-control-de-inventario/producto" />

      <Table bordered hover>
        <thead className="th">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos !== null ? (
            productos.map((dato) => (
              <tr key={dato.codigo}>
                <td>{dato.codigo}</td>
                <td>{dato.nombre}</td>
                <td>{dato.descripcion}</td>
                <td>{dato.categoria}</td>
                <td>{dato.estado}</td>
                <td>
                  <Button
                    className="modalOpen"
                    variant="primary"
                    onClick={()=>handleShow(dato.codigo)} >
                    <i className="bi bi-pen-fill" /> Editar
                  </Button>
        
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>¡No existen productos!</td>
            </tr>
          )}
        </tbody>
      </Table>
      <ModalOpen show={show} handleClose={handleClose} codigo={codigo} FormProduct={<FormProduct/>} />
    </>
  );
}


export default TableProduct;
