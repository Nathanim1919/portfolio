import React from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<HomePage/>}/>
          <Route path='/work' element={<HomePage/>}/>
          <Route path='/work/' element={<HomePage/>}/>
        </Routes>
    </div>
  )
}
