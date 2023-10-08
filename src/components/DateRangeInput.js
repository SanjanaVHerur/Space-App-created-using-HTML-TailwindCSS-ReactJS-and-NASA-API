import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';

const DateRangeInput = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const history = useHistory();

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the Astronomy Pictures in Range page with the selected start and end dates as query parameters
    history.push(`/astronomy-pictures-in-range?start_date=${startDate}&end_date=${endDate}`);
  }

  return (
    <div className='bg-zinc-950'>
    <NavBar />
    <div className="font-mono pt-20 pb-48 flex items-center justify-center">
      <div className="bg-gray-600 rounded-lg p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="start_date" className="block text-white text-xl">Start Date : </label>
            <input type="date" id="start_date" value={startDate} onChange={handleStartDateChange}
              className="block w-full px-4 py-2 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="end_date" className="block text-white text-xl">End Date : </label>
            <input type="date" id="end_date" value={endDate} onChange={handleEndDateChange}
              className="block w-full px-4 py-2 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Show APODs
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default DateRangeInput;
