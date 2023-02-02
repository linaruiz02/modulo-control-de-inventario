import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { arrayList } from '../../core/helpers/ArrayList';
import PropTypes from 'prop-types';

function OptionsMenuList ({handleClose}) {

  const location = useLocation();
  
  const [activeMenu, setActiveMenu] = useState();
  
  useEffect(() =>{
    const lista = arrayList.find(list=> list.ruta===location.pathname || list.rutaDefecto===location.pathname);
    const {id}= lista;
    setActiveMenu(id);
  },[location]);
  
  const handleClick = (id) => {
    setActiveMenu(id);
    handleClose();
  }

  return (
    <div>
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
            {list.nombre}
          </Link>
          
        </li>
      ))}
    </div>
  );

}

OptionsMenuList.propTypes = {
  handleClose:PropTypes.func.isRequired
}

export default OptionsMenuList;