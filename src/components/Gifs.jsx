import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";


export const Gifs = ({categoria}) => {


    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
    }


    useEffect(() => {
        getImages()
    }, [])
    



  return (
    <>
        <h2>{categoria}</h2>
        <div className="container">
            {images.map( ({id, title, url}) => (
                <GifItem key={id} url={url} title={title}/>
            ))}
        </div>
    </>
  )
}
