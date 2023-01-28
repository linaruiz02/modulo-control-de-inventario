import React from 'react';
import './FormCategorystyle.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

function FormCategory () {

  const {register,formState: { errors },handleSubmit}= useForm();
  const mostrarAlerta=()=>{
    swal({
      title:'Categoría guardada Exitosamente',
      icon:'success',
      button:'Ok'
    });
  }

  const onSubmit= (object) =>{
    
    const arrayCategorias = JSON.parse(localStorage.getItem('Categorias')) || [];
    const categoria = [...arrayCategorias, object]; 
    localStorage.setItem('Categorias', JSON.stringify(categoria));
    
  }

  return(
    <Form style={{ padding: 40 }} onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2" >
        <Col>
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
        </Col>
        <Col>
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
        </Col>
      </Row>
                
      <Row className="mb-2">
        <Col>
          <Form.Label>Estado</Form.Label>
          <Form.Select name='estado' className="inputCustom"
            {...register('estado', { required: true })} 
            aria-invalid={errors.estado ? 'true' : 'false'} 
            type="text"
            isInvalid={errors.estado}
          >
            <option className='option'>Activo</option>
            <option className='option'>Inactivo</option>
          </Form.Select>
        </Col>
               
      </Row>
      <Button variant="primary" type="submit" className='buttong'
        onClick={()=>mostrarAlerta()}
      >Guardar</Button>
     
    </Form>
        
  );


}


export default FormCategory;