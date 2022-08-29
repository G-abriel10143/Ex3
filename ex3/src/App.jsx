import React from 'react'
import Semaforo from './components/Semaforo/Semaforo'
import Carros from './components/Carro/Carros'
import Carteirinha from './components/Carteirinha/Carteirinha'
import Preenchido from './components/Preenchido/Preenchido'



export default function App(){
    let paragr={
        textAlign:'center',
        color:'orange',
        textIdent:'45px',
        fontSize:'15px'
    }
    return(
        <>
      <h1 style={paragr}>Gabriel Cerqueira Alves</h1>
      <h2 style={{fontSize:'10px',color:'blue'}}>RM95434</h2>
      <h3 style={{fontSize:'10px',color:'black'}}>1TDSR</h3>
      <Semaforo/>
      <Carros/>
      <Carteirinha/>
      <Preenchido/>
      </>
    )
}