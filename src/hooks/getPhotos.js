import {useState,useEffect} from 'react'

const URL = 'https://jsonplaceholder.typicode.com/photos'

const getPhotos = () => {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async() =>{
        try {
            const res = await fetch(URL);
            const data = await res.json();
            setPhotos(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
    fetchPhotos();
    },[])
    
  return {photos}
}

export default getPhotos