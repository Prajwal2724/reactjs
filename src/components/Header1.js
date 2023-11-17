import React, { useState } from 'react'
 
 function Header() {
   
  const[texts,setTexts]=useState([
    {name1:"eat"},
    {name2:"sleep"},
    {name3:"code"}
  ]);
  const[index,setIndex]=useState(0)
{
  
  function Change()
  {
    const newindex=(index+1)%texts.length
    setIndex(newindex)}
}
   return (
      <div>
         
        <button onClick={Change}>Text Change</button>
        <span>{texts[index].name1}</span>
      </div>
   )
 
   }
 export default Header