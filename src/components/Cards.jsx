import React from 'react';
import Card from "./Card"

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card  
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          />
          )}
      </div>
    );
  }else{
    return(
      <div>Sin ciudades</div>
    )
  }
  
};