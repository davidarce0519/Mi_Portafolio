import React from "react"
import Navbar from "./Componentes/NavBar"
import Principal from "./Componentes/Principal"
import Redes from "./Componentes/Redes"
import Informacion from "./Componentes/Informacion"
import Proyectos from "./Componentes/Proyectos"
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {


  return (
    <>

      <Principal/>
      <Informacion/>
      <Proyectos/>
      <Redes/>

    {/* <Router>
      <Switch>
        <Route path="/" element={<Principal />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Redes" element={<Redes />} />
      </Switch>
    </Router> */}

    </>
  )
}

export default App
