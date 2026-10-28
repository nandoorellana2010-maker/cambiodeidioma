'use client'
import React, { useContext, useEffect } from 'react'
import { ContextoIdiomas } from '../Contextos/ContextoIdiomas'
import { TraducirLista } from '../Models/TraducirLista'

export default function MostrarTraduccion() {
    const contexto =useContext(ContextoIdiomas)

    useEffect(()=> {
        console.log("Se cambió el idioma a", contexto.idiomaActual)
    },[contexto.idiomaActual])

  return (
    <ul>
        {TraducirLista.map((TraducirLista, index)=>(
            <li key={index}>
                {contexto.idiomaActual === "es" ? TraducirLista.es : TraducirLista.en}
            </li>
        ))}
        </ul>
  )
}
