"use client";

import { useEffect, useState } from "react";
import Block from "../../components/Block/Block";
import Card from "../../components/Card/Card";
import "../../components/NavBar/Navbar.css";

function Buttons() {
  return (
    <div className="GradosOpt">
      <button>°C</button>
      <button>°F</button>
    </div>
  );
}

/* this is just a test for the  SEARCH Component */

function Search({ handleChange , handleSearch, setReenderizado}) {
  /* function to get the input element */
  const [inputData, setInputData] = useState("");
  const [newCity , setNewCity] = useState("");

  const handleInput = (e) => {
    setInputData(e.target.value);
    setNewCity(e.target.value)
  };

  const handleSearchButtonClick =() =>{
    handleSearch(newCity)
    setReenderizado(true)
  }

  return (
    <div className="ContPrin">
      <section className="FirstSec">
        <div className="ImCont" >
          <img src="./close.svg" alt="image" onClick={handleChange}/>
        </div>
      </section>
      {/* Second section for the search menu */}
      <section className="SecondSec">
        <div className="Clbtn">
          <div className="searchImg">
            <img src="./search1.svg" alt="image" />
          </div>
          <input
            className="busqueda"
            type="text"
            placeholder="search location"
            onChange={handleInput}
          />
        </div>
        <button className="btn2" onClick={handleSearchButtonClick}>Search</button>
      </section>
      {/* Third section for the search menu */}
      <section className="ThirdSec">
        <div className="div ">
          <p className="letra" value="London">London</p>
          <span className="sp active"> &gt; </span>
        </div>
        <div className="div">
          <p className="letra" value="Barcelona">Barcelona</p>
          <span className="sp active"> &gt; </span>
        </div>
        <div className="div">
          <p className="letra" value="Long Beach">Long Beach</p>
          <span className="sp active"> &gt; </span>
        </div>
      </section>
    </div>
  );
}


export default function Home() {
  /* Creating function to get the data */
  
  const [weatherData, setWeatherData] = useState();
  const [forecastData,setForecastData] = useState()
  const [city, setCity] = useState("Guatemala");
  const [renderizado , setReenderizado] = useState(false)

  const apiKey = "8b5e798bde5cc7b55691b9ca16d8923c";

  const APIweather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const APIforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

  useEffect (()=>{
    async function getData (TypeAPI , setState) {
    try {
      const response = await fetch(TypeAPI);
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.log(error);
    }
      }
    getData(APIweather ,setWeatherData)
    getData(APIforecast, setForecastData)
    
    setReenderizado(false)

},[city,renderizado])
  
  
  
  const handleSearch = (city) => {
    setCity(city); // Update the currentCity state when the user performs a search
  };

  
 
  
  /* Funcion para el renderizado del navbar */
  const [content , setContent] = useState(true)
  function handleChange (){
    setContent(!content)
  }

  
  /* FUNCION PARA FORMATEAR LA FECHA QUE ESTA EN LA API */
    function formatDate(dateString) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];

    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayOfWeek} ${day} ${month}`;
  }

  const fechaCorrecta = forecastData && forecastData.list && forecastData.list.length > 0
  ? formatDate(forecastData.list[0].dt_txt)
  : "Loading...";

  return (
    <main className="MainContainerPage">
      {/* main information along with the nav bar*/}
      <div className="ContenedorNavBarPage">
        <div className="mainCont">
          {/* Section for the first view */}
          {weatherData && forecastData && (
            <>
              {content ? (
                <>
                  <div>
                    {/* Search button and geo logo */}
                    <section>
                      <div className="Location">
                        <button className="btn" onClick={handleChange}>
                          Search for places
                        </button>
                        <div className="containerLogo">
                          <img
                            src="./location.svg"
                            alt="image"
                            className="LImagen"
                          />
                        </div>
                      </div>
                      <div className="principalImg">
                        <div className="ImagenCont">
                          <img
                            src={`/${weatherData.weather[0].main}.png`}
                            alt="image"
                            className="IPrin"
                          />
                        </div>
                      </div>
                    </section>
                    {/* weather details */}
                    <section className="SecondSection">
                      <div className="Ftitle">
                        <h1 className="letter title">
                          {weatherData.main.temp.toFixed(0)}
                        </h1>
                        <h3 className="letter grados">°C</h3>
                      </div>
                      <h2 className="letter subtitle">
                        {weatherData.weather[0].main}
                      </h2>
                      <div className="information">
                        <p className="letter">Today</p>
                        <p className="letter">·</p>
                        {forecastData.list && (
                          <p className="letter">{fechaCorrecta}</p>
                        )}
                      </div>
                      <div className="ubicacion">
                        <div className="IMG">
                          <img src="./geo.svg" alt="Image" className="IMG" />
                        </div>
                        <p className="letter city">{weatherData.name}</p>
                      </div>
                    </section>
                  </div>
                </>
              ) : (
                <>
                  <div className="mainCont">
                    <Search handleChange={handleChange}  
                      handleSearch={handleSearch} 
                      setReenderizado={setReenderizado}/>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      
      <div className="ContenedorInformationPage">
        <div className="contBotones">
          <Buttons />
        </div>
        <div className="DivCardspage">
           <Card weatherData2={forecastData} /> 
        </div>
        <div className="DivBlockpage">
          <Block  weatherData={weatherData}/>
        </div>
      </div>
    </main>
  );
}
