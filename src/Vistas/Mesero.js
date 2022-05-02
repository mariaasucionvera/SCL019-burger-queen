import { ButtonsMenu } from "../Componente/ButtonMenu";
import { Client } from "../Componente/Client";
import { ImpMenu } from "../Componente/Menu";
import {Header} from "../Componente/Header";
import "../Vistas/mesero.css"

function Mesero(){
  return(
      <div className="Mesero">

      <Header/>
      <Client/>
      <ButtonsMenu/>
      <ImpMenu/>
          
      
      
      {/*<Pedido/>
        <input></input>
      <Observaciones/>
        <textarea></textarea> */}
        
      </div>
  )


}
export default Mesero;