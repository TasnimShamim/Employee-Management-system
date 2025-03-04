import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
const logOutUser =()=>{
  localStorage.setItem('loggedInUser','')
  props.ChangeUser('')
  // window.location.reload()
}
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium' >Hello <br/> <span className='text-2xl font-semibold'>User👋</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-4 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header