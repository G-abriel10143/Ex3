import React,{useState} from 'react'

export default function Semaforo(){
    const [isVisible, setIsVisible] = useState(0);
  
    const handleClick = () => {

         if (isVisible == 2 ){
            setIsVisible(0)
         }
         else{
            setIsVisible(isVisible+1);
         }
            
      };
    
    return(
        <div>
            <h2 style={{visibility: isVisible == 0 ? 'visible' : 'hidden',color:'red'}}>Parar</h2>
            <h2 style={{visibility: isVisible == 1 ? 'visible' : 'hidden',color:'yellow'}}>Atenção</h2>
            <h2 style={{visibility: isVisible == 2 ? 'visible' : 'hidden',color:'green'}}>Continue</h2>
            <button onClick={handleClick}>Mudar</button>
        </div>
    )
}