import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import {Logo} from '../assets/index'
const Details = ({menuOpen, menuController}) => {
  const openMenu ={
  
  }
  return (
    <>
    
    <div className={` ${menuOpen ? 'flex': 'hidden'} hidden h-full lg:flex flex-col p-2 border  overflow-scroll`}>
      <div className="flex justify-between  text-black items-center">
        <h3>Details</h3>
        <IoIosCloseCircleOutline  onClick={menuController} className="w-6" />
      </div>
      <div className="flex flex-col rounded-xl border px-2 py-3 ">
        <span className="text-gray-400 text-sm">Action buttons</span>
        <div className="flex items-center justify-start my-2">
          <div className="text-black border flex items-center mx-1 justify-center rounded-lg bg-slate-100 h-9 w-9 cursor-pointer">
            <RiDeleteBin6Line className="text-2xl" />
          </div>
          <div className="text-black border flex items-center mx-1 justify-center rounded-lg bg-slate-100 h-9 w-9 cursor-pointer">
            <RiDeleteBin6Line  className="text-2xl" />
          </div>
        </div>
      </div>
      {/* Query details section */}
      <div className="flex flex-col bg-white border rounded-md px-2 my-3">
        <span className="text-gray-400 text-sm mb-4">Action buttons</span>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <hr className="h-2 w-full text-black"/>
      {/* attachments section */}
      <div className="flex flex-col bg-white">
      <span className="text-gray-400 text-sm">Attachments</span>
      <div>
        
      </div>
      </div>
      {/* Contacts */}
      <div className="flex border rounded-md bg-white p-2 flex-col ">
      <span className="text-gray-400 text-sm ">Contacts</span>
      <div className="flex my-3 items-center  ">
        <img src={Logo.Elips} className="w-9 mr-3" alt="" /> 
          <h3 className="text-black text-lg">Jhonathan</h3>
      </div>
          <hr className="h-2 w-full text-black"/>

        <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Mobile number</span>
        <p className="text-black font-bold my-2">+93711906588</p>
      </div>
        <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Email Address</span>
        <p className="text-black font-bold my-2">Hr@gmail.com</p>
      </div>


      </div>
      </div>
    </div>
    <div className={`${menuOpen ? 'flex' : 'hidden'} flex-col overflow-scroll px-4 absolute right-0 w-[300px] h-full mx-2 bg-[#F4F4F4]`}>
    <div className="flex justify-between my-4  text-black items-center"> 
        <h3>Details</h3>
        <IoIosCloseCircleOutline   onClick={menuController} className="w-6 text-2xl cursor-pointer" />
      </div>
      <div className="flex flex-col rounded-xl border px-2 py-3  bg-white">
        <span className="text-gray-400 text-sm">Action buttons</span>
        <div className="flex items-center justify-start my-2">
          <div className="text-black border flex items-center mx-1 justify-center rounded-lg bg-slate-100 h-9 w-9 cursor-pointer">
            <RiDeleteBin6Line className="text-2xl" />
          </div>
          <div className="text-black border flex items-center mx-1 justify-center rounded-lg bg-slate-100 h-9 w-9 cursor-pointer">
            <RiDeleteBin6Line className="text-2xl" />
          </div>
        </div>
      </div>
      {/* Query details section */}
      <div className="flex flex-col bg-white border rounded-md px-2 my-3">
        <span className="text-gray-400 text-sm mb-4">Action buttons</span>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Possible offerta</span>
        <p className="text-black font-bold">EUR 100</p>
      </div>
      <hr className="h-2 w-full text-black"/>
      {/* attachments section */}
      <div className="flex flex-col bg-white">
      <span className="text-gray-400 text-sm">Attachments</span>
      <div>
        
      </div>
      </div>
      {/* Contacts */}
      <div className="flex border rounded-md bg-white p-2 flex-col mt-2 ">
      <span className="text-gray-400 text-sm ">Contacts</span>
      <div className="flex my-3 items-center  ">
        <img src={Logo.Elips} className="w-9 mr-3" alt="" /> 
          <h3 className="text-black text-lg">Jhonathan</h3>
      </div>
          <hr className="h-2 w-full text-black"/>

        <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Mobile number</span>
        <p className="text-black font-bold my-2">+93711906588</p>
      </div>
        <div className="flex flex-col my-2">
        <span className="text-gray-400 text-sm">Email Address</span>
        <p className="text-black font-bold my-2">Hr@gmail.com</p>
      </div>


      </div>
      </div>
    </div>
    </>
  );
};

export default Details;
