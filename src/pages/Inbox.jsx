import React,{useState} from 'react'
import SearchMenu from '../components/SearchComponent/SearchMenu'
import ChatBox from '../components/chatBox/ChatBox'
import Details from '../components/Details'
import SignUp from '../components/Qadir Agha/SignUp'
const Inbox = () => {
const [MenuOpen, isSetMenuOpen] = useState(null);
const DetailsMenuController = ()=>{isSetMenuOpen(!MenuOpen)}
  return (
    <div className='flex h-full  w-full bg-white '>
        
        <SearchMenu/>
        <ChatBox detailsMenuController={DetailsMenuController}/>
       <Details menuOpen={MenuOpen} menuController={DetailsMenuController} />
       {/* <SignUp /> */}
    </div>
  )
}

export default Inbox