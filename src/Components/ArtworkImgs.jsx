import React from 'react';
import Pinturas from '../assets/img/Pinturas.jpg'
import Esculturas from '../assets/img/Esculturas.jpg'
import Mosaico from '../assets/img/Mosaico.png'
import Contacto from '../assets/img/Contacto.png'

import ObraComponent from '../Components/Obra.jsx'

function ArtworkGrid() {
  return (
            <div className="Galeria">

              <ObraComponent
              name="Aaaa"
              image={Pinturas}
              id='1'/>

              <ObraComponent
              name="Aaaa"
              image={Pinturas}
              id='1'/>

              <ObraComponent
              name="Aaaa"
              image={Pinturas}
              id='1'/>

              <ObraComponent
              name="Aaaa"
              image={Pinturas}
              id='1'/>

              <ObraComponent
              name="Aaaa"
              image={Pinturas}
              id='1'/>

              <ObraComponent
              name="Aaaa"
              image={Pinturas}
              id='1'/>

                
            </div>

  );
}

export default ArtworkGrid;
