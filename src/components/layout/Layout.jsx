import React from 'react';
import {  BrowserRouter } from 'react-router-dom'
import MyRoutes from '../MyRoutes';
import Sidebar from '../Sidebar/Sidebar';
import Topnav from '../topnav/Topnav';
import './layout.css'

const Layout = () => {
  return (
    <BrowserRouter>
        {/*<Route render={(props) => (*/}
            <div className='layout'>
                <Sidebar />
                <div className='layout__content'>
                  <Topnav/>
                    <div className='layout__content-main'>
                        <MyRoutes />
                    </div>
                </div>
            </div>
       {/* )} />*/}
    </BrowserRouter>
  )
}

export default Layout