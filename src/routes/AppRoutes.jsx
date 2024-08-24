import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Order from '../pages/Order'

const AppRoutes = () => {
  return (
    <div className='AppRoutes'>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/order' element={<Order />} />
        </Routes>
    </div>
  )
}

export default AppRoutes