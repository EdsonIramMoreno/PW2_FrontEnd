import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import VideoComponent from './MediaComp';
import './assets/NavbarStyle.css'
import './assets/Media.css'

const root = document.getElementById('rootMED');

ReactDOM.render(
    <React.StrictMode>
        <div className='Body2'>
            <NavBar />
            <div className="Contenido">

                <VideoComponent />

                <Footer />
            </div>
        </div>
    </React.StrictMode>,
    root
);
