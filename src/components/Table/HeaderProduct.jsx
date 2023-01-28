import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './tablestyle.css';

function HeaderProduct({ruta}) {

  return (
    <>
      <InputGroup>
        <Form.Control placeholder="Búsqueda" />
        <Button variant="outline-secondary" id="button-addon2" className='buttonSearch'>
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
      <div className="float-end">
        <Link to={ruta}>
          <Button className='buttonagregar' variant="primary" type="submit">+ Agregar</Button>
        </Link>
      </div>
    </>
  );
}

HeaderProduct.propTypes = {
  ruta: PropTypes.string.isRequired
}

export default HeaderProduct;
