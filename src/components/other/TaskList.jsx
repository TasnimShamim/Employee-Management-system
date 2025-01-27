import React from 'react'

const TaskList = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
       <div className=' w-[45%] rounded-xl px-10 py-5 bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div> 
        <div className=' w-[45%] rounded-xl px-10 py-5 bg-emerald-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div> 
        <div className=' w-[45%] rounded-xl px-10 py-5 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div> 
        <div className=' w-[45%] rounded-xl px-10 py-5 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div> 
    </div>
  )
}

export default TaskList