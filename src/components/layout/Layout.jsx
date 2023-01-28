import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import { arrayList } from '../../core/helpers/ArrayList';
import NavbarList from '../navbar/NavbarList';
import Sidebar from '../sidebar/Sidebar';


function Layout() {
  const location = useLocation();
  
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState();

  useEffect(() =>{
    //definimos el objeto = encuentreme el objeto del array que tenga la ruta identica a el path
    const lista = arrayList.find(list=> list.ruta===location.pathname || list.rutaDefecto===location.pathname); 
    const {nombre,icono}=lista;
    setTitle(nombre);
    setIcon(icono);
  },[location]);


  return (
    <div className="p-5">
      <NavbarList title={title} classIcon={icon} />
      <Sidebar />
      <Container className="cardContainer">
        <Outlet/>
      </Container>
    </div>
  );
}

export default Layout;
