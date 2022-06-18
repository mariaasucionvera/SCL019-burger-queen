import "../App.css";
import React from "react";
import {Link} from "react-router-dom"
import Header from "../Componente/Header";
import "../css/Home.css"

function Home(){
return(
    <div className="containerHome">
        <Header/>
        <div className="linksHome">
            <Link className="links" to="/mesero">MESAS</Link>
            <Link className="links" to="/cocina">COCINA</Link>
        </div>
    </div>

);

}
export default Home;