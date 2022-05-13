
import React,{useState} from "react";
import "../Componente/ButtonMenu.css"
import Menu from '../MenusJson/Menu.json'



const ButtonsMenu = () => {


    //------------------------------ESTADO DEL PEDIDO--------------------------------------

    const [datapedido,setDatapedido] = useState([])

    console.log(datapedido)
    const agregarAlPerido =(item)=>{
        setDatapedido([...datapedido,{...item}])
         
    }

    //Función botón eliminar producto del pedido

    const eliminarProducto =(id)=>{
        setDatapedido(datapedido.filter((item) => item !== id))
       
    }

    // Total del pedido

    const total = datapedido.reduce((a,b) => a + parseInt(b.Precio,10), 0);
   

    //--------------------------------ESTADO DEL MENÚ---------------------------------------- 

    const [Plato, setPlato] = useState(Menu);
  
    // Funciones para filtrar por tipo de menú

    function filtrarDesayuno(){
       const Desayuno = Plato.filter(plate => plate.Horario==="Desayuno")
       setPlato (Desayuno)
    }

    function filtrarAlmuerzo(){
        const Almuerzo = Plato.filter(plate => plate.Horario==="Almuerzo")
        setPlato (Almuerzo)
    }
 


    return(
        <>
            <div className="contenedor">
                
                <div className="ButtonContent">        
                    <button  className="buttonMenu" onClick={filtrarDesayuno} > Desayuno </button>
                    <button  className="buttonMenu" onClick={filtrarAlmuerzo}> Almuerzo </button>
                </div> 

                <div className="MenuContent">
                    <div className="menuDesayuno">
                
                        {Plato.map((item)=> (
                            <button onClick={()=>agregarAlPerido(item)} className='ButtonPlato' key={item.id} >
                                    {item.Plato}${item.Precio} 
                            </button>

                        
                        ))}

                    </div>

                </div>

            </div>

            <div className="pedido">
                <h1>Pedido</h1>
                <form className="formCliente">

                    <div className="clientName">
                        <label>Cliente </label>
                        <input></input>
                    </div>

                    <div className="clientName">
                        <label>Mesero </label>
                        <input></input>
                    </div>

                    <div className="Select">
                        <label>Seleccione una mesa </label>
                        <select>
                        <option>Mesa 1 </option>
                        <option>Mesa 2 </option>
                        <option>Mesa 3 </option>
                        <option>Mesa 4 </option>
                        <option>Mesa 5 </option>
                        </select>
                    </div>
                </form>

                {datapedido.map((item,id)=>(
                    <>
                        <li key={id}>

                            {item.Plato} 
                            ${item.Precio}
                             <button onClick={()=>eliminarProducto(item)} key={id}>Eliminar</button>
                            
                        </li>
                    
                    </>
                    
                ))}

                <p>Total: ${total} </p>
                <button>Enviar</button>

            </div>

        </>
        
);
    
}

export {ButtonsMenu};