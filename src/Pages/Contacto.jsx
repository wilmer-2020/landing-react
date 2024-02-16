import { useState } from "react";
import Input from '../components/Input'
import Button from '../components/Button'
import logo2 from '../assets/logo2.jpeg'

const EMAIL = 'alfredomontes1970@gmail.com';

const Contacto = () => {

  const [DataInput, setDataInput] = useState({
    Nombre:'',
    Telefono:'',
    Motivo:'',
    Consulta:'',
  })

  const SendDataForm = (e) =>{
    e.preventDefault()
    fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          
      },
      body: JSON.stringify(DataInput)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
      e.target.reset()
  }
  

  const getDataForm = (e) =>{
    setDataInput({
      ...DataInput,[e.target.name]:e.target.value
    })
  }  

  return (
    <>
       <section className="contacto-container">
          <form action="" className="form">
            <Input
              labelText={'Nombre'}
            />
            <Input
              labelText={'Telefono'}
            />
            <Input
              labelText={'Direccion'}
            />
            <label htmlFor="" className="consulta-title">Escriba su consulta</label>
            <textarea name="consulta" id="" cols="30" rows="10" className="consulta"></textarea>
            <Button 
              type={'submit'}
              text={'ENVIAR'}
              className={'buttonEnviar'}
            />
          </form>
          <div className="contacto-text">
            <h2>CONTACTANOS</h2>
            <p>¿Tienes alguna pregunta, comentario o consulta? ¡Nos encantaría escucharte! No dudes en ponerte en contacto con nosotros utilizando el formulario de contacto a continuación. Estamos aquí para ayudarte en lo que necesites y esperamos poder atenderte pronto.</p>
          </div>
       </section>
    </>
  )
  
}


export default Contacto