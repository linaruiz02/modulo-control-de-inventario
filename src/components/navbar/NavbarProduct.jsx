import React from 'react';
import './Navbarstyle.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function NavbarProduct ({title, classIcon}) {
  return(
    <Navbar fixed="button" className='head'>
      <Container>
        <Navbar.Brand href="#home" ><div className='icon'><i className={classIcon}></i></div>
          <h3> {title} </h3></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <img src="/public/images/LogoInventarionuevo.png"alt="React Bootstrap logo"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
  );
}
NavbarProduct.propTypes = {
  title: propTypes.string.isRequired,
  classIcon: propTypes.string.isRequired
}
export default NavbarProduct;

         