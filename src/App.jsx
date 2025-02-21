import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  const [user, setUser] = useState(null)
  const [loggedInUserData,setloggedInUserData]=useState(null)
  const[userData,SetUserData] = useContext(AuthContext)
  //  useEffect(() => {
  //   if(authData){
  //     const loggedInUser =localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role )
  //     }
  //   }    
  //  }, [authData])
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
   if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
   }
  },[])
   
  

  const handleLogin = (email,password) => {
    if(email == "admin@me.com" && password == "123"){
     setUser('admin')
     console.log(user)
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if (userData){
       const employee = userData.find((e)=> email == e.email && e.password == password)
        if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        console.log(user)
     localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
    } 
  } 
    else {
      alert("Invalid Credentials")
    }
  }
  // handleLogin("user@me.com", 123);
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      { user =='admin'? <AdminDashboard changedUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changedUser={setUser} data={loggedInUserData}/>:null) }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App;
