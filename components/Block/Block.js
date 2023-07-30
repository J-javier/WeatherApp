import "./block.css"
 
import React from 'react'

function Block() {
  return (
    <div className="PrincipalContenedorCards">
        <div className="pruebaCard">
            <section className="TwoBlock">
                <h3 className="Titulos">Wind status</h3>
                <div className="medidasCard">
                    <h1 className="Numeros">7</h1>
                    <h2 className="Measured">mph</h2>
                </div>
                <div className="medidasCard one">
                    <div className="circulo"><img src="./geogra.svg" alt="imagen"/> </div>
                    <h3 className="digitos">WSW</h3>
                </div>                
            </section>
            <section className="TwoBlock">
                <h3 className="Titulos">Humidity</h3>
                <div className="medidasCard">
                    <h1 className="Numeros">84</h1>
                    <h2 className="Measured">%</h2>
                </div>
                <div className="medidasCard barra">
                    <div className="subtitlebar">
                        <p className="par">0</p>
                        <p className="par">50</p>
                        <p className="par">100</p>
                    </div>
                    <div className="contBarrita">
                        <div className="barritaColor"></div>
                    </div>
                    <div className="porcentajeHumidity">
                        <p className="par">%</p>
                    </div>
                </div>
            </section>
            <section className="LastBlock">
                <h3 className="Titulos">Visibility</h3>
                <div className="medidasCard">
                    <h1 className="Numeros">6,4 </h1>
                    <h2 className="Measured"> miles</h2>
                </div>
            </section>
            <section className="LastBlock">
                <h3 className="Titulos">Air Pressure</h3>
                <div className="medidasCard">
                    <h1 className="Numeros">998</h1>
                    <h2 className="Measured">mb</h2>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Block