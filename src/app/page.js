import Card from "../../components/Card/Card";
import Navbar from "../../components/NavBar/Navbar";


export default function Home() {
  return (
    <main >
      {/* main information along with the nav bar*/}
      <div>
        <Navbar/>
      </div>
      {/* Cards for the weather */}
      <div>
        <div>
          <Card/>
        </div>
        <div>
          
        </div>
      </div>   
    </main>
  )
}
