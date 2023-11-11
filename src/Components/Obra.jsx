import React from 'react';
import { Link } from 'react-router-dom';


function ObraComponent(props){

  
  return (
    <Link to={`/details/${props.id}`}>
        <div className="person-card">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
            <p>Ver Obra</p>
        </div>
    </Link>
  );
};

export default ObraComponent;
