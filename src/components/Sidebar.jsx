import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import yousvg from "../assets/you.png";

function Sidebar() {
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

    const isMobile = windowWidth <= 768; // Adjust the width as per your requirement

    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />,
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />,
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />,
        },
        {
            id: 4,
            name: "You",
            icon: <img src={yousvg} alt="You" className="w-[2rem]" />,
        },
        {
            id: 5,
            name: "Downloads",
            icon: <LiaDownloadSolid />,
        },
    ];

    return (
        <>
            {isMobile ? (
                <div></div>
            ) : (
                <div className="w-[5.5%] h-[calc(100vh-6.625rem)]">
                    {/* Home */}
                    <div className="space-y-10 justify-center flex flex-col h-fit overflow-x-hidden">
                        {sidebarItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col justify-center text-center items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-[15px]"
                                style={{ margin: 0 + 'px' }}
                                onClick={() => navigate(`/${item.name.toLowerCase()}`)}
                            >
                                <div className="text-[1.7rem] cursor-pointer">{item.icon}</div>
                                <span className="cursor-pointer text-xs" style={{ margin: 0 + 'px' }}>
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Sidebar;
