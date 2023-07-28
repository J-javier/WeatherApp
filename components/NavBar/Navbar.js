import "./Navbar.css"



function Navbar() {
  return (
    <div className="mainCont">
        {/* Section for the first view */}
        <div >
            {/* Search button and geo logo */}
            <section>
                <div className="Location">
                    <button className="btn">Search for places</button>
                    <div className="containerLogo"><img src="./location.svg" alt="image" className="LImagen" /></div>
                </div>
                <div className="principalImg">
                    <div className="ImagenCont">
                        <img src="./lightCloud.png" alt="image" className="IPrin" />
                    </div>
                </div>
            </section>
            {/* weather details */}
            <section className="SecondSection">
                <div className="Ftitle">
                    <h1 className="letter title">15 </h1>
                    <h3 className="letter grados">°C</h3>
                </div>
                <h2 className="letter subtitle">Shower</h2>
                <div className="information">
                    <p className="letter">Today</p>
                    <p className="letter">·</p>
                    <p className="letter">Fri 5 Jun</p>
                </div>
                <div className="ubicacion">
                    <div className="IMG"><img src="./geo.svg" alt="Image" className="IMG"/></div>
                    <p className="letter city">Helsinki</p>
                </div>

            </section>
        </div>
        {/* Section for the Search menu */}
        <div>

        </div>
    </div>
  )
}

export default Navbar