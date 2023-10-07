import { useState } from 'react';
// import Home from './Components/Home.jsx';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom'

import '../assets/NavbarStyle.css'

function NavBar() {
  return (
    <Router>
      <nav className="ClassNavBar">
        <li className='NombreNav'><Link to="/log">NOMBRE</Link></li>
        <ul className="menu">
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/acerca">ACERCA DE</Link></li>
          <li><Link to="/artwork">ARTWORK</Link></li>
          <li><Link to="/media">MEDIA</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/log" element={<p>Sesion</p>}></Route>
        <Route path="/home" element={<p>Home</p>}></Route>
        <Route path="/acerca" element={<p>Acerca De</p>}></Route>
        <Route path="/artwork" element={<p>Artwork</p>}></Route>
        <Route path="/media" element={<p>Media</p>}></Route>
        <Route path="/contacto" element={<p>Contacto</p>}></Route>
      </Routes>
    </Router>
  );
}

export default NavBar;
