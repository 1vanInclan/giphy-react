import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const Gifs = ({categoria}) => {


    const { images, isLoading } = useFetchGifs(categoria);
    

  return (
    <>
        {/* <h2>{categoria}</h2>
        {
            isLoading && ( <h2>Cargando 😘</h2> )
        } */}
        {
            isLoading ? (<h2>Cargando 😘</h2>) : (<h2>{categoria}</h2>) 
        }
        


        <div className="container">
            {images.map( ( image ) => (
                <GifItem
                    key={ image.id} 
                    {...image}/>
            ))}
        </div>
    </>
  )
}
