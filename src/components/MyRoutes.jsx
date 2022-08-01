import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Dashboard from '../pages/Dashboard'

const MyRoutes = () => {
  return (
      <Routes>
          <Route path="/" exact element={<Dashboard />}/>
          <Route path="/customers" element={<Customers />}/>
          <Route path="/products" element={<Products />}/>
      </Routes>
  )
}

export default MyRoutes