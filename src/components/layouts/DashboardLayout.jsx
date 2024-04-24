import React,{useState} from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom';
function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
};
  return (
    <div className='flex  my-5  mx-5 p-0'>
     
    
    <div className={`flex-1 p-4 ${sidebarOpen ? 'ml-64' : ''} transition-all duration-300 ease-in-out`}>
      <Header onSideBarToggle={handleSidebarToggle}/>
      <Outlet/>
    </div>

    </div>
    
  )
}

export default DashboardLayout