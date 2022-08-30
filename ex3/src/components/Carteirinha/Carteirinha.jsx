import React, { useState } from 'react'

import './../../css/carteirinha.css';

import Messi from './imagens/Messi.jpg'
import Neymar from '../../images/Neymar.jpg'
import Cassio from '../../images/Cassio.jpg'

export default function Carteirinha() {

    const[rm, setRm] = useState('')
    const[name, setName] = useState('')
    const[sala, setSala] = useState('')
    const[curso, setCurso] = useState('')

    return(
        <>

            <h1>Carteirinhas</h1>

            <section className='carteira'>

                <img 
                    className='img'
                    src={Messi} 
                    alt="Messi" 
                />

                <div className='dix'>
                    <h2 className='h2'>RM - 01</h2>
                    <h2 className='h2'>Nome - Messi</h2>
                    <h2 className='h2'>Sala - Sala01</h2>
                    <h2 className='h2'>Curso - Curso01</h2>
                </div>

            </section>

            <section className='carteira'>   

                <img 
                    className='img'
                    src={Neymar} 
                    alt="Neymar" 
                />

                <div className='dix'>
                    <h2 className='h2'>RM - 02</h2>
                    <h2 className='h2'>Nome - Neymar</h2>
                    <h2 className='h2'>Sala - Sala02</h2>
                    <h2 className='h2'>Curso - Curso02</h2>
                </div>

            </section>

            <section className='carteira'>

                <img 
                    className='img'
                    src={Cassio} 
                    alt="Cassio"
                />

                <div className='dix'>
                    <h2 className='h2'>RM - 03</h2>
                    <h2 className='h2'>Nome - Cassio</h2>
                    <h2 className='h2'>Sala - Sala03</h2>
                    <h2 className='h2'>Curso - Curso03</h2>
                </div>

            </section>
                
            <section className='carteiras'>

                <div className='carteiras'>
                <label>RM</label>
                    <h2 className='h2'>RM - {rm}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (x) => setRM(x.target.value)
                        } 
                    />

                    
                    <input 
                        type="text" 
                        onChange={
                            (x) => setName(x.target.value)
                        } 
                    />
                    <label>Nome</label>
                    <h2 className='h1'>Nome - {name}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (x) => setNome(x.target.value)
                        } 
                    />
                    
                    <label>Sala</label>
                    <h2 className='h2'>Sala - {sala}</h2>

                    <input 
                        type="text" 
                        onChange={
                            (x) => setSala(x.target.value)
                        } 
                    />
                    <label>Curso</label>
                    <h2 className='h3'>Curso - {curso}</h2>
                </div>

            </section>
        </>
    )
}