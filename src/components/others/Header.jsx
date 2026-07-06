import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-end p-10 '>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>{props.data.firstName}</span> 👋</h1>
      <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-semibold py-2 px-5 rounded-full hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header
