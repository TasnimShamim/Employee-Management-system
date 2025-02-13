import React from 'react'

const AcceptTask = ({data}) => {
  console.log()
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">{data.taskTitle}</h2>
        <p className="text-sm mt-3">
           {data.taskDescription}
        </p>
        <div className='flex justify-between gap-4 mt-20'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-4 text-sm'>Mark as Failed</button>
        </div>
      </div>
     
  )
}

export default AcceptTask