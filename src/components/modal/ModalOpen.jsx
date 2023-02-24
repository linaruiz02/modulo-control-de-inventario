import React from 'react';
import { Modal, ModalHeader } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormProduct from '../form/FormProduct';

function ModalOpen({show, handleClose,codigo, orden }) {

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <ModalHeader closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          EDITAR PRODUCTO
        </Modal.Title>
      </ModalHeader>
      <Modal.Body>
        <FormProduct tipo={'actualizar'} codigo={codigo} orden={orden}/>
      </Modal.Body>
    </Modal>
  );
}
ModalOpen.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  codigo:PropTypes.string,
  orden:PropTypes.string
}

export default ModalOpen;
