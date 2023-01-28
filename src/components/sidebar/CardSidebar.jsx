import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './sidebarstyles.css';

function CardSidebar({children, nameClass}) {
  return (
    <Container className={nameClass}>  
      {children}
    </Container>
  );
}
CardSidebar.propTypes = {
  children:PropTypes.node.isRequired,
  nameClass:PropTypes.string.isRequired
}
export default CardSidebar;
