import React from 'react'

export default props=>{

    const carros=['Corsa','Tesla','Fusca','Audi','Jeep','Celta','Mercedes']

    return(
        <>
        <h2 style={{color:'yellow'}}>
            Carros
        </h2>
        <ul>
                {carros.map((c)=> <li>{c}</li>)}
        </ul>
        {props.children}
        </>
    )
}