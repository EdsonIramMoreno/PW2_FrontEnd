import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import './assets/NavbarStyle.css'
import './assets/AcercaDe.css'
import ArtistaImg from './assets/img/ArtistaEjemplo.jpg'

const root = document.getElementById('rootAD');

ReactDOM.render(
    <React.StrictMode>
        <div className='Body2'>
            <NavBar />
            <div className="Contenido">
                <div className="Info">
                    <div className="FotoArtista">
                        <img src={ArtistaImg} alt="Artista" />
                    </div>
                    <div className="InfoArtista">
                        <h2>NOMBRE</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde quaerat? Harum hic repellendus 			sapiente tempore nisi! Earum
                            non beatae, necessitatibus mollitia porro
                            eligendi libero, qui corrupti tempore saepe a.</p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    </React.StrictMode>,
    root
);
