import React from "react";
import { useState,useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";



const Cocina =()=>{
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

    /* const getPedido =async()=>{
        const datosFirestore = await getDocs(query(collection(db,"pedidos")));
        console.log(datosFirestore)
        return datosFirestore;
    }

    useEffect(()=>{
        getPedido()




    },[]) */

    return (
        pedidos.map((element)=>(

            <section key={element.id} className="orderContainer">
                <div>
                    <h2>Cliente: {element.client}</h2>
                    <h2>Meserx: {element.meserx}</h2>
                    <h2>Mesa: {element.order}</h2>


                    <div>
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
            
        ))

    );

}
export default Cocina;