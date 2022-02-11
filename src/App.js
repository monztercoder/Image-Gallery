import React,{useState,useEffect} from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
    const [images,setImages] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [term,setTerm] = useState('technology')

useEffect( () => {
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&orientation=horizontal&image_type=photo&pretty=true`)
  .then (res => res.json()) 
  .then (data => {setImages(data.hits)
          setIsLoading(false)
  })
  .catch (err => console.log(err))
  
}, [term])

  return (
    <div className="flex flex-col justify-center items-center max-w-full">
      <ImageSearch searchText={(text) => setTerm(text)}/>
    <div>
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx0-auto mt-32">No Images Found</h1>}

      { isLoading ? <h1 className="text-6xl text-center mx0-auto mt-32">Loading...</h1> : 
      <div className=" flex flex-wrap max-w-full justify-center overflow-hidden sm:-mx-2 md:-mx-4">
        {images.map((image) => {
           return <ImageCard key={image.id} image={image} />
        } )}
      </div>}
    </div>

  </div>
  );
}

export default App;
