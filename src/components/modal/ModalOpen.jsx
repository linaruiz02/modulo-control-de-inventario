import React from 'react';
import { Modal, ModalHeader } from 'react-bootstrap';
import PropTypes from 'prop-types';



function ModalOpen({show, handleClose, Form, titulo}) {

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
          {titulo}
        </Modal.Title>
      </ModalHeader>
      <Modal.Body>
        {Form}
      </Modal.Body>
    </Modal>
  );
}
ModalOpen.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  Form:PropTypes.node,
  titulo:PropTypes.string
}

export default ModalOpen;
