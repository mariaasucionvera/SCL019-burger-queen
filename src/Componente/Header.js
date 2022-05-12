import React from "react";
import hamburguesafeliz from "../Imagenes/hamburguesafeliz.png"
import "./header.css"


function Header(props){
    return(
        <div className="header">
            <h1 className="happyBurger"> Happy Burger! </h1>
            
            <img src={hamburguesafeliz} alt="hamburguesa feliz"className="hamburguesa"></img>
            
         </div>
        
    )

};
export{Header} 

   

