import React, { useEffect, useState } from 'react';
import '../../assets/CSS/AdminStyle.css';
import ArtistaImg from '../../assets/img/ArtistaEjemplo.jpg';
import { API_ENDPOINTS_ABOUT } from '../../Api';

function AdminInfo() {
  const [nombre, setNombre] = useState('');

  const [isEditingHistoria, setIsEditingHistoria] = useState(false);
  const [historia, setHistoria] = useState('');
  const [artistaImage, setArtistaImage] = useState(null);
  const [about, setAbout] = useState([]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS_ABOUT.getAbout);

        if (response.ok) {
          const result = await response.json();

          // Update the state with the fetched data only if data is available
          if (result.data && result.data.length > 0) {
            const aboutData = result.data[0];
            setAbout(aboutData);
            setNombre(aboutData.artist_name);
            setHistoria(aboutData.resume);
          }
        } else {
          console.error('Failed to fetch data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during data fetching:', error);
        setAbout([]);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); 


  const handleEditAcercaDe = async () => {
    if (nombre && historia) {


      const userData = JSON.parse(localStorage.getItem('userData'));
      // TODO: Aquí se mandaría la info a la API
      try {
        const data = {
          artist_name: nombre,
          resume: historia,
          photo: "photo",
          email: about.email,
          id_user_update: userData._id,
          update_date: formattedDate
        };
  
        const response = await fetch(`${API_ENDPOINTS_ABOUT.aboutUpdate}/${about._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.status === 200) {
          swal('Success!', 'Inicio de sesión exitoso', 'success');
          const responseData = await response.json();
  
          swal('Editado!', 'La información fue editada correctamente.', 'success');
  
        } else {
          console.error('Failed to update media:', response.status, response.statusText);
          swal('Oops!', 'Error al editar el video', 'error');
        }
      } catch (error) {
        console.error('Error during media update:', error);
        swal('Oops!', 'Error al editar el video', 'error');
      }

      
    }
    else {
      swal('Oops!', 'Error favor de llenar todos los campos.', 'error');
    }
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleHistoriaChange = (event) => {
    setHistoria(event.target.value);
  };

  const handleArtistaImageChange = (event) => {
    const selectedImageVar = event.target.files[0];
    if (selectedImageVar) {
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const fileExtension = selectedImageVar.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        const newImage = URL.createObjectURL(selectedImageVar);
        setArtistaImage(newImage);
        setArtistaImage([newImage]);
      } else {
        swal('Oops!', 'Error en la extensión del archivo', 'error');
        setArtistaImage(null);
      }
    }
  };

  return (
    <div className="Body3 admb">
      <div className="AdminInfo-card">
        <div className="Foto-Nmb-card">
          <label htmlFor="artistaImageInput">
            <img
              src={artistaImage || ArtistaImg}
              alt="Artista"
              className="artista-image"
            />
          </label>
          <input
            type="file"
            id="artistaImageInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleArtistaImageChange}
          />
          <div className="EditNombre">
            <h3>BIENVENIDO</h3>
            <input
              type="text"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
        </div>
        <div className="EditAcercaDe">
          <div className="EditHistoriaLeft">
            <textarea
              id="historia"
              placeholder="Historia"
              value={historia}
              onChange={handleHistoriaChange}
              style={{ resize: 'both', overflow: 'auto', minHeight: '100px' }}
            ></textarea>
          </div>
          <div className="EditHistoria">
            <button onClick={handleEditAcercaDe}>Guardar Acerca De</button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default AdminInfo;