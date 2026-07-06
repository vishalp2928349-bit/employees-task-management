import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import {AuthContext} from './context/AuthProvider'

const App = () => {

  // localStorage.clear()

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
   const [authData] = useContext(AuthContext)

  useEffect(() => {

    if (authData) {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    }
  
  }, [authData])
  

  const loginHandler = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')

      const admin = authData.admin[0]
 
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({role:"admin", data:admin}))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role:"employee", data:employee}))
      }
     
    } else {
      alert('Enter Valid Credentials')
    }
  }

 
  

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null) }
      
    </>
  )
}

export default App
