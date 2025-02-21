import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNum from '../other/TaskListNum'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-6 bg-[#1c1c1c] h-screen'>
      <Header  changeUser ={props.changeUser}data={props.data}/>
      <TaskListNum data={props.data}/>
     <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard