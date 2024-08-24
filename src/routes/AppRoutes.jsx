import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Order from '../pages/Order'
import Standby from '../pages/Standby'

const AppRoutes = () => {
  return (
    <div className='AppRoutes'>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/order' element={<Order />} />
            <Route path='/standby' element={<Standby />} />
        </Routes>
    </div>
  )
}

export default AppRoutes