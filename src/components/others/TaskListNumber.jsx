import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex m-10 justify-between gap-10 '>
      <div className='w-[45%] bg-red-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='w-[45%] bg-blue-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl font-medium'>Complete Task</h3>
      </div>

      <div className='w-[45%] bg-green-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='w-[45%] bg-yellow-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
