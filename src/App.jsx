import { BrowserRouter } from "react-router-dom"
import{Apropos,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"

const App=()=> {
  return(
  < BrowserRouter
  future={{
    v7_startTransition: true,
  }}
  >
  <div className="relative z-0 bg-primary">
<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar/>
<Hero/>
  </div>
  <Apropos/>
  <Experience/>
  <Tech/>
  <Works/>
  <Feedbacks/>
  <div className="relative z-0">
    <Contact/>
    <StarsCanvas/>
  </div>
  </div>
  </BrowserRouter>

  )
  
}

export default App
