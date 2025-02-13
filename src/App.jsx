import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  const [user, setUser] = useState(null)
  const [loggedInUserData,setloggedInUserData]=useState(null)
  const authData = useContext(AuthContext)
  //  useEffect(() => {
  //   if(authData){
  //     const loggedInUser =localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role )
  //     }
  //   }    
  //  }, [authData])
  useEffect(()=>{
    const loggedInUser =localStorage.getItem('loggedInUser')
   if(loggedInUser){
      const userData =JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
   }
  })
   
  

  const handleLogin = (email,password) =>{
    if(email == "admin@me.com" && password == "123"){
     setUser('admin')
     console.log(user)
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
       const employee=authData.employees.find((e)=>email==e.email && e.password==password)
        if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        console.log(user)
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employee}))
    } 
        } 
    else {
      alert("Invalid Credentials")
    }
  }
  // handleLogin("user@me.com", 123);
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      { user =='admin'? <AdminDashboard/> :(user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/>:null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
