import React from 'react';
import ReactDOM from 'react-dom';
// import NavBar from './Navbar';
import Footer from './Footer';
import ArtworkGrid from '../Components/ArtworkImgs';
import '../assets/CSS/Artwork.css';

function Artwork() {
    return (
        <React.StrictMode>
        <div className='Body2'>
            {/* <NavBar /> */}
            <div className="Contenido">

                <ArtworkGrid />

                <Footer />
            </div>
        </div>
    </React.StrictMode>
    )
}

export default Artwork;