import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { arrayList } from '../../core/helpers/ArrayList';
import CardSidebar from './CardSidebar';
import './sidebarstyles.css';


function MenuList({handleClose}) {
  const location = useLocation();
  console.log(location.pathname) 

  const [activeMenu, setActiveMenu] = useState();

  useEffect(() =>{
    const lista = arrayList.find(list=> list.ruta===location.pathname || list.rutaDefecto===location.pathname);
    const {id}= lista;
    setActiveMenu(id);
  },[location]);

  const handleClick = (id) => {
    console.log(id);
    setActiveMenu(id);
    handleClose();
  }

  return (
    <CardSidebar nameClass="sidebarCard">
      {arrayList.map((list) => (
        <li 
          key={list.id} 
          onClick={()=>handleClick(list.id)} 
          className={ list.id === activeMenu ? 'click':''}
        >
          <Link
            to={list.ruta} 
            style={{
              textDecoration:'none', 
              color:'black'
            }}
          >
            <i 
              className={list.icono} 
              style={{ 
                color: '#6857DD', 
                fontSize: 23,
                padding:3}}
            >
            </i>
            {list.nombre}{handleClose}
          </Link>
        </li>
      ))}
    </CardSidebar>
  );
}
MenuList.propTypes = {
  handleClose:PropTypes.func.isRequired
}
export default MenuList;
