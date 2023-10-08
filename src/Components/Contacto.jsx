import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import SiluetasImg from '../assets/img/Contacto.png'
import '../assets/CSS/NavbarStyle.css'
import '../assets/CSS/Contacto.css'

function Contacto() {
    return (
        <React.StrictMode>
        <div className='Body2'>
            {/* <NavBar /> */}
            <div className="Contenido">

                <div className="ContactoClass">
                    <div className="Siluetas">
                        <img src={SiluetasImg} alt="Imagen" />
                    </div>

                    <div className="Contactar">
                        <form action="">
                            <input type="text" name="" id="" placeholder="CORREO" />
                            <input type="text" name="" id="" placeholder="MENSAJE" />
                            <input type="submit" value="ENVIAR" />
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    </React.StrictMode>
    )
}

export default Contacto;
