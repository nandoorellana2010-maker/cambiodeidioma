'use client'
import React, { useContext } from 'react'
import { ContextoIdiomas } from '../Contextos/ContextoIdiomas'

export default function BotonIn() {
    const contexto = useContext(ContextoIdiomas)

  return (
    <button onClick={()=>contexto.cambioIdioma("en")}>Cambiar idioma a Ingles</button>
  )
}
