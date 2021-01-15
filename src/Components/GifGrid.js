import React from 'react'
import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
   // const [images, setimages] = useState([]);
   ////UseEffect permite que react no haga petiociones repetidas cuando surge algun cambio en la pagina. 
   // useEffect(()=>{
   //     getGif(category).then( setimages) 
   // },[category])//los corchetes permite que este codigo solo se ejecute una vez, cuando el componente es renderizado por primera vez.
   // //Metodo getGif permite traer todas las imagenes de la API por medio de una funcion async
    
    //getGif();
    //data:images es para desestructurar asi poder utilziar solo el nombre 'images'.
    const {data:images,loading}= useFetchGifs(category);
    return (
        <>
        <h3>{category}</h3>

        {loading && <p className=  "p animate__animated animate__shakeX" >Loading...</p> }
        
        { < div className="card-grid">
         
           
               {
                   //images.map(({id,title}) => ( //De esta manera se hace la destructuracion del elemento img o la variable iteradora. Para que sea mas simple
                    images.map(img => (
                    //console.log(img.id);
                      //<li key={ id }> {title} </li>
                      <GifGridItem 
                      key= {img.id}
                      {...img} />
                      
                   ))
               }
               
           
        </div> }
        </>
    )
}
