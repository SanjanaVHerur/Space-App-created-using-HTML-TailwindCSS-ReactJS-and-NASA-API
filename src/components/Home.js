import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-screen h-screen bg-zinc-950 flex justify-center items-center">
      <div className="flex flex-col items-center space-y-20">
        <div className="font-mono font-medium w-auto p-4 rounded text-gray-400 text-center text-4xl hover:bg-gray-600 hover:text-zinc-950 hover:shadow-lg active:bg-gray-500 active:outline-none active:ring active:ring-gray-600">
          <Link to="/astronomy-picture-of-the-day">See Astronomy Picture Of the Day</Link>
        </div>
        <div className="font-mono font-medium w-auto p-4 rounded text-gray-400 text-center text-4xl hover:bg-gray-600 hover:text-zinc-950 hover:shadow-lg active:bg-gray-500 active:outline-none active:ring active:ring-gray-600">
          <Link to="/astronomy-picture-for-date">See Astronomy Picture Of a Date</Link>
        </div>
        <div className="font-mono font-medium w-auto p-4 rounded text-gray-400 text-center text-4xl hover:bg-gray-600 hover:text-zinc-950 hover:shadow-lg active:bg-gray-500 active:outline-none active:ring active:ring-gray-600">
          <Link to="/astronomy-pictures-for-range">See Astronomy Pictures for a Range of Days</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;