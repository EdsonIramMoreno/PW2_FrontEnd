import React from 'react';
// import ReactDOM from 'react-dom';
// import NavBar from './Navbar';
import Footer from './Footer';
import VideoComponent from './MediaComp';
import '../assets/CSS//NavbarStyle.css'
import '../assets/CSS/Media.css'

function Media() {
    return (
        <React.StrictMode>
        <div className='Body2'>
            {/* <NavBar /> */}
            <div className="Contenido">

                <VideoComponent />

                <Footer />
            </div>
        </div>
    </React.StrictMode>
    )
}

export default Media;
