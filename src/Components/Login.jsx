import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../assets/CSS/Login.css';
import MosaicoImage from '../assets/img/Mosaico.png';
import { API_ENDPOINTS_USER } from '../Api';
import swal from 'sweetalert';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      navigate('/Administracion');
    } else {
      // Simulate a delay before showing the component
      const timeout = setTimeout(() => {
        setVisible(true);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);


  const isEmailValid = (emailVal) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailVal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      swal('Oops!', 'Por favor, ingrese un correo electrónico válido.', 'error');
      return;
    }

    if (!password) {
      swal('Oops!', 'Por favor, ingrese una contraseña.', 'error');
      return;
    }

    try {

      const data = {
        email: email,
        pwd: password,
      };

      const response = await fetch(API_ENDPOINTS_USER.userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        swal('Success!', 'Inicio de sesión exitoso', 'success');
        const responseData = await response.json();

        localStorage.setItem('userData', JSON.stringify(responseData.data));

        window.location.href = '/Administracion';
        navigate('/Administracion');

      } else if (response.status === 401) {
        console.error('Authentication failed');
        swal('Oops!', 'Usuario o clave equivocados', 'error');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      swal('Oops!', 'Error en la autenticación', 'error');
    }
  };

  return (
    <div className={`mi-componente ${visible ? 'visible' : ''}`}>
      <div className='Body2'>
        {/* <NavBar /> */}
        <div className="Contenido">
          <div className='Pag-name'>
            <h2>INICIAR SESION</h2>
          </div>
          <div className="Inicio Margin-Pg">
            <div className="Mosaico">
              <img src={MosaicoImage} alt="Mosaico" />
            </div>
            <div className="Login">
              <h1>Iniciar Sesión</h1>
              <form onSubmit={handleSubmit}>
                <div className="INPUTS">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Clave"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Iniciar" />
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;