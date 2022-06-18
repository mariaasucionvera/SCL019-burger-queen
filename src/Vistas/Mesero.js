import VistaMesero from "../Componente/VistaMesero";
import Header from "../Componente/Header";
import "../css/mesero.css"
import { Link } from "react-router-dom";

const Mesero =()=>{

  return(
    
    <div className="Mesero">
      <Link className="link" to="/">Volver</Link>
      <Header/>
      <VistaMesero/>
      
    </div>
  )


}
export default Mesero;