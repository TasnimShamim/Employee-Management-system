import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium' >Hello <br/> <span className='text-2xl font-semibold'>Tasnim 👋</span> </h1>
        <button className='bg-red-600 text-white px-4 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header