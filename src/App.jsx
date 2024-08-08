import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Organizacion from "./components/Organizacion/Organizacion";
import Regalos from "./components/Regalos/Regalos";
import Menu from "./components/Menu/Menu";
import Nosotros from "./components/Nosotros/Nosotros";
import Cancion from "./components/Cancion/Cancion";
import Instagram from "./components/Instagram/Instagram";
import Asistencia from "./components/Asistencia/Asistencia";
import Agenda from "./components/Agenda/Agenda";
import BgMusic from "./assets/musica.mp3";

import "./App.css"
import { useState, useRef } from "react";

export function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <>
      <Header />
      <button className="z-50 fixed right-4 top-4 bg-amber-300 text-black border border-black border-solid" onClick={handlePlayPause}>
        {isMusicPlaying ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
        }
      </button>
      <main className="text-black">
        <Banner />
        <Organizacion />
        <Regalos />
        <Menu />
        <Nosotros />
        <Cancion />
        <Instagram />
        <Asistencia />
        <Agenda />
        <p className="p-8 agradecimiento">¡Gracias por formar parte de uno de los días más felices de nuestras vidas!</p>
      </main>
      <audio ref={audioRef} loop>
        <source src={BgMusic} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default App;