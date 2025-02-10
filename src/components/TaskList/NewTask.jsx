 import React from 'react'
 
 const NewTask = () => {
   return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-green-900 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">28 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Do Meditation</h2>
        <p className="text-sm mt-3">
            5 minutes in morning
        </p>
       <div className='mt-4'>
        <button>Accept Task</button>
        </div> 
      </div>
   )
 }
 
 export default NewTask