import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData.employees)
  return (
    <div className="bg-[#1c1c1c] p-5  rounded mt-5 h-54 overflow-auto">
        <div className=" bg-teal-700 rounded  mb-2 py-2 px-4 flex justify-between">
            <h2 className="w-1/5">Employee Name</h2>
            <h3 className="w-1/5 "> New Task</h3>
            <h5 className="w-1/5">Active Task</h5>
            <h5 className="w-1/50">Completed</h5>
            <h5 className="w-1/5">Failed</h5>
          </div>
      {authData.employees.map(function(elem) {
        return (
          <div className=" bg-teal-700 rounded  mb-2 py-2 px-4 flex justify-between">
            <h2 className="w-1/5 ">{elem.firstName}</h2>
            <h3 className="w-1/5  ">Task</h3>
            <h5 className="w-1/5 ">Status</h5>
            <h5 className="w-1/5 ">Status</h5>
          </div>
        );
      })}

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
