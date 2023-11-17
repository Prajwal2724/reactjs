 import React, { useState } from 'react';
 import { AiOutlineLike } from "react-icons/ai";
 import { FaRegCommentAlt } from "react-icons/fa";
 import { IoMdShare } from "react-icons/io";
  
 
 function Header() {
  const [counts1,setCounts1]=useState("Prajwal");
  const [counts2,setCounts2]=useState("Prajju");
  const [counts3,setCounts3]=useState("Heyyy");
  
   

  function high()
  {
    setCounts1("Varshini");
     
  }
  function low()
  {
    setCounts2("Varshinimegha");
  }
  function mid()
  {
    setCounts3("itzzz mee");
      
  }
   return (
      <div>
        <button onClick={high}> Another name</button>
        <span>{counts1}</span>
        <br></br>
        <button onClick={low}> Another name</button>
        <span>{counts2}</span>
        <br></br>
        <button onClick={mid}> Another name </button>
        <span>{counts3}</span>
        <br></br>
         
        <img src=' https://static.joonsite.com/seelatest/allu-arjun-photos-images-and-latest-pic.jpg' alt='kjhg'></img>
         
        <AiOutlineLike />
         
        <FaRegCommentAlt />

        <IoMdShare />
         
      </div>
   )
 
   }
 export default Header