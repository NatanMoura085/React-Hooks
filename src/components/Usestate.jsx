import { useState } from "react";

export default function Usestate(){

 const [count, setCount]=useState(0)

 const change = ()=>{

    setCount(count+1)

}

 return(
    <div>

        <p>Meu contador:{count}</p>
        <button onClick={change}>Meu botao</button>
        
    </div>
    );

}