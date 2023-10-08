// ImageCard.js
import React from 'react';

const ImageCard = ({ title, date, explanation,  mediaType, mediaUrl, url }) => {
  return (
    <div className="w-3/4 mx-auto pb-20">
    <div className="bg-gradient-to-r from-zinc-950 via-black to-zinc-950 shadow-md shadow-white rounded-lg overflow-hidden">
      <div className="w-full">
        {mediaType === "image" ? (
              <img src={url} alt={title} className="object-cover w-full h-96" />
          ) : (
              <iframe
              title="space-video"
              src={url}
              frameBorder="0"
              gesture="media"
              // allow="encrypted-media"
              allow="autoplay"
              allowFullScreen
              className="w-full h-96"
              />
          )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold font-mono text-white text-2xl mb-2 rounded hover:bg-white hover:text-black">{title}</div>
        <p className="font-mono text-black text-xl mb-2 w-52 pl-3 pr-1 bg-white rounded">DATE : {date}</p>
        <p className="font-mono text-white">{explanation}</p>
      </div>
    </div>
  </div>
  );
}

export default ImageCard;
