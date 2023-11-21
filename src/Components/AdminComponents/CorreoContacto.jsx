import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { API_ENDPOINTS_ABOUT } from '../../Api';

function CorreoContacto() {
  const [correo, setCorreo] = useState('');

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
            setCorreo(aboutData.email);
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



  const handleEditCorreoContacto = async () => {
    if (correo && isEmailValid(correo)) {
      console.log(correo);
      // TODO: Send the information to the API

      const userData = JSON.parse(localStorage.getItem('userData'));
      // TODO: Aquí se mandaría la info a la API
      try {
        const data = {
          artist_name: about.artist_name,
          resume: about.resume,
          photo: "photo",
          email: correo,
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
  
          swal('Editado!', 'The email was edited successfully.', 'success');
  
        } else {
          console.error('Failed to update media:', response.status, response.statusText);
          swal('Oops!', 'Error al editar el video', 'error');
        }
      } catch (error) {
        console.error('Error during media update:', error);
        swal('Oops!', 'Error al editar el video', 'error');
      }

      
    } else {
      swal('Oops!', 'Error, please enter a valid email.', 'error');
    }
  };

  const isEmailValid = (emailVal) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailVal);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  return (
    <div className='Body3'>
      <div className="AdminInfo-card">
          <div className='EditNombreC'>
            <label htmlFor="">Ingrese un correo</label>
            <input
              type="text"
              value={correo}
              onChange={handleCorreoChange}
            />
            <button className="BotonAddArtwork a" onClick={handleEditCorreoContacto}>Editar correo</button>

          </div>

      </div>

    </div>
  );
}

export default CorreoContacto;
