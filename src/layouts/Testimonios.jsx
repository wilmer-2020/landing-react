import { useState } from "react";
import perfil1 from "../assets/perfil1.jpg";
import perfil2 from "../assets/perfil2.jpg";
const TesmtimoniosData = [
  {
    id: 1,
    name: "Pedro",
    img: perfil1,
    text: "¡fue excepcional! Encontrar el terreno perfecto para construir mi casa era un gran desafío, pero su equipo experto me guió a través de todo el proceso con profesionalismo y dedicación. Estoy encantada con mi nueva propiedad y no podría haberlo logrado sin su ayuda.",
  },
  {
    id: 2,
    name: "Juan",
    img: perfil2,
    text: "Se los recomiendo a cualquiera que esté buscando invertir en bienes raíces. Su amplia selección de terrenos y su servicio al cliente de primera clase hacen que todo el proceso de compra sea fácil y sin complicaciones. ¡Gracias por hacer realidad mi sueño de ser propietario de tierra",
  },
  {
    id: 3,
    name: "Felipe",
    img: perfil1,
    text: "Desde el primer contacto con ellos, su equipo me hizo sentir en buenas manos. Siempre estuvieron disponibles para responder mis preguntas y aclarar mis dudas. Ahora tengo el terreno perfecto para mi proyecto de desarrollo y no puedo estar más feliz con mi elección.",
  },
  {
    id: 4,
    name: "Jose",
    img: perfil2,
    text: "Su conocimiento del mercado inmobiliario y su enfoque centrado en el cliente hicieron que mi experiencia de compra de terrenos fuera sin problemas. Definitivamente los recomendaría a amigos y familiares.",
  },
];
const Testimonios = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const getText = (e) => {
    setText(e.target.alt);
    setName(e.target.accessKey);
  };

  return (
    <section className="testimonios-container">
      <div className="testimonios-avatar">
        {TesmtimoniosData.map((el) => (
          <img
            src={el.img}
            alt={el.text}
            key={el.id}
            accessKey={el.name}
            onClick={getText}
          />
        ))}
      </div>
      <div className="testimonios-text">
        <div className="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="quoteIcon"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
            />
          </svg>

          <p>{text}</p>
          <p className="testimonios-name">{name}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
