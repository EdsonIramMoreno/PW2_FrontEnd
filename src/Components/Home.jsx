import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import '../assets/CSS/NavbarStyle.css'
import '../assets/CSS/HOME.css'
import PinturasImg from '../assets/img/Pinturas.jpg'
import EsculturasImg from '../assets/img/Esculturas.jpg'

function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      // Simula una demora antes de mostrar el componente
      const timeout = setTimeout(() => {
        setVisible(true);
      }, 100); // Cambia esto al tiempo de carga deseado
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
        <React.StrictMode>
                <div className={`mi-componente ${visible ? 'visible' : ''}`}>
                <div className='Body2'>
                {/* <NavBar /> */}
                <div className="Contenido">
                    <div className="ColeccionNueva">
                        <h1>NUEVA COLECCION</h1>
                        <h3><a href="#">IR AHORA</a></h3>
                    </div>

                    <div class="ArteEscultura">
                        <div className="Imagen i">
                            <div className="Overlay">
                                <h2>PINTURAS</h2>
                            </div>
                            <img src={PinturasImg} alt="Pinturas" />
                        </div>
                        <div className="Imagen d">
                            <div className="Overlay">
                                <h2>ESCULTURAS</h2>
                            </div>
                            <img src={EsculturasImg} alt="Esculturas" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
                    </div>


        </React.StrictMode>
    );
}

export default Home;