import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [authData] = useContext(AuthContext)

  

  return (
    <div id='allTask' className='bg-[#1c1c1c] mt-5 p-5 rounded  h-48'>
      <div className='bg-red-400 flex justify-between rounded py-2 px-4 mb-2'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Complete Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
      </div>

      <div className='h-[80%] overflow-auto'>

      {authData.employees.map((elem, idx) => {

        return <div key={idx} className='border-green-400 border flex justify-between rounded py-2 px-4 mb-2'>
        <h2 className='w-1/5 px-5 text-lg font-medium'>{elem.firstName}</h2>
        <h3 className='w-1/5 px-5 text-lg font-medium'>{elem.taskNumber.newTask}</h3>
        <h5 className='w-1/5 px-5 text-lg font-medium'>{elem.taskNumber.active}</h5>
        <h5 className='w-1/5 px-5 text-lg font-medium'>{elem.taskNumber.completed}</h5>
        <h5 className='w-1/5 px-5 text-lg font-medium'>{elem.taskNumber.failed}</h5>
      </div>
      })}

      </div>

    </div>
  )
}

export default AllTask
