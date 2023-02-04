import React, { useState } from 'react';
import {
  Button,
  Offcanvas,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import CardSidebar from './CardSidebar';
import MenuList from './MenuList';
import './sidebarstyles.css';

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="buttonsidebar">
        <i className="bi bi-border-width" style={{ fontSize: 24 }}></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} className="sidebar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <CardSidebar nameClass="cardimage">
              <Link to={'/'}>
                <img
                  className="imgLogo"
                  src="./images/LogoInventarionuevo.png"
                  alt="React Bootstrap logo"
                />
              </Link>
            </CardSidebar>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr />
          <MenuList handleClose={handleClose}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
