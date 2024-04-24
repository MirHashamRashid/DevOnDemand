
import {Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import ForgotPassword from './components/ForgotPassword'
import DashboardLayout from './components/layouts/DashboardLayout'
function App() {
  

  return (
   <Routes >
    <Route path='/' index element={<DashboardLayout/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
   </Routes>

  )
}

export default App
