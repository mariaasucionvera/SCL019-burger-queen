import React from 'react'

const menuBreakfast = [

{text:'Café americano'},
{text:'Café con leche'},
{text:'Sandwich de jamón y queso'},
{text:'Jugo de frutas natural'}
 
]


    
function Menu(props){

    return(
        
        <li>
          {menuBreakfast.map(impMenu=>(<p>{impMenu.text}</p>))}  
        </li>

    )
}
export {Menu}