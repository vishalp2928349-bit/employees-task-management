import js from '@eslint/js'
import React, { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        completed: false,
        failed: false
    };

    // Create a copy of employees
    const updatedEmployees = userData.employees.map((employee) => {

        if (employee.firstName === asignTo) {


            return {
                ...employee,

                tasks: [...employee.tasks, newTask],

                taskCounts: {
                    ...employee.taskNumber,
                    newTask: employee.taskNumber.newTask + 1
                }
            };
        }

        return employee;
    });

    const updatedData = {
        ...userData,
        employees: updatedEmployees
    };

    // Update React State
    setUserData(updatedData);

    // Update LocalStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAsignTo("");
};

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value)
                    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" name="" id="" placeholder='Enter Title'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>date</h3>
                    <input 
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value)
                    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" name="" id="" placeholder='Enter Title' type="date" name="" id="" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                    <input 
                    value={asignTo}
                    onChange={(e) => {
                        setAsignTo(e.target.value)
                    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" name="" id="" placeholder='Enter Title' type="text" name="" id="" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" name="" id="" placeholder='Enter Title' type="text" name="" id="" />
                </div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id=""></textarea>
                
                    <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded-full  text-sm mt-4 w-full'>Create Task</button>
                
            </div>
        </form>
      </div>
  )
}

export default CreateTask
