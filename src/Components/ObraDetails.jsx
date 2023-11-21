import React, { useEffect, useState } from 'react';
import ArtistaImg from '../assets/img/Esculturas.jpg';
import { useParams } from 'react-router-dom';
import '../assets/CSS/ObraDetails.css'
import { API_ENDPOINTS_POST } from '../Api.js';

function Details() {
  const [visible, setVisible] = useState(true);
  const [post, setPost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINTS_POST.getPosts}`);
        if (response.ok) {
          const result = await response.json();
  
          // Convert id to ObjectId type for proper comparison
          const selectedPost = result.data.find(post => post._id === String(id));
          setPost(selectedPost);
          console.log(post)
        } else {
          console.error('Failed to fetch data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during data fetching:', error);
        setPost(null);
      }
    };
  
    fetchData();
  }, [id]);
  

  return (
    <div className={`mi-componente ${visible ? 'visible' : ''}`}>
      <div className='Body2'>
        <div className="Contenido">
          <div className='Pag-name'>
            <h2>{post.title}</h2>
          </div>

          <div className='Card-Info'>

            <div className="Image-Artwork">
              <img src={ArtistaImg} alt={post.title} />
            </div>

            <div className='Card-Descript'>
              <p>{post.desc}</p>
            </div>

          </div>

        </div>
      </div>
    </div>

  );
}

export default Details;