//import { useState } from "react";
import { VistaMesero } from "../Componente/VistaMesero";
import {Header } from "../Componente/Header";
/* import Pedido from "../Pedido"; */
import "../css/mesero.css"

const Mesero =()=>{

  return(
    
    <div className="Mesero">

      <Header/>
      <VistaMesero/>
      
    </div>
  )


}
export default Mesero;