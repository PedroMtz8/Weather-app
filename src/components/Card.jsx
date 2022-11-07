import React from 'react';
import "./card.css"

export default function Card(props) {
  // max, min, name, img, onClose
  // acá va tu código
  return (
   <div className='contenedor-card'>
    <div className='subcontenedor'>
    <button className='boton' onClick={props.onClose}>X</button>
    </div>
    <h4>{props.name}</h4>
      <div className='contenedor-info'>
        <div className='info'>
           <p>Min</p>
           <p>{props.min}°</p>
           
           
        </div>
        <div className='grados'>
        <p>Max</p>
        <p>{props.max}°</p>
        </div>
       
      
      <img className='imagen-card' src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icon"/>
      </div>

   </div>
  );
};