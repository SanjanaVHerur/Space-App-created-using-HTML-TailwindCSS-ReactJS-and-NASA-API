import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import ImageCard from './ImageCard';
import Loading from './Loading';

const apiKey = process.env.REACT_APP_APOD_API_KEY;

const AstronomyPicturesInRange = ({ location }) => {
  const queryParams = new URLSearchParams(location.search);
  const startDateParam = queryParams.get('start_date');
  const endDateParam = queryParams.get('end_date');
  const [photoDataArray, setPhotoDataArray] = useState([]);

  useEffect(() => {
    async function fetchPhotosInRange() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDateParam}&end_date=${endDateParam}`);
      const data = await res.json();
      console.log(data)
      setPhotoDataArray(data);
    }

    if (startDateParam && endDateParam) {
      fetchPhotosInRange();
    }
  }, [startDateParam, endDateParam]);

  if (!startDateParam || !endDateParam) {
    return (
      <div>
        <p>Please select a start date and end date to view Astronomy Pictures in the specified range.</p>
      </div>
    );
  }

  if (!photoDataArray || photoDataArray.length === 0) {
      return <Loading/>;
  }

  return (
    <div className='bg-zinc-950'>
      <NavBar />
        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
          {photoDataArray.map((photoData) => (
            <ImageCard
              key={photoData.date}
              title={photoData.title}
              date={photoData.date}
              explanation={photoData.explanation}
              mediaType = {photoData.media_type}
              mediaUrl={photoData.hdurl}
              url={photoData.url}
            />
          ))}
        </div>
      </div>
  );
}

export default AstronomyPicturesInRange;
