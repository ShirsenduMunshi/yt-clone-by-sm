import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import user from "../assets/user_icon.png";
import logo from "../assets/logo.png";
import FlotingSidebar from './FlotingSidebar';
import RemoteNav from './RemoteNav'; // Make sure to import RemoteNav
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 768; // Adjust the width as per your requirement

    const oppenStyle = {
        position: 'relative',
        left: '0px',
        transition: "all 0.3s"
    };

    const closeStyle = {
        position: 'relative',
        left: '-300px',
        transition: "all 0.3s"
    };

    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    };


    return (
        <>
            {isMobile ? <div></div> :
                <div className="mx-auto main flex justify-between px-6 py-2">
                    <div className="flex justify-center items-center text-xl space-x-4">
                        <GiHamburgerMenu size={"42px"} className='p-2 rounded-full cursor-pointer hover:bg-gray-200 duration-200' onClick={toggleSidebar} />
                        <img className='w-28 cursor-pointer' src={logo} alt="logo" onClick={() => navigate(`/`)}/>
                    </div>

                    <div className="flex justify-around items-center w-[60%]">
                        <div className="w-[90%] flex items-center">
                            <input type="text" className='outline-none w-[90%] px-3 py-2 rounded-bl-full rounded-tl-full border border-gray-200' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                                value={searchQuery} />
                            <button className='outline-none w-[10%] border rounded-r-full px-4 py-2 bg-gray-200 cursor-pointer'><CiSearch size={"24px"} onClick={() => searchQueryHandler("searchButton")} /></button>
                        </div>
                        <IoMic size={"42px"} className='hover:bg-gray-200 duration-200 rounded-full p-2 cursor-pointer' />
                    </div>

                    <div className="flex justify-between items-center space-x-5">
                        <RiVideoAddLine size={"42px"} className='rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer' />
                        <AiOutlineBell size={"42px"} className='rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer' />
                        <Avatar src={user} size='42' round={true} className='cursor-pointer' />
                    </div>
                </div>}

            {/* Conditionally render Remote Nav component */}
            {isMobile && <RemoteNav />}

            {/* Conditionally render Sidebar component */}
            <div className='z-50' style={isSidebarOpen ? oppenStyle : closeStyle}>
                <FlotingSidebar />
            </div>
        </>
    );
};

export default Navbar;
