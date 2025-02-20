import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () =>{
  const [userData,setUserData] = useContext(AuthContext);
  // console.log(authData.employees)
  return (
    <div className="bg-[#1c1c1c] p-5  rounded mt-5 h-69 ">
      <div className=" bg-slate-700 rounded  mb-2 py-2 px-4 flex justify-between">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5"> New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.employees.map(function(elem,idx){
          return <div key={idx} className="border-2 border-slate-500 rounded mb-2 py-2 px-4 flex justify-between">
              <h3 className=" text-lg font-medium w-1/5 !text-blue-400">{elem.firstName}</h3>
              <h2 className=" text-lg font-medium w-1/5">{elem.taskCounts.newTask}</h2>
              <h5 className=" text-lg font-medium w-1/5 !text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className=" text-lg font-medium w-1/5">{elem.taskCounts.completed}</h5>
              <h5 className=" text-lg font-medium w-1/5 !text-red-400 ">{elem.taskCounts.failed}</h5>
            </div>
        })}
      </div>
      {/* <div className="bg-blue-500  mb-2 rounded  py-2 px-4 flex justify-between">
        <h2>Tasnim</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div> */}
      {/* <div className="bg-yellow-400 mb-2 rounded  py-2 px-4 flex justify-between">
        <h2>Tasnim</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div> */}
    </div>
  );
};

export default AllTask;
