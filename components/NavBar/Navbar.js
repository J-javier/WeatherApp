'use client'

import { useState} from "react"
import "./Navbar.css"


function Search ({handleChange, onSearch}){
    /* function to get the input element */ 
    const [inputData , setInputData] = useState("");

    const handleInput = (e)=>{
        setInputData(e.target.value)
    }


    /* FUNCTION TO UPDATE ALL THE INFORMATION */

    const handleSearch = () => {
        onSearch(inputData);
      };


    return(

        <div className="ContPrin">
            <section className="FirstSec">
                <div className="ImCont" onClick ={handleChange} ><img src="./close.svg" alt="image" /></div>
            </section>
            {/* Second section for the search menu */}
            <section className="SecondSec">
                <div className="Clbtn">
                    <div className="searchImg">
                        <img src="./search1.svg" alt="image" /> 
                    </div>
                    <input className="busqueda" type="text" placeholder="search location" onChange={handleInput}/>
                </div>
                <button className="btn2" onClick={handleSearch} >Search</button>
            </section>
            {/* Third section for the search menu */}
            <section className="ThirdSec">
                <div className="div ">
                    <p className="letra">London</p>
                    <span className="sp active"> &gt; </span>                    
                </div>
                <div className="div">
                    <p className="letra">Barcelona</p>
                    <span className="sp active"> &gt; </span>
                </div>
                <div className="div">
                    <p className="letra">Long Beach</p>
                    <span className="sp active"> &gt; </span>
                </div>
            </section>
        </div>
    )
}


function Navbar({weatherData, weatherData2 , onSearch}) {
    const [ content, setContent] = useState(true);

    

    function handleChange (){
        setContent(!content) 
    }

    console.log(weatherData2.dt_txt)
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
    <div className="mainCont">
        {/* Section for the first view */}

        {weatherData && ( <>  

        { content ? ( 
                <>
        <div >
            {/* Search button and geo logo */}
            <section>
                <div className="Location">
                    <button className="btn" onClick={handleChange} >Search for places</button>
                    <div className="containerLogo"><img src="./location.svg" alt="image" className="LImagen" /></div>
                </div>
                <div className="principalImg">
                    <div className="ImagenCont">

                        <img src="./LightCloud.png" alt="image" className="IPrin" />
                    </div>
                </div>
            </section>
            {/* weather details */}
            <section className="SecondSection">
                <div className="Ftitle">
                    <h1 className="letter title">{weatherData.main.temp.toFixed(0)}</h1>
                    <h3 className="letter grados">°C</h3>
                </div>
                <h2 className="letter subtitle">{weatherData.weather[0].main}</h2>
                <div className="information">
                    <p className="letter">Today</p>
                    <p className="letter">·</p>
                    {weatherData2.list && <p className="letter">{fechaCorrecta}</p>}
                </div>
                <div className="ubicacion">
                    <div className="IMG"><img src="./geo.svg" alt="Image" className="IMG"/></div>
                    <p className="letter city">{weatherData.name}</p>
                </div>

            </section>
        </div>

        </>
        
        ) : ( 
            <> 
        <div className="mainCont">
            <Search handleChange={handleChange} onSearch={onSearch}/>
        </div> 
        </>
        ) }


 </>  )  }  

    </div>
  )
}

export default Navbar;