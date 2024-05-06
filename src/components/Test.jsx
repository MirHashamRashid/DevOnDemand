import React, {useState} from 'react'
import ChatBox from '../components/chatBox/ChatBox'
import Details from './Details'
import SearchMenu from './SearchComponent/SearchMenu'
import Modal from './Modal/Modal'
const Test = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="container mx-auto bg-white h-screen">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={openModal}
    >
      Open Modal
    </button>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
    <h2>Hello world</h2>
    <p>this is Rashid from</p>
    </Modal>
  </div>
  )
}

export default Test