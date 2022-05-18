import React from "react";
import { useState,useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";



const PedidosCocina =()=>{
    const [pedidos,setpedidos] = useState([])
    
    useEffect(() => {
        onSnapshot(

            query(collection(db, "pedidos"), orderBy("date", "asc")),
            (snapshot) => {
                const products = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setpedidos(products);
                console.log("pedidos");
            },
            (error) => {
                console.log(error);
            }

        );
    }, []);

    return (
        <div className="orderContainer">
            {pedidos.map((element)=>(

                <section key={element.id} >
                    
                    <div className="pedido">

                        <div className="formPedido">
                            <p>Cliente: {element.client}</p>
                            <p>Meserx: {element.meserx}</p>
                            <p>Mesa: {element.order}</p>
                        </div>

                        <div className="formItems">
                            {element.table.map((item) => (

                                <div key={item.id}>
                                    <li>
                                        {item.Plato}
                                        {item.precio}
                                    </li>
                                </div>
                            ))
                            }
                        </div>

                    </div>
                </section>
                
            ))}
        </div>
       
        
    );

}
export default PedidosCocina;