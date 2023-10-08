import React from 'react'
import  {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-zinc-950 py-2 pt-10'>
        <ul className='font-mono text-2xl text-gray-400 w-52 py-4 mx-auto rounded text-center hover:bg-gray-600 hover:font-bold hover:text-zinc-950 hover:shadow-lg active:bg-gray-500 active:outline-none active:ring active:ring-gray-600'>
            <Link to="/">Take Me Home</Link>
        </ul>
    </div>
  )
}

export default NavBar