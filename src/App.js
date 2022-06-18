import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Mesero from "./Vistas/Mesero"
import Cocina from "./Vistas/Cocina"
import Home from "./Vistas/Home"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/mesero" element={<Mesero/>}/>
        <Route path="/cocina" element={<Cocina/>}/>
      </Routes>
    </div>
  );
}
export default App