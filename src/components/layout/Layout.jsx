import React,{useEffect} from 'react';
import {  BrowserRouter } from 'react-router-dom'
import MyRoutes from '../MyRoutes';
import Sidebar from '../Sidebar/Sidebar';
import Topnav from '../topnav/Topnav';
import './layout.css'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'


const Layout = () => {
  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
      const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

      const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

      dispatch(ThemeAction.setMode(themeClass))

      dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])

  return (
    <BrowserRouter>
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar />
          <div className='layout__content'>
            <Topnav/>
              <div className='layout__content-main'>
                  <MyRoutes />
              </div>
          </div>
      </div>
       
    </BrowserRouter>
  )
}

export default Layout