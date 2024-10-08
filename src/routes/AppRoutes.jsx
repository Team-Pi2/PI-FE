import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Order from '../pages/Order'
import Standby from '../pages/Standby'
import Plant from '../pages/Plant'
import StoreDetail from '../pages/StoreDetail'
import Communities from '../pages/Communities'
import Store from '../pages/Store'
import Chat from '../pages/Chat'
import Complete from '../pages/Complete'
import StoreList from '../pages/StoreList'
import ChatOrder from '../pages/ChatOrder'

const AppRoutes = () => {
  return (
    <div className='AppRoutes'>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/order' element={<Order />} />
            <Route path='/standby' element={<Standby />} />
            <Route path='/complete' element={<Complete />} />
            <Route path='/plants' element={<Plant />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/:id' element={<StoreDetail />} />
            <Route path='/communities' element={<Communities />} />
            <Route path='/communities/chatorder' element={<ChatOrder />} />
            <Route path='/communities/:id' element={<Chat />} />
            <Route path='/storelist' element={<StoreList/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes