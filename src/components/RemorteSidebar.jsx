import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import  yousvg  from "../assets/you.png";
import { RiVideoAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const RemorteSidebar = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
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

    const isMobile = windowWidth <= 768;
    
    const sidebarItems = [
        {
            id: 1,
            name:"Home",
            icon: <GoHome />,
        },
        {
            id: 2,
            name:"Shorts",
            icon: <SiYoutubeshorts />,
        },
        {
            id:3,
            name: "",
            icon: <RiVideoAddLine size={"42px"} className='rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer' />
        },
        {
            id: 4,
            name:"Subscriptions",
            icon: <MdOutlineSubscriptions />,
        },
        {
            id:5,
            name:"You",
            icon: <img src={yousvg} alt="You" className="w-[1rem]"/>
        }
    ];
  return (<>
    {isMobile? 
        <div className=" w-full h-[3rem] absolute bottom-0 flex">
            {/* Home */}
            <div className=" space-y-10 justify-center items-center w-full flex h-fit overflow-x-hidden">
                {sidebarItems.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="flex flex-col text-center items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl px-[15px]" style={{margin: 0 + 'px'}}
                        >
                            <div className="text-[1rem] cursor-pointer"onClick={() => navigate(`/${item.name.toLowerCase()}`)}>{item.icon}</div>
                            <span className="cursor-pointer text-xs" style={{margin: 0 + 'px'}}>{item.name}</span>
                        </div>
                    );
                })}
            </div>           
        </div>
        : <div></div>}
        </>
  )
}

export default RemorteSidebar;
