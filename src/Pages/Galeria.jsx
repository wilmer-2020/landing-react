import getPhotos from "../hooks/getPhotos"

const Galeria = () => {
  const { photos } = getPhotos();
  const AllPhotos = photos.slice(0, 20)
  return (
   
    <div className="containerPhotos">
    {AllPhotos.map(el => 
      <img src={el.thumbnailUrl} alt="" key={el.title}/>
    )}
    </div>
   
  )
}

export default Galeria