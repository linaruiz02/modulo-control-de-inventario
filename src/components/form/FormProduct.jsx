import React from 'react';
import './FormProductstyle.css';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


function FormProduct () {

  const {register,formState: { errors },handleSubmit}= useForm();

  const mostrarAlerta=()=>{
    swal({
      title:'Producto Guardado Exitosamente',
      icon:'success',
      button:'Ok'
    });
  }

  const categoria = JSON.parse(localStorage.getItem('Categorias'));
  console.log(categoria);


  const onSubmit= (object) =>{
    console.log('este es el Payload',JSON.stringify(object));

    const arrayProductos = JSON.parse(localStorage.getItem('Productos')) || [];
    const productos = [...arrayProductos, object]; 
    localStorage.setItem('Productos', JSON.stringify(productos));

    
  }

  return(
    <Form style={{ padding: 40 }} onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2" >
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
          <Form.Select name='categoria'
            {...register('categoria', { required: true })} 
            aria-invalid={errors.categoria ? 'true' : 'false'} 
            type="text"
            isInvalid={errors.categoria}
          >
            <option className='option'>
                Selecciona una categoría
            </option>
            {categoria !== null && categoria.map(categoria=>(
              <option key={categoria.id} className='option'>
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
            <Form.Control  {...register('codigo' , {required: true})} 
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
            <Form.Control  {...register('descripcion', { required: true })} 
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
            {...register('estado',{ required: true } )}
            aria-invalid={errors.estado ? 'true' : 'false'} 
            type="text"
            isInvalid={errors.estado}
          >
            <option className='option'>Activo</option>
            <option className='option'>Inactivo</option>
          </Form.Select>
        </Col>
        <Col>
          <FormGroup>
            <Form.Label>Precio</Form.Label>
            <Form.Control {...register('precio',{ required: true } )}
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
      <Button className='buttonguardar' variant="primary" type="submit"
        onClick={()=>mostrarAlerta()}
      >Guardar</Button>
      
    </Form>
        
  );
}


export default FormProduct;