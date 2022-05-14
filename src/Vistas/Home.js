import "../App.css";
import React from "react";
import {Link} from "react-router-dom"
import { Header} from "../Componente/Header";

function Home(){
return(
    <>
        <Header/>
        <div className="linksHome">
            <Link to="/mesero">Mesas</Link>
            <Link to="/cocina">Cocina</Link>
        </div>
    </>

);

}
export default Home;