import React from 'react'

const FailedTask = () => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-violet-600 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold !text-black">{data.taskTitle}</h2>
    <p className="text-sm mt-3">
       {data.taskDescription}
    </p>
    <div className='mt-2'>
        <button className='w-full bg-green-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
        </div>
  </div>
  )
}

export default FailedTask