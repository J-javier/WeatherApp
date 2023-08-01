'use client'

import { useEffect, useState } from "react";
import Block from "../../components/Block/Block";
import Card from "../../components/Card/Card";
import Navbar from "../../components/NavBar/Navbar";

function Buttons (){
  return(
    <div className="GradosOpt">
        <button>°C</button>
        <button>°F</button>
    </div>

  ) 
}


export default function Home() {
  /* Creating function to get the data */

    const [weatherData,setWeatherData] = useState ("")

    const [currentCity , setCurrentCity] = useState("")

    const getData = async () => {
      try {
        const apiKey = '8b5e798bde5cc7b55691b9ca16d8923c'
        const city = "Helsinki"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        const dataWeather = await response.json()
        setWeatherData(dataWeather)
        console.log(dataWeather)

      } catch (error) {
        console.log(error)
      }
    }

    const handleSearch =(city) => {
      setCurrentCity(city)
      getData(city)
    }

    
    useEffect(()=>{
      getData()
    },[]);





  /* FUNCTION FOR THE FORECAST  */

  const [forecast, setForecast] = useState ("")
  const Dataforecast = async () => {
    try {
      const apiKey = '8b5e798bde5cc7b55691b9ca16d8923c'
      const city = "Helsinki"
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)

      const forecast = await response.json()
      setForecast(forecast)
      console.log(forecast)

    } catch (error) {
      console.log(error)
    }
  }

  
  
  useEffect(()=>{
    Dataforecast()
  },[]);



  return (
    <main className="MainContainerPage">
      {/* main information along with the nav bar*/}
      <div className="ContenedorNavBarPage">
        <Navbar weatherData={weatherData} weatherData2={forecast} onSearch={handleSearch}/>
      </div>
      {/* Cards for the weather */}
      <div className="ContenedorInformationPage">
        <div className="contBotones">
          <Buttons/>
        </div>
        <div className="DivCardspage">
          <Card weatherData2={forecast}/>
        </div>
        <div className="DivBlockpage">
          <Block weatherData={weatherData}/>
        </div>
      </div>   
    </main>
  )
}
