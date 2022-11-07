import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav"
import Cards from "./components/Cards"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


function showMessage(message, type){
  Toastify({
      text: message,
      duration: type === "success" ? 5000 : 3000,
      className: "info",
      offset: {
          y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      style: {
        background: type === "success" ?   "rgb(50, 196, 50)" :  "red",
        borderRadius: "10px",
        width: "max-content"
        
      }
    }).showToast();
}

function App() {

  const [cities, setCities] = useState([])

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json()).then((responese_json) => {
        if(responese_json.main){
          const city = {
            min: Math.round(responese_json.main.temp_min),
            max: Math.round(responese_json.main.temp_max),
            img: responese_json.weather[0].icon,
            id: responese_json.id,
            wind: responese_json.wind.speed,
            temp: responese_json.main.temp,
            name: responese_json.name,
            weather: responese_json.weather[0].main,
            clouds: responese_json.clouds.all,
            latitud: responese_json.coord.lat,
            longitud: responese_json.coord.lon
          };
          
          let newCity = cities.some(c => c.name === city.name)

          if(newCity){
            /* alert("Esta ciudad ya ha sido agregada") */
            showMessage("Esta ciudad ya ha sido agregada")
          }else setCities([...cities, city]);
        } 
         else {
          showMessage("Ciudad o pais no encontrado");
        }
      });
  }

   function onClose(id){
    setCities(cities.filter(c => c.id !== id))
   }




  return (
    <div className="App">
       <Nav onSearch={onSearch} />
       <Cards cities={cities}
       onClose={onClose}/>
      
    </div>
  );
}

export default App;
