import React from 'react'

const login = () => {
  return (
    <div className='container h-screen w-full flex justify-center bg-white'>

      <div className='border border-gray-300 h-96 w-1/4 flex flex-col justify-normal gap-3 items-center '>
        <input className='h-8 w-3/5' type="text" />
        <input className='h-8 w-3/5'  type="text" />
        <button className='border h-8 w-3/5' >
          Submit
        </button>

      </div>
    </div>
  )
}

export default login