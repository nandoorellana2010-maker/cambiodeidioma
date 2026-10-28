import Image from "next/image";
import CambioIdiomaProvider from "./Providers/CambioIdiomaProvider";
import BotonEs from "./Components/BotonEs";
import BotonIn from "./Components/BotonIn";
import MostrarTraduccion from "./Components/MostrarTraduccion";

export default function Home() {
  return (
    <CambioIdiomaProvider>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Traductor Ingles - Español</h1>
        <BotonEs></BotonEs>
        <BotonIn></BotonIn>
        <MostrarTraduccion></MostrarTraduccion>
      </div>

    </CambioIdiomaProvider>
  );
}
