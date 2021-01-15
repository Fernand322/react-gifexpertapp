import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExportApp = () => {
   // const categorias = ['Autos', 'Motos', 'Bicicletas']; Esto no se hace menos que los elementos de la lista nunca cambien como por ejemplo un menu.

    const [categorias, setcategorias] = useState(['Rick and Morty']);
    
    const handleAdd = ()=>{
        setcategorias([...categorias,'hola']);// una posible solucion.
        
    }
    
    return (
        
           <>
           <h2 class="titulo">GifExpertApp</h2>
           <AddCategory setcategorias = {setcategorias} />
           <hr />
           
           <ol>
               {
                   categorias.map(category =>
                    <GifGrid key={category} category={category} />
                    //<li key={category}>{category}</li> //La key es utilizada por react para saber que elemento esta iterando.

                   )
               }
           </ol>
           
           
           </> 
        
    )
}
