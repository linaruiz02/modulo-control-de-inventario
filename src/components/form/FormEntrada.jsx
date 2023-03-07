import React, { useEffect, useState } from 'react';
import './FormProductstyle.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import showAlert from '../../core/helpers/alerts';

function FormEntrada({ tipo, orden }) {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [arrayEntradas, setArrayEntradas] = useState([]);
  
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    const categorias = JSON.parse(localStorage.getItem('Categorias'));
    setCategorias(categorias);

    const productos = JSON.parse(localStorage.getItem('Productos'));
    setProductos(productos);

    const ordenes = JSON.parse(localStorage.getItem('Ordenes'));
    setOrdenes(ordenes);

    const entradas= JSON.parse(localStorage.getItem('Entradas'));
    console.log('hola', entradas);
    console.log('aqui va orden', orden);
    const entrada = entradas?.find(entrada=>entrada.orden===orden);
    const {orden: ordenEntrada, producto, categoria, cantidad, precioCompra, precioVenta, descripcion} = entrada || {}; 
    
    if(entradas!==null){
      setArrayEntradas(entradas);
    }
    
    setValue('orden', ordenEntrada);
    setValue('producto', producto);
    setValue('categoria', categoria);
    setValue('cantidad', cantidad);
    setValue('Precio Compra', precioCompra);
    setValue('Precio Venta', precioVenta);
    setValue('descripcion', descripcion);
  
  }, []);

  const onSubmit = (object) => {
    console.log('este es el Payload', JSON.stringify(object));

    if (tipo==='actualizar'){
      const newArrayEntradas = arrayEntradas.filter(entrada=>entrada.orden !==orden);
      console.log(newArrayEntradas);
      const newEntradas = [...newArrayEntradas, object];
      localStorage.setItem('Entradas', JSON.stringify(newEntradas));
      return;
    }
    console.log('array entrada', arrayEntradas);
    const entradas = [...arrayEntradas, object];
    localStorage.setItem('Entradas', JSON.stringify(entradas));

    showAlert(
      'Entrada guardada exitosamente',
      'success',
      'Ok'
    );
  }

  return (
    <Form style={{ padding: 40 }} onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2">
        <Col>
          <Form.Label>Orden</Form.Label>
          <Form.Select
            value={watch('orden')}
            name="orden"
            {...register('orden', { required: true })}
            aria-invalid={errors.orden ? 'true' : 'false'}
            type="text"
            isInvalid={errors.orden}
          >
            <option className="option">Selecciona un número de orden</option>
            {ordenes !== null &&
              ordenes.map(
                (orden) =>
                  orden.estado === 'Activo' && (
                    <option key={orden.orden} className="option">
                      {orden.orden}
                    </option>
                  )
              )}
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Producto</Form.Label>
          <Form.Select
            value={watch('producto')}
            name="producto"
            {...register('producto', { required: true })}
            aria-invalid={errors.producto ? 'true' : 'false'}
            type="text"
            isInvalid={errors.producto}
          >
            <option className="option">Selecciona un producto</option>
            {productos !== null &&
              productos.map((producto) => (
                <option key={producto.codigo} className="option">
                  {producto.nombre}
                </option>
              ))}
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-2">
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
        <Col>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            {...register('cantidad', { required: true })}
            aria-invalid={errors.cantidad ? 'true' : 'false'}
            type="text"
            isInvalid={errors.cantidad}
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Label>Precio Compra</Form.Label>
          <Form.Control
            {...register('precio', { required: true })}
            aria-invalid={errors.precio ? 'true' : 'false'}
            type="text"
            isInvalid={errors.precio}
          />
        </Col>
        <Col>
          <Form.Label>Precio Venta</Form.Label>
          <Form.Control
            {...register('venta', { required: true })}
            aria-invalid={errors.venta ? 'true' : 'false'}
            type="text"
            isInvalid={errors.venta}
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            className="inputCustom"
            {...register('descripcion', { required: true })}
            aria-invalid={errors.descripcion ? 'true' : 'false'}
            type="text"
            isInvalid={errors.descripcion}
          />
        </Col>
      </Row>
      {tipo === 'guardar' && (
        <Button
          className="buttonguardar"
          variant="primary"
          type="submit"
          onClick={() => showAlert()}
        >
          {' '}
          Guardar
        </Button>
      )}
      {tipo === 'actualizar' && (
        <Button className="buttonguardar" variant="primary" type="submit">
          Actualizar
        </Button>
      )}
    </Form>
  );
}

FormEntrada.propTypes = {
  tipo: PropTypes.string,
  orden: PropTypes.string,
};

export default FormEntrada;
