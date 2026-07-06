import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='h-full w-75 bg-blue-400 rounded-xl shrink-0 p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 rounded text-sm py-1 px-3'>{data.category}</h3>
            <h4 className='text-sm '>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>{data.taskDescription}</p>

        <div className='flex justify-center mt-4 '>
            <button className='bg-green-500 rounded-full p-2 outline-none text-sm '>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
