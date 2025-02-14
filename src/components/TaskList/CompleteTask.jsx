import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-pink-200 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">{data.taskTitle}</h2>
        <p className="text-sm mt-3">
          {data.taskDescription}
        </p>
       <div className='mt-2'>
        <button className='w-full bg-green-500 mt-20 text-sm rounded py-2 '>Complete</button>
        </div> 
      </div>
  )
}

export default CompleteTask