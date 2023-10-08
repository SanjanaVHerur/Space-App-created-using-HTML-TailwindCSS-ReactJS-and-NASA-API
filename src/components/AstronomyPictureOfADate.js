import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import ImageCard from './ImageCard';
import Loading from './Loading';

const apiKey = process.env.REACT_APP_APOD_API_KEY;

const AstronomyPictureOfADate = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dateParam = queryParams.get('date');
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    async function fetchPhoto() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateParam}`);
      const data = await res.json();
      setPhotoData(data);
    }

    if (dateParam) {
      fetchPhoto();
    }
  }, [dateParam]);

  if (!dateParam) {
    return (
      <div>
        <p>Please select a date to view the Astronomy Picture of the Day.</p>
      </div>
    );
  }

  if (!photoData) {
    return <Loading/>;
  }

  return (
    // bg-gradient-to-r from-zinc-900 via-gray-700 to-zinc-900
      <div className='bg-zinc-950 pb-36'>
      <NavBar />
        <div className="container mx-auto mt-8">
          <ImageCard
            title={photoData.title}
            date={dateParam}
            explanation={photoData.explanation}
            mediaType = {photoData.media_type}
            mediaUrl={photoData.hdurl}
            url={photoData.url}
          />
        </div>
      </div>
  );
}

export default AstronomyPictureOfADate