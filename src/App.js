import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Mesero from "./Vistas/Mesero"

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Mesero />} />
        
      
      </Routes>
    </div>
  );
}
export default App