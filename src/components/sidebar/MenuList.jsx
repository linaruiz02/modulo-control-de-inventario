import React from 'react';
import PropTypes from 'prop-types';
import CardSidebar from './CardSidebar';
import './sidebarstyles.css';
import OptionsMenuList from './OptionsMenuList';


function MenuList({handleClose}) {
  return (
    <CardSidebar nameClass="sidebarCard">
      <OptionsMenuList handleClose={handleClose} />
    </CardSidebar>
  );
}
MenuList.propTypes = {
  handleClose:PropTypes.func.isRequired
}
export default MenuList;
