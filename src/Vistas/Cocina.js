import React from "react";
import Header from "../Componente/Header";
import PedidosCocina from "../Componente/PedidosCocina";
import "../css/Cocina.css"
import { Link } from "react-router-dom";

const Cocina = () => {
    return(
        
        <div className="vistaCocina">
            <Link className="link" to="/">Volver</Link>
            <Header/>
            <div className="titulos">
                <h1 className="Cocina">Cocina</h1>
                <h2 className="PedidosPendientes">Pedidos pendientes:</h2>
            </div>
          
            <PedidosCocina />
        </div>


    );

}

export default Cocina