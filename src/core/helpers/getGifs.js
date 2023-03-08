const getGifs = async() =>{
    
  const url=
     'https://api.giphy.com/v1/gifs/search?api_key=1ed4ih5dPYMrmDMTruvhSE3E6BVlpDFx&q=dragonball&limit=5'
    
  const resp = await fetch(url);

  const {data} = await resp.json();
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  
  return gifs;
   
}
export default getGifs;
