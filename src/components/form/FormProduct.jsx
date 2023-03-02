import React, { useEffect, useState } from 'react';
import './FormProductstyle.css';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

function FormProduct({ tipo, codigo }) {
  
  const [categorias, setCategorias] = useState([]);
  const [arrayProductos, setArrayProductos] = useState([]);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();

  const mostrarAlertaGuardar = () => {
    swal({
      title: 'Producto Guardado Exitosamente',
      icon: 'success',
      button: 'Ok',
    });
  };
      
  useEffect(() => {
    const categorias = JSON.parse(localStorage.getItem('Categorias'));
    setCategorias(categorias);
    const productos = JSON.parse(localStorage.getItem('Productos'));
    const producto = productos?.find(producto=> producto.codigo === codigo);
    const {codigo: codigoProducto, nombre, categoria, descripcion, estado, precio} = producto || {}; 
    setArrayProductos(productos);
    setValue('codigo', codigoProducto);
    setValue('nombre', nombre);
    setValue('categoria', categoria);
    setValue('descripcion', descripcion);
    setValue('estado', estado);
    setValue('precio', precio);
  },[]);
  
  const onSubmit = (object) => {
    console.log('este es el Payload', JSON.stringify(object));
    
    if (tipo==='actualizar'){
      const newArrayProducts = arrayProductos.filter(producto=>producto.codigo !== codigo)
      console.log(newArrayProducts);
      const newProducts = [...newArrayProducts, object];
      localStorage.setItem('Productos', JSON.stringify(newProducts));
      return;
    }
    const productos = [...arrayProductos, object];
    localStorage.setItem('Productos', JSON.stringify(productos));

  };
  
  
    

  return (
    <Form style={{ padding: 40 }} onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2">
        <Col>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              {...register('nombre', { required: true })}
              aria-invalid={errors.nombre ? 'true' : 'false'}
              type="text"
              isInvalid={errors.nombre}
            />
            <Form.Control.Feedback type="invalid">
              Nombre es requerido
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            value={watch('categoria')}
            name="categoria"
            {...register('categoria', { required: true })}
            aria-invalid={errors.categoria ? 'true' : 'false'}
            type="text"
            isInvalid={errors.categoria}
          >
            <option className="option">Selecciona una categoría</option>
            {categorias !== null &&
              categorias.map((categoria) => (
                <option key={categoria.nombre} className="option">
                  {categoria.nombre}
                </option>
              ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <FormGroup>
            <Form.Label>Código</Form.Label>
            <Form.Control
              {...register('codigo', { required: true })}
              aria-invalid={errors.codigo ? 'true' : 'false'}
              type="text"
              isInvalid={errors.codigo}
            />
            <Form.Control.Feedback type="invalid">
              Código es requerido
            </Form.Control.Feedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              {...register('descripcion', { required: true })}
              aria-invalid={errors.descripcion ? 'true' : 'false'}
              type="text"
              isInvalid={errors.descripcion}
            />
            <Form.Control.Feedback type="invalid">
              Descripción es requerida
            </Form.Control.Feedback>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Label>Estado</Form.Label>
          <Form.Select
            {...register('estado', { required: true })}
            aria-invalid={errors.estado ? 'true' : 'false'}
            type="text"
            isInvalid={errors.estado}
          >
            <option className="option">Activo</option>
            <option className="option">Inactivo</option>
          </Form.Select>
        </Col>
        <Col>
          <FormGroup>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              {...register('precio', { required: true })}
              aria-invalid={errors.precio ? 'true' : 'false'}
              type="text"
              isInvalid={errors.precio}
            />
            <Form.Control.Feedback type="invalid">
              Precio es requerido
            </Form.Control.Feedback>
          </FormGroup>
        </Col>
      </Row>
      {tipo === 'guardar' && (
        <Button
          className="buttonguardar"
          variant="primary"
          type="submit"
          onClick={() => mostrarAlertaGuardar()}> Guardar</Button>
      )}
      {tipo === 'actualizar' && (
        <Button className="buttonguardar"variant="primary" type="submit"
        >Actualizar</Button>
      )}
    </Form>
  );
}

FormProduct.propTypes = {
  tipo: PropTypes.string,
  codigo:PropTypes.string
}

export default FormProduct;
