import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'

const MyRoutes = () => {
  return (
      <Routes>
          <Route path="/" exact element={<Dashboard />}/>
          <Route path="/customers" element={<Customers />}/>
      </Routes>
  )
}

export default MyRoutes