import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';

const DateInput = () => {
  const [date, setDate] = useState('');
  const history = useHistory();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered date is valid (after 1995-06-16)
    const currentDate = new Date();
    const selectedDate = new Date(date);

    if (selectedDate > new Date('1995-06-15') && selectedDate <= currentDate) {
      // Redirect to the Astronomy Picture of the Day page with the selected date as a query parameter
      history.push(`/astronomy-picture-of-a-date?date=${date}`);
    } else {
      alert('Please enter a valid date.');
    }
  }

  // return (
  //   <div>
  //     <NavBar />
  //     <div>
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label htmlFor="date">Select a date:</label>
  //           <input type="date" id="date" value={date} onChange={handleDateChange}/>
  //         </div>
  //         <div>
  //           <button type="submit">Show APOD</button>
  //           </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  return (
    <div className='bg-zinc-950'>
      <NavBar />
      <div className="font-mono pt-32 pb-48 flex items-center justify-center">
        <div className="bg-gray-600 rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="date" className="block text-white text-xl">Select a date : </label>
              <input type="date" id="date" value={date} onChange={handleDateChange}
                className="block w-full px-4 py-2 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Show APOD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DateInput;
