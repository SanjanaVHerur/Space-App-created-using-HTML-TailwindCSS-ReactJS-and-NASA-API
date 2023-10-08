import React from 'react';
import {useState,useEffect} from 'react';
import NavBar from './NavBar';
import ImageCard from './ImageCard';
import Loading from './Loading';

const apiKey = process.env.REACT_APP_APOD_API_KEY;

const CurrentDay = () => {
    const [photoData,setPhotoData] = useState(null);

    useEffect(()=>{
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            console.log(data)
            setPhotoData(data);
        }
    },[]);

    if (!photoData) {
      return <Loading/>;
    }

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0, so we add 1 and pad with '0' if needed.
        const day = String(today.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }

    return (

        <div className='bg-zinc-950 pb-36'>
        <NavBar />
          <div className="container mx-auto mt-8">
            <ImageCard
              title={photoData.title}
              date={getCurrentDate()}
              explanation={photoData.explanation}
              mediaType = {photoData.media_type}
              mediaUrl={photoData.hdurl}
              url={photoData.url}
            />
          </div>
        </div>

    )
}

export default CurrentDay