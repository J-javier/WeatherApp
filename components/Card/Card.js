import "./Card.css";

import React, { useState , useEffect } from "react";


function Card({ weatherData2 }) {

    if (!weatherData2 || !weatherData2.list) {
        return "Loading..."; 
      }
    
/*       // Filtrar los pronósticos de los próximos 5 días
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
   */
  // this is just a test to get differentinformation for the forecast 
    
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // Filtrar los datos para obtener las cards de hoy y los próximos 4 días
    const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextFiveDaysData = weatherData2.list.filter((item) => {
    const itemDate = new Date(item.dt * 1000); // Convertir el timestamp a fecha
    itemDate.setHours(0, 0, 0, 0);
    return itemDate >= tomorrow && itemDate <= new Date(tomorrow.getTime() + 4 * 24 * 60 * 60 * 1000); // 5 días en milisegundos
  });
  
    console.log(nextFiveDaysData)

    setForecastData(nextFiveDaysData);
  }, [weatherData2]);
   

 // this is the end of the test 
  function formatDate(dateString) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
  
    return `${dayOfWeek} ${day} ${month}`;
  }




  return (
    <div className="mainContainerCard">
      {weatherData2 && (
        <>
    
           {forecastData.map((forecastItem, index) => 
            {
              if (index %8 === 0) {
                return(
                  <div className="ContenedorCard" key={index} >
                  <section className="secOne">
                    <h3 className="letraInf">{formatDate(forecastItem.dt_txt)}</h3>
                    <div className="ContImagen">
                       <img src={`/${forecastItem.weather[0].main}.png`} alt="image" /> 
                    </div>
                  </section>
                  <section className="secInformacion">
                    <h4 className="letraInf"> {forecastItem.main.temp_max.toFixed(0)} °C</h4>
                    <h4 className="letraInf menor"> {forecastItem.main.temp_min.toFixed(0)}  °C</h4>
                  </section>
                </div>
                );

              }
              return null
            }

           )} 
        </>
      )}
    </div>
  );
}

export default Card;
