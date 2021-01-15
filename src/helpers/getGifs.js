export const getGif = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=6&api_key=sUmoVEYiXccSUE0d9MGxkCytSYkm8z5j`;
    const resp = await fetch(url);
    const {data}= await resp.json();
   //En esta const se guarda un arreglo con todos los resultados retornados de data a travez del metodo map()
    const gifs = data.map(img => {
       return{
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
        }
    })
   
    return(gifs);
    
}