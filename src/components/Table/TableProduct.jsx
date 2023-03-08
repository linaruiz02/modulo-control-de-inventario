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

  const [inputValue, setInputValue] = useState('');
 
  const handleShow = (codigo) =>{
    setShow(true);
    setCodigo(codigo);
  } 
  
  const handleClose = () => setShow(false);

  useEffect(()=>{
    const productos = JSON.parse(localStorage.getItem('Productos'));
    const busqueda= !inputValue ? productos: productos.filter((product)=>product.nombre.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    setProductos(busqueda);
  },[inputValue]);

  return (
    <>
      <HeaderProduct ruta="/modulo-control-de-inventario/producto" inputValue={inputValue} setInputValue={setInputValue} />
      <div className='scrollTable'>
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
      </div>
      <ModalOpen 
        show={show} 
        handleClose={handleClose} 
        Form={<FormProduct tipo='actualizar' codigo={codigo} />} 
        titulo={'Editar Producto'}
      />
    </>
  );
}


export default TableProduct;
