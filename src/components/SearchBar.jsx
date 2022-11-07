import React, {useState} from 'react';
import "./searchbar.css"


export default function SearchBar({onSearch}) {
  // acá va tu código

  const [city, setCity] = useState("")


  function handleSubmit(e){
      e.preventDefault()
      onSearch(city);
      setCity("")
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='contenedor-searchbar'>
      <input 

      type="text" 
      placeholder={"Ciudad...."}
      value={city}
      onChange={e => {
        setCity(e.target.value)
      }
      }
      />

      <input className='enviar' type="submit" value="Agregar"></input>

    </div>
    </form>

  )
};