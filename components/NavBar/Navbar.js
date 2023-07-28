import "./Navbar.css"

function Search (){

    return(
        <div className="ContPrin">
            <section className="FirstSec">
                <div className="ImCont"><img src="./close.svg" alt="image" /></div>
            </section>
            {/* Second section for the search menu */}
            <section className="SecondSec">
                <div className="Clbtn">
                    <div className="searchImg">
                        <img src="./search1.svg" alt="image" /> 
                    </div>
                    <input type="text" placeholder="search location"/>
                </div>
                <button className="btn2">Search</button>
            </section>
            {/* Third section for the search menu */}
            <section className="ThirdSec">
                <div className="div">
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
        <div className="mainCont">
            <Search/>
        </div>
    </div>
  )
}

export default Navbar