import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Mesero from "./Vistas/Mesero"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Mesero />} />
        
      
      </Routes>
    </div>
  );
}
export default App