import React from 'react';
import { CiSearch } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const RemoteNav = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto main flex justify-between px-1 py-2">
                <div className="flex justify-center items-center text-xl space-x-4">
                    <img className='w-28 cursor-pointer' src={logo} alt="logo" onClick={() => navigate(`/`)}/>
                </div>
                <div className="flex justify-between items-center space-x-1">
                    <RiVideoAddLine size={"42px"} className='rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer' onClick={() => navigate(`/Creator Page`)}/>
                    <AiOutlineBell size={"42px"} className='rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer' onClick={() => navigate(`/Notification Page`)}/>
                    <CiSearch className='rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer' size={"44px"} onClick={() => navigate(`/remotesearch`)}/>
                </div>
            </div>
  )
}

export default RemoteNav
