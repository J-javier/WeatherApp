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
  return (
    <main className="MainContainerPage">
      {/* main information along with the nav bar*/}
      <div className="ContenedorNavBarPage">
        <Navbar/>
      </div>
      {/* Cards for the weather */}
      <div className="ContenedorInformationPage">
        <div className="contBotones">
          <Buttons/>
        </div>
        <div className="DivCardspage">
          <Card/>
        </div>
        <div className="DivBlockpage">
          <Block/>
        </div>
      </div>   
    </main>
  )
}
