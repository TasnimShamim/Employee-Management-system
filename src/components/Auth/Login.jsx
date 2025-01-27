import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")  
    }
    
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-12 ">
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
           required
            className=" mb-2 outline-none bg-transparent border-2 border-emerald-600  font-medium rounded-full text-lg px-5 py-4 placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }} 
          required className="outline-none  font-medium bg-transparent border-2 border-emerald-600 rounded-full text-lg px-5 py-4 placeholder:text-gray-500"type="password" placeholder="Enter password" />
          <button className=" mt-3 outline-none border-none  bg-emerald-600  hover:bg-emerald-600 rounded-full text-lg px-5 py-4 w-full placeholder:text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
