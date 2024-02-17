import Header from "../components/header";
import Map from "../layouts/Map";
import iconAsesoria from "../assets/iconAsesoria.png";
import iconOpciones from "../assets/iconOpciones.png";
import iconFinanza from "../assets/iconFinancia.png";
import Testimonios from "../layouts/Testimonios";
import { QuienesSomos } from "../layouts/QuienesSomos";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <>
      <Header />
      <section className="beneficios-Container">
        <h1>Beneficios de trabajar con nosotros</h1>
        <hr />
        <div className="beneficios">
          <article className="item">
            <img src={iconFinanza} alt="" className="iconBeneficio" />
            <p>Financiamiento disponible</p>
          </article>
          <article className="item">
            <img src={iconAsesoria} alt="" className="iconBeneficio" />
            <p>Asesoramiento profesional</p>
          </article>
          <article className="item">
            <img src={iconOpciones} alt="" className="iconBeneficio" />
            <p>Variedad de opciones</p>
          </article>
        </div>
      </section>
      <QuienesSomos />

      <h1 className="testimonios-title">Testimonios</h1>

      <Testimonios />

      <Map />

      <Contacto/>
    </>
  );
};

export default Home;
