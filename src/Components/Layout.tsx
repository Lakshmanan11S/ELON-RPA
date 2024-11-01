import React, { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import '../assets/Scss/App.scss'
interface LayoutProps{
    children:ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
   
        <div className='Layout'>
            <Header/>
        <div className='LayoutContent'>
            <Sidebar/>
        <div className='MainContent'>
            {children}
        </div>
        </div>
        </div>
    
  )
}

export default Layout