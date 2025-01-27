import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-6 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard