import React from 'react'

const FailedTask = () => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-violet-600 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
      <h4 className="text-sm">30 Jan 2024</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold !text-black">Learn React</h2>
    <p className="text-sm mt-3">
        Learn React and API Integration
    </p>
    <div className='mt-2'>
        <button className='w-full'>Failed</button>
        </div>
  </div>
  )
}

export default FailedTask