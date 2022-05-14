// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs16MADqFjl5ATu6emEerIMkxN_xcj43U",
  authDomain: "scl019-burger-queen-3b49b.firebaseapp.com",
  projectId: "scl019-burger-queen-3b49b",
  storageBucket: "scl019-burger-queen-3b49b.appspot.com",
  messagingSenderId: "912469825473",
  appId: "1:912469825473:web:a87414fd666ab2dfde4140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const EnviarPedido =(dataCliente,dataMeserx,selectMesa,datapedido,)=>{
    console.log("el pedido")
    addDoc(collection(db,"pedidos"),{
        dataCliente,
        dataMeserx,
        selectMesa,
        datapedido,
        

    });
    console.log(db)





}