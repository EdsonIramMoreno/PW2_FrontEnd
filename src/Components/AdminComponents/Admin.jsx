import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import AdminInfo from '../AdminComponents/AdminInfo';
import AddArtWork from '../AdminComponents/AddArtWork';
import '../../assets/CSS/Admin.css'; // Make sure to include your CSS file for styling

function Admin() {
  const [visible, setVisible] = useState(false);
  const [menuVisibleAcercaDe, setmenuVisibleAcercaDe] = useState(true);
  const [menuVisibleAddArtWork, setmenuVisibleAddArtWork] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the component
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const toggleMenuAcercaDe = () => {
    setmenuVisibleAcercaDe(!menuVisibleAcercaDe);
  };

  const toggleMenuAddArtWork= () => {
    setmenuVisibleAddArtWork(!menuVisibleAddArtWork);
  };

  return (
    <div className={`mi-componente ${visible ? 'visible' : ''}`}>
      <div className='Body2'>
        <div className="Contenido">
          <div className='Pag-name'>
            <h2>ADMINISTRADOR</h2>
          </div>
          <button className="menu-toggle" onClick={toggleMenuAcercaDe}>
            {menuVisibleAcercaDe ? 'Collapse Menu Acerca De' : 'Expand Menu Acerca De'}
          </button>
          {menuVisibleAcercaDe && (
            <div className="collapsible-menu">
              <AdminInfo />
            </div>
          )}
          <button className="menu-toggle" onClick={toggleMenuAddArtWork}>
            {menuVisibleAddArtWork ? 'Collapse Menu AddArtWork' : 'Expand Menu AddArtWork'}
          </button>
          {menuVisibleAddArtWork && (
            <div className="collapsible-menu">
              <AddArtWork />
            </div>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Admin;
