
import {Routes,Route } from 'react-router-dom'
import SignUp from './components/Qadir Agha/SignUp'
import Layout from './components/Qadir Agha/Layout'
import Register from './components/Qadir Agha/Register'
import Inbox from './pages/Inbox'
import Contacts from './pages/Contacts'
import Test from './components/Test'
function App() {
  

  return (
    <Routes >
      <Route  path='/' element={<Layout/>}>

    <Route  index element={<SignUp/>}/>
      <Route path='inbox' element={<Inbox/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      </Route>
      <Route  path='/signup' element={<SignUp/>}/>
      <Route  path='/register' element={<Register/>}/>

  
    {/* <Route path='/layout' element={<Layout/>} /> */}
    {/* <Route path='/login' element={<Login/>}/>
    <Route path='/forgotPassword' element={<ForgotPassword/>}/> */}
   </Routes>

  )
}

export default App
