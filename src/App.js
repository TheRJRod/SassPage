import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import "./Components/App.css"
import { useState } from "react";
function App() {

  const [heroOne, setHeroOne] = useState(true);

  const setHero = (heroOne, heroTwo) => {
    setHeroOne(heroOne)

  } 


  return (
    <div>
      <Navbar heroOne={heroOne} />
      <Hero setHero={setHero} />
      <Main />
      <Footer heroOne={heroOne}/>
    </div>
  )
}

export default App;