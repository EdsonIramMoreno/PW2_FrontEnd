import React, { useEffect, useState } from 'react';
import '../assets/CSS/NavbarStyle.css'
import '../assets/CSS/AcercaDe.css'
import SocialMediaList from './SocialMediaList.jsx';
import ArtistaImg from '../assets/img/ArtistaEjemplo.jpg'


function AcercaDe() {
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
        <div className={`mi-componente ${visible ? 'visible' : ''}`}>
            <div className='Body2'>
                {/* <NavBar /> */}
                <div className="Contenido">
                    <div className='Pag-name'>
                        <h2>ACERCA DE</h2>
                    </div>
                    <div className="Info">
                        <div className="FotoArtista">
                            <img src={ArtistaImg} alt="Artista" />
                        </div>
                        <div className="InfoArtista">
                            <h2>NOMBRE</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde quaerat? Harum hic repellendus 			sapiente tempore nisi! Earum
                                non beatae, necessitatibus mollitia porro
                                eligendi libero, qui corrupti tempore saepe a.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde quaerat? Harum hic repellendus 			sapiente tempore nisi! Earum
                                non beatae, necessitatibus mollitia porro
                                eligendi libero, qui corrupti tempore saepe a.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde quaerat? Harum hic repellendus 			sapiente tempore nisi! Earum
                                non beatae, necessitatibus mollitia porro
                                eligendi libero, qui corrupti tempore saepe a.
                                </p>
                        </div>
                    </div>
                    <SocialMediaList />
                </div>

            </div>
        </div>
    )
}

export default AcercaDe;