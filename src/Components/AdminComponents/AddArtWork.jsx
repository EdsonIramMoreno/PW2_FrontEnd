import React, { useState } from 'react';
import '../../assets/CSS/AdminStyle.css';
import AgregarArte from '../../assets/img/AgregarArte.jpg';

function AddArtWork() {
    const [artworkImage, setArtworkImage] = useState(null);
    const [artworkImages, setArtworkImages] = useState([]); // Estado para almacenar múltiples imágenes de Artwork

    const handleArtworkImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
          const newImage = URL.createObjectURL(selectedImage);
          setArtworkImages([...artworkImages, newImage]); // Agrega la nueva imagen al estado de imágenes
        }
      };

    return(

        <div className="EditArtworkiaLeft">
            <h2>Artwork</h2>
            <div className='Imagenes-card'>
            <div className="GaleriaAdm">
              <label htmlFor="artworkImageInput">
                <img
                  src={artworkImage || AgregarArte}
                  alt="Arte"
                  className="arte-image"
                />
              </label>
              <input
                type="file"
                id="artworkImageInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleArtworkImageChange}
              />
            </div>
            <div className="ArtworkGallery">
              {artworkImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Arte ${index}`}
                  className="arte-image"
                />
              ))}
            </div>
          </div>
            </div>

    );

}

export default AddArtWork;