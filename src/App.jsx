import React from 'react'
import Login from './Login'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover" data-theme='light'>
      <Routes>
        <Route index element={ <Login/> }/>
        <Route path="login" element={ <Login/> }/>
        <Route path="register" element={ <Register/> }/>
        <Route path="*" element={ <h1> Not Found</h1>}/>
      </Routes>
    </div>
  )
}
