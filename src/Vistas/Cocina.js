import React from "react";
import { Header } from "../Componente/Header";
import PedidosCocina from "../Componente/PedidosCocina";
import "../Vistas/Cocina.css"

const Cocina = () => {
    return(
        <div className="vistaCocina">
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