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

import "./App.css"

export function App() {

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;