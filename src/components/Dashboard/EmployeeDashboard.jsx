import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNum from '../other/TaskListNum'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-6 bg-[#1c1c1c] h-screen'>
      <Header data={data}/>
      <TaskListNum data={data}/>
     <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard