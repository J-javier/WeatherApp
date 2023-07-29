import "./Card.css"

import React from 'react'

function Card() {
  return (
    <div className="mainContainerCard">
        <div className="GradosOpt">
            <button>°C</button>
            <button>°F</button>
        </div>
        <div className="ContenedorCard">
            <section className="secOne">
                <h3 className="letraInf">Tomorrow</h3>
                <div className="ContImagen">
                    <img src="./LightCloud.png" alt="image"/>
                </div>
            </section>
            <section className="secInformacion">
                <h4 className="letraInf">16 °C</h4>
                <h4 className="letraInf menor">11 °C</h4>
            </section>
        </div>
        {/* THIS IS A TEST FOR THE NEXT CARDS */}
        <div className="ContenedorCard">
            <section className="secOne">
                <h3 className="letraInf">Tomorrow</h3>
                <div className="ContImagen">
                    <img src="./LightCloud.png" alt="image"/>
                </div>
            </section>
            <section className="secInformacion">
                <h4 className="letraInf">16 °C</h4>
                <h4 className="letraInf menor">11 °C</h4>
            </section>
        </div>
        {/* THIS IS THE END FOR THE TEST */}
        <div className="ContenedorCard">
            <section className="secOne">
                <h3 className="letraInf">Tomorrow</h3>
                <div className="ContImagen">
                    <img src="./LightCloud.png" alt="image"/>
                </div>
            </section>
            <section className="secInformacion">
                <h4 className="letraInf">16 °C</h4>
                <h4 className="letraInf menor">11 °C</h4>
            </section>
        </div>
        {/* the last one */}

    </div>
  )
}

export default Card