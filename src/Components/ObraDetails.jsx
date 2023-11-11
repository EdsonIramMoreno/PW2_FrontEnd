import React from 'react';
import { useParams } from 'react-router-dom';

function Details(){
    const { id } = useParams();
  // Fetch person details based on the ID and render them
    console.log(id)
  return (
    <div>
      <h2>Details Page {id}</h2>
      
    </div>
  );
}

export default Details;
