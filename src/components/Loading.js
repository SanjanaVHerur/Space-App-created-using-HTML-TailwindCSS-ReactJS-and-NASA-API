import React from 'react'

const Loading = () => {
  return (
    <div className='bg-zinc-950 w-screen h-screen'>
        <div className='pt-32 pb-48 flex items-center justify-center'>
            <div className="bg-transparent mt-10 pt-4 flex" disabled>
                <svg className="animate-spin mr-3 h-20 w-20 text-gray-400" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <div className='font-mono text-gray-400 text-6xl pt-2'>Loading</div>
            </div>
        </div>
    </div>
  )
}

export default Loading