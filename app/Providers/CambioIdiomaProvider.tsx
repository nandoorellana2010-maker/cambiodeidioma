import React, { useState } from 'react'
import { ViewReact } from '../Models/ViewReact'
import { ContextoIdiomas } from '../Contextos/ContextoIdiomas'

export default function CambioIdiomaProvider({children}:ViewReact) {
  const [idiomaActual, setIdiomaActual]=useState('es')

  function cambioIdioma (nuevoIdioma: string){
    setIdiomaActual(nuevoIdioma)
  }
  return (
    <ContextoIdiomas.Provider value={{idiomaActual, cambioIdioma}}>
      {children}
      </ContextoIdiomas.Provider>
  )
}
