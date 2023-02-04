import React from 'react';
import './Navbarstyle.css'
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarList ({title, classIcon}) {
  return(
    <Navbar fixed="button" className='head'>
      <Container>
        <Navbar.Brand href="#home" ><div className='icon'><i className={classIcon}></i>
          <h3>{title}</h3>
        </div>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <img src="./modulo-control-de-inventario/images/LogoInventarionuevo.png"alt="React Bootstrap logo"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
  );
}

NavbarList.propTypes = {
  title: PropTypes.string,
  classIcon: PropTypes.string
}

export default NavbarList;