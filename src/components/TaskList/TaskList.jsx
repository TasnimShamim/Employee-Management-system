import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%]  overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full  mt-10"
    >
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-pink-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">27 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Do DSA Question</h2>
        <p className="text-sm mt-3">
            One question of binary Search,Linkedlist consisting both singly and doubly linkedlist must be done
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-amber-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">28 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Do Meditation</h2>
        <p className="text-sm mt-3">
            5 minutes in morning
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-pink-200 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">29 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Study Core</h2>
        <p className="text-sm mt-3">
            Approx 3 hours
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-violet-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">30 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Learn React</h2>
        <p className="text-sm mt-3">
            Learn React and API Integration
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-green-800 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">31 Jan 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Go to Yoga class</h2>
        <p className="text-sm mt-3">
           Must do without fail in morning
        </p>
      </div>
      <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-blue-900 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">01 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold !text-black">Learn Git & Github</h2>
        <p className="text-sm mt-3">
           Understanding the basics 
        </p>
      </div>
    </div>
  );
};

export default TaskList;
