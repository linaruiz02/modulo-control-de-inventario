import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './detallestyle.css';
import PropTypes from 'prop-types';
import HeaderProduct from './HeaderProduct';
import ModalOpen from '../modal/ModalOpen';
import FormEntrada from '../form/FormEntrada';

function DetailProduct() {

  const [entradas, setEntradas] = useState([]);

  const [show, setShow] = useState(false);

  const [ orden, setOrden ] = useState();

  const [inputValue, setInputValue] = useState('');
 
  const handleShow = (orden) =>{
    setShow(true);
    setOrden(orden);
  } 

  const handleClose = () => setShow(false);

 

  useEffect (()=>{
    const entradas = JSON.parse(localStorage.getItem('Entradas'));
    const busqueda= !inputValue ? entradas: entradas.filter((product)=>product.producto.toLowerCase().includes(inputValue.toLocaleLowerCase()));
    setEntradas(busqueda);

  },[])
 
  return (
    <>
      <HeaderProduct ruta="/modulo-control-de-inventario/entrada" inputValue={inputValue} setInputValue={setInputValue}/>

      <Table bordered hover>
        <thead className="th">
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
          {entradas !== null ? (
            entradas.map((entrada) => (
              <tr key={entrada.orden}>
                <td>{entrada.orden}</td>
                <td>{entrada.producto}</td>
                <td>{entrada.categoria}</td>
                <td>{entrada.cantidad}</td>
                <td>{entrada.precio}</td>
                <td>{entrada.venta}</td>
                <td>{entrada.descripcion}</td>
                <td>
                  <Button className="modalOpen" 
                    variant="primary" 
                    type="submit" 
                    onClick={()=>handleShow(entrada.orden)}>
                    <i className="bi bi-pen-fill" /> Editar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>¡No existen entradas!</td> 
            </tr>
          )}
        </tbody>
      </Table>
      <ModalOpen 
        show={show} 
        handleClose={handleClose} 
        orden={orden} 
        Form={<FormEntrada tipo='actualizar' orden={orden}/>} 
        titulo={'Editar Entrada'}
      />
    </>
  );
}
DetailProduct.propTypes = {
  handleShow: PropTypes.func,
  handleClose: PropTypes.func,
  show: PropTypes.bool
  
}
export default DetailProduct;
