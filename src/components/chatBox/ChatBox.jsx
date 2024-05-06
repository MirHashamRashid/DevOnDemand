import React, { useState } from 'react';
import { GoInfo } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import Modal from '../Modal/Modal';
import Details from '../Details';
const ChatBox = ({detailsMenuController}) => {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [fileInput, setFileInput] = useState(null);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFileInputChange = (e) => {
    setFileInput(e.target.files[0]);
  };

  const handleSendMessage = () => {
    if (textInput || fileInput) {
      const newMessage = {
        id: Date.now(),
        sender: 'user',
        text: textInput || '',
        file: fileInput
          ? {
            fileName: fileInput.name,
            fileType: fileInput.type,
            url: URL.createObjectURL(fileInput),
          }
          : null,
      };

      // Add the new message to the list of messages
      setMessages([...messages, newMessage]);

      // Reset input fields
      setTextInput('');
      setFileInput(null);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className="flex flex-1   flex-col p-4  border rounded-md bg-white text-black">
      {/* Chatbox header section */}
      <div className="flex justify-between border-b pb-2 mb-4">
        <div className="flex flex-col">
          <h3 className='text-sm'>The offer Title Here</h3>
          <span className='text-[12px]'>By <strong>Johnathan</strong></span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
          <GoInfo onClick={openModal} className="text-2xl" />
        </div>
      </div>

      {/* Main messaging area */}
      <div className=" overflow-y-auto p-2 flex-grow ">
        {/* Display messages here */}
        {messages.map((message) => (
          <div key={message.id} className="my-2">
            <div className="bg-gray-100 p-4 rounded-xl rounded-bl-none w-1/2 ">
              <p>{message.text}</p>
              {message.file && (
                <div>
                  {message.file.fileType.startsWith('image') ? (
                    <img src={message.file.url} alt={message.file.fileName} className="rounded my-2 w-12" />
                  ) : (
                    <a href={message.file.url} download={message.file.fileName} className="text-blue-500 underline">
                      {message.file.fileName} 
                    </a>
                  )}
                </div>
              )}
            </div>
            <strong className="block text-gray-500">{message.sender} <span className="text-sm text-gray-400">{new Date(message.id).toLocaleTimeString()}</span></strong>
          </div>
        ))}
      </div>

      {/* Input section */}
      <div className="flex  items-center p-2 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          value={textInput}
          onChange={handleTextInputChange}
          className="flex-grow p-2 border rounded bg-white outline-none"
        />
        <div className='  text-[#7b7b7b]'>

        <label htmlFor="file">
          
          <GrAttachment className='h-8 w-8 rounded-sm object-contain cursor-pointer'/>
        </label>
        <input
          type="file"
          onChange={handleFileInputChange}
          className="ml-2 h-11  rounded-xl text-[#7b7b7b]"
          id='file'
          hidden
          
        />
        </div>
        <button
          onClick={handleSendMessage}
          className="ml-2 text-white bg-[#29323B] p-2 rounded "
        >
          Send
        </button>
     
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}><Details menuOpen={isModalOpen} menuController={closeModal}/> </Modal>
    </div>
  );
};

export default ChatBox;
