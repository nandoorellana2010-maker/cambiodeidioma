'use client'
import React, { useContext } from 'react'
import { ContextoIdiomas } from '../Contextos/ContextoIdiomas'

export default function BotonEs() {
    const contexto = useContext(ContextoIdiomas)
  return (
    <button onClick={()=> contexto.cambioIdioma("es")}>Cambiar Idioma a Español</button>

  )
}
