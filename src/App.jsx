import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas, Works} from './components'
import GalxCanvas from "./components/canvas/galxy"
const App=()=> {

  return (
   <BrowserRouter>
   <div className="relative z-8 bg-primery">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    {/* <Feedbacks/> */}
    <div className="relative z-O">
      <Contact/>
      <StarsCanvas/>
    </div>
      
   </div>
   </BrowserRouter>
  )
}

export default App
