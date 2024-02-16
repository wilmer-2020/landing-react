import UbicacionIcon from '../assets/marcador-de-posicion.png'
 
const Map = () => {
  return (
    <>
      <section className="container-Map">
        <div className="title-Map">
            <img src={UbicacionIcon} alt="" />
          <h2>Encuentranos</h2>
        </div>
        <article className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.5571568810487!2d-87.6614934271726!3d14.27902905432592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f65831448fea645%3A0xbfd3e28e03243923!2sPortal%20Brisas%20Del%20Campo!5e0!3m2!1sen!2sus!4v1707451572519!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </article>
      </section>
    </>
  );
};



export default Map;
