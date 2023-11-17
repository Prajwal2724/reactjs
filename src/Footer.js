import React from 'react'

export  function Footer() {

    function myfunc()
    {
        alert("button is clicked")
    }
  return (
    <div> 
        <button onClick={myfunc}>Click here</button>
    </div>
  )
}

export default Footer