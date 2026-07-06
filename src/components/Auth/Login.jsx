import React, { useState } from 'react'

const Login = ({loginHandler}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        loginHandler(email,pass)
        setEmail('')
        setPass('')
    }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-col justify-center items-center '>
            <input 
                value={email}
                onChange={(e)=> {
                    setEmail(e.target.value)
                }}  
            className=' bg-transparent outline-none border-2 border-emerald-600 rounded-full py-2 px-6 items-center text-lg font-medium placeholder:text-gray-400' type="email" name="email" id="email" placeholder='Enter your email' required />

            <input 
                value={pass}
                onChange={(e) => {
                    setPass(e.target.value)
                }}
            className=' bg-transparent outline-none border-2 border-emerald-600 rounded-full py-2 px-6 mt-3 items-center text-lg placeholder:text-gray-400 font-medium ' type="password" name="pass" id="pass" placeholder='Enter your password' required />

            <button className='text-white outline-none bg-emerald-600 rounded-full py-2 px-8 w-full mt-7 items-center text-lg placeholder:text-white hover:bg-emerald-700 font-semibold'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
