import React from 'react'
const Modal = ({isOpen, onClose, children}) => {
    const overlayClasses = isOpen? 'fixed inset-0 bg-black opacity-70 z-50  ': "hidden";
    const modalClasses = isOpen ? "fixed h-full w-fit top-0 right-0 flex  justify-center z-50 " : 'hidden';

  return (
    <>
        <div className={overlayClasses} onClick={onClose}></div>
        <div className={modalClasses} >
          {children}
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg text-black"  >
                {/* <button className='absolute top-0 right-0 mx-auto mb-2 text-gray-500 hover:text-gray-600'
                onClick={onClose}
                >
                <BiWindowClose/>
                </button> */}

                
                
            </div>
        </div>
    </>
  )
}

export default Modal