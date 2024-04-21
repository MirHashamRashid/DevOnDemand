
import {Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import ForgotPassword from './components/ForgotPassword'
function App() {
  

  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
   </Routes>
  )
}

export default App
