import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import AdminInfo from './AdmInfo';
//import './assets/NavbarStyle.css'



const Admin = () => {
render(
    <React.StrictMode>
        <div className='Body2'>
            <NavBar />
            <div className="Contenido">
            <AdminInfo />
                <Footer />
            </div>
        </div>
    </React.StrictMode>,
    root
);
}

export default Admin;