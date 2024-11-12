import React, { useState } from "react";
import "./App.css";


function BtnClicked(){
  const[count,setCount] = useState(0);
  function LetUsClick(){
    console.log("I am Clicked");
    setCount((val) => val+1)
    
  
}return(
<button onClick={LetUsClick}>{count}</button>);
}
export default BtnClicked;