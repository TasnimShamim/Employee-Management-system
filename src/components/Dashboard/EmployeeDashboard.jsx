import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNum from '../other/TaskListNum'

const EmployeeDashboard = () => {
  return (
    <div className='p-6 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskListNum/>
     <TaskList/>
    </div>
  )
}

export default EmployeeDashboard