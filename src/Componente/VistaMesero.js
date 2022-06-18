
import React,{useState} from "react";
import "../css/VistaMesero.css"
import Desayuno from '../MenusJson/Desayuno.json'
import Almuerzo from '../MenusJson/Almuerzo.json'
import { EnviarPedido } from "../firebase/firebase";

const VistaMesero = () => {

    //-------------------------ESTADO DEL FORMULARIO---------------------------------
    const [dataCliente,setDatacliente] = useState("")
    const [selectMesa,setSelectMesa]= useState("")
    const [dataMeserx,setDatameserx]= useState("")
    

    const guardarClient =(e)=>{
        setDatacliente(e.target.value)
            
    }

    const enviarMesa =(e)=>{
        setSelectMesa(e.target.value)
        
    }

    const guardarMeserx =(e)=>{
        setDatameserx(e.target.value)

    }
    //console.log(dataCliente)

    //------------------------------ESTADO DEL PEDIDO--------------------------------------

    const [datapedido,setDatapedido] = useState([])

   
    const agregarAlPerido =(item)=>{
        console.log(item.id);
        setDatapedido([...datapedido,{...item}])
       
    }

    //Función botón eliminar producto del pedido

        
    const eliminarProducto =(id)=>{ 
        console.log("hola");
        setDatapedido(datapedido.filter((item) => item !== id))
       
    }

    // Total del pedido

    const total = datapedido.reduce((a,b) => a + parseInt(b.Precio,10), 0);
    
   
    return(
        <div className="vistaMesero">
            <div className="MenuContent">
                    
                <div className="MenuDesayuno">
                    <h2>Menu Desayuno</h2>
                    {Desayuno.map((item)=> (
                        <span onClick={()=>agregarAlPerido(item)} className='ButtonPlato' key={item.id} >
                            
                                {item.Plato}   ${item.Precio} 
                        </span>
                        
                    ))

                    }
                    
                </div>

                <div className="MenuAlmuerzo">
                        <h2>Menu Almuerzo</h2>
                    {Almuerzo.map((item)=> (
                        <span onClick={()=>agregarAlPerido(item)} className='ButtonPlato' key={item.id} >
                                {item.Plato}   ${item.Precio} 
                        </span>
                    
                    ))}

                </div> 

            </div>

            <div className="pedidoMesero">
                
                <form className="formCliente">

                    <div className="clientName">
                        <label className="label">Cliente </label>
                        <input className="inputClient" onChange={guardarClient} value={dataCliente} ></input>
                    </div>

                    <div className="meserxName">
                        <label className="label">Mesero </label>
                        <input className="inputMeserx" onChange={guardarMeserx} value={dataMeserx}></input>
                    </div>

                    <div >
                        <label>Seleccione una mesa </label>
                        <select className="Select" onChange={enviarMesa}>
                        <option value="mesa 1">Mesa 1 </option>
                        <option value="mesa 2">Mesa 2 </option>
                        <option value="mesa 3">Mesa 3 </option>
                        <option value="mesa 4">Mesa 4 </option>
                        <option value="mesa 5">Mesa 5 </option>
                        </select>
                    </div>
                </form>
                <div className="seccionPedido">
                    <h2 className="tituloPedido">Pedido</h2>
                    <>
                
                        {datapedido.map((item,id)=>(
                            <div className="itemPedido"> 

                                <div className="divPreparation">
                                    <span className="preparation" key={id}> {item.Plato} </span>
                                    <span className="precio" key={id}>${item.Precio}</span>
                                </div>
                                <button className="buttonBasurero" onClick={()=>eliminarProducto(item)} key={id}> <i class="fa-solid fa-trash-can"></i></button>
                            
                            </div>
                            
                        ))}
                    </>
                    <div className="cajaTotal"><span className="total">Total:</span> <span className="suma">${total}</span></div>
                    <button className="enviar" onClick={()=>EnviarPedido(dataCliente,dataMeserx,datapedido,selectMesa)}>Enviar</button>
                    
                </div>
            </div>
        </div>
        
        
    );
    
}

export default VistaMesero;