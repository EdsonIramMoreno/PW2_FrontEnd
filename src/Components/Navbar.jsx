import React from 'react';
import '../assets/NavbarStyle.css'

function NavBar() {
  return (
    <div className="ClassNavBar">
      <a href="index.html">NOMBRE</a>
      <ul className="menu">
        <li><a href="Home.html">HOME</a></li>
        <li><a href="AcercaDe.html">ACERCA DE</a></li>
        <li><a href="Artwork.html">ARTWORK</a></li>
        <li><a href="Media.html">MEDIA</a></li>
        <li><a href="Contacto.html">CONTACTO</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
