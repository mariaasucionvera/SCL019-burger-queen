
import React,{useState} from "react";
import "../Componente/ButtonMenu.css"
import Desayuno from '../MenusJson/Desayuno.json'
import Almuerzo from '../MenusJson/Almuerzo.json'
import { EnviarPedido } from "../firebase/firebase";

//import { db } from "../firebase/firebase";
//import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";


const ButtonsMenu = () => {

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

    //console.log(datapedido)
    const agregarAlPerido =(item)=>{
        setDatapedido([...datapedido,{...item}])
         
    }

    //Función botón eliminar producto del pedido

    const eliminarProducto =(id)=>{
        setDatapedido(datapedido.filter((item) => item !== id))
       
    }

    // Total del pedido

    const total = datapedido.reduce((a,b) => a + parseInt(b.Precio,10), 0);
    
    //Función para enviar pedido a firestore

    /* const EnviarPedido =(dataCliente,dataMeserx,selectMesa,datapedido)=>{
        console.log("el pedido")
        addDoc(collection(db,"pedidos"),{
                dataCliente,
                dataMeserx,
                selectMesa,
                datapedido,
                

        });
    } */
 

    /*  const EnviarPedido = async () => {
        console.log("envio a db");
        try {
          await addDoc(collection(db, "pedidos"), {
            client: dataCliente,
            table: selectMesa,
            order: datapedido,
            meserx: dataMeserx,
            date: new Date(),
            status: "Pendiente",
          });
        } catch (error) {
          throw new Error(error);
        }
    };
       */


    return(
        <div className="Mesero">
            <div className="contenedor">
                
            
                <div className="MenuContent">
                    <div className="MenuDesayuno">
                        <h2>Menu Desayuno</h2>
                        {Desayuno.map((item)=> (
                            <span onClick={()=>agregarAlPerido(item)} className='ButtonPlato' key={item.id} >
                                    {item.Plato}   ${item.Precio} 
                            </span>
                        
                        ))}

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

            </div>

            <div className="pedido">
                
                <form className="formCliente">

                    <div className="clientName">
                        <label className="label">Cliente </label>
                        <input className="inputClient" onChange={guardarClient} value={dataCliente} ></input>
                    </div>

                    <div className="meserxName">
                        <label className="label">Mesero </label>
                        <input className="inputMeserx" onChange={guardarMeserx} value={dataMeserx}></input>
                    </div>

                    <div className="Select">
                        <label>Seleccione una mesa </label>
                        <select onChange={enviarMesa}>
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
                    {datapedido.map((item,id)=>(
                        <>
                            
                            <div className="itemPedido" key={id}>
                                {item.Plato} 
                                ${item.Precio}
                            </div>
                            <button className="buttonBasurero" onClick={()=>eliminarProducto(item)} key={id}> <i class="fa-solid fa-trash-can"></i></button>
                        
                        </>
                        
                    ))}
                
                    <h3 className="total">Total: ${total} </h3>
                    <button onClick={()=>EnviarPedido(dataCliente,dataMeserx,datapedido,selectMesa)}>Enviar</button>
                </div>
            </div>

        </div>
        
    );
    
}

export {ButtonsMenu};