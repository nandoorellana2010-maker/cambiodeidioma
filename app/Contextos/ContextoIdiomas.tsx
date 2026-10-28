'use client'
import { createContext } from "react";

interface ContextoIdiomasType {
    idiomaActual: string,
    cambioIdioma: (nuevoIdioma: string) => void
}

export const ContextoIdiomas=createContext<ContextoIdiomasType>({
    idiomaActual: 'es',
    cambioIdioma: ()=>{}
})

