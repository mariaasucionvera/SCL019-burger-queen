import React from 'react'
import menu from '../menu.json'

/* const menuBreakfast = [

{text:'Café americano'},
{text:'Café con leche'},
{text:'Sandwich de jamón y queso'},
{text:'Jugo de frutas natural'}
 
]
 */

    
function ImpMenu(props){

    return(
      <>

        {menu.map((comida)=>(
          <button className='ButtonPlato'>{comida.Plato}${comida.Precio} </button>
        ))}

      </>
  
    )
    
}  
export {ImpMenu}



 /*   {menu.map((plato)=> (
          <button key = {plato.id}> text={`${plato.Preparation}`}</button>
        )
        )} */