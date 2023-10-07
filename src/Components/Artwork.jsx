import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import ArtworkGrid from './ArtworkImgs';
import './assets/NavbarStyle.css'
import './assets/Artwork.css'


const root = document.getElementById('rootART');

ReactDOM.render(
    <React.StrictMode>
        <div className='Body2'>
            <NavBar />
            <div className="Contenido">

                <ArtworkGrid />

                <Footer />
            </div>
        </div>
    </React.StrictMode>,
    root
);
