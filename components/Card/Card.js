import "./Card.css";

import React from "react";

function Card({ weatherData2 }) {

    if (!weatherData2 || !weatherData2.list) {
        return "Loading..."; // O puedes mostrar un mensaje de carga, por ejemplo.
      }
    
      // Filtrar los pronósticos de los próximos 5 días
      const forecastForNext5Days = weatherData2.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5);

  // Obtener la temperatura máxima y mínima de cada día
  const forecastDataForCards = forecastForNext5Days.map((forecastItem) => ({
    date: formatDate(forecastItem.dt_txt),
    maxTemp: forecastItem.main.temp_max.toFixed(0),
    minTemp: forecastItem.main.temp_min.toFixed(0),
    weatherIcon: forecastItem.weather[0].icon,
  }));

  function formatDate(dateString) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
  
    return `${dayOfWeek} ${day} ${month}`;
  }

  const fechaCorrecta = weatherData2.list
  ? formatDate(weatherData2.list[0].dt_txt)
  : "Loading...";

  return (
    <div className="mainContainerCard">
      {weatherData2 && (
        <>
          {forecastDataForCards.map((forecastData, index) => (
            <div className="ContenedorCard" key={index} >
              <section className="secOne">
                <h3 className="letraInf">{forecastData.date}</h3>
                <div className="ContImagen">
                   <img src="./LightCloud.png" alt="image" /> 
                </div>
              </section>
              <section className="secInformacion">
                <h4 className="letraInf"> {forecastData.maxTemp} °C</h4>
                <h4 className="letraInf menor"> {forecastData.minTemp}  °C</h4>
              </section>
            </div>
           ))} 
        </>
      )}
    </div>
  );
}

export default Card;
