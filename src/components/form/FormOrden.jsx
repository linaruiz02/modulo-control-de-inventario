
import React from 'react';
import './FormCategorystyle.css';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import showAlert from '../../core/helpers/alerts';

function FormOrden (){
 
  const {register,formState: { errors },handleSubmit}= useForm();

  const [date] = useState(new Date());

  const onSubmit= (object) =>{
    object.orden=Math.floor(Math.random()*(2000-1000+1)+1000);
    console.log('este es el Payload',JSON.stringify(object));
    
    const arrayOrdenes = JSON.parse(localStorage.getItem('Ordenes')) || [];
    const ordenes = [...arrayOrdenes, object]; 
    localStorage.setItem('Ordenes', JSON.stringify(ordenes));

    showAlert(
      'Orden guardada exitosamente',
      'success',
      'Ok'
    );
  }

  return(
    <Form style={{ padding: 40 }} onSubmit={handleSubmit(onSubmit)} >
      <Row className="mb-2" >
        
        <Col>
          <FormGroup>
            <Form.Label>Fecha</Form.Label>
            <Form.Control 
              {...register('fecha', { required: true })} 
              aria-invalid={errors.fecha ? 'true' : 'false'} 
              type="text"
              isInvalid={errors.fecha}
              value={date.toLocaleDateString()}
              onChange={() => {}}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
               Fecha es requerido
            </Form.Control.Feedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Form.Label>Responsable</Form.Label>
            <Form.Control {...register('responsable', { required: true })} 
              aria-invalid={errors.responsable ? 'true' : 'false'} 
              type="text"
              isInvalid={errors.responsable}></Form.Control>
            <Form.Control.Feedback type="invalid">
               Responsable es requerido
            </Form.Control.Feedback>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-2" >
        <Col>
          <FormGroup>
            <Form.Label>Concepto</Form.Label>
            <Form.Control 
              {...register('concepto', { required: true })} 
              aria-invalid={errors.concepto ? 'true' : 'false'} 
              type="text"
              isInvalid={errors.concepto}></Form.Control>
            <Form.Control.Feedback type="invalid">
               Concepto es requerido
            </Form.Control.Feedback>
          </FormGroup>
        </Col>
        <Col>
          <Form.Label>Estado</Form.Label>
          <Form.Select name='estado' 
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
      <Button variant="primary" type="submit" className='buttong'>Guardar</Button>  
      {/* <Button variant="primary"  className='buttonN' >Nueva Entrada</Button> */}
    
    </Form>
          
  );
  
  
}
  
  
export default FormOrden;
