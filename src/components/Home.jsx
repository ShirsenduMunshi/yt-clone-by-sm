import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import RemorteSidebar from "./RemorteSidebar.jsx";
import ListItem from "./ListItem.jsx";
import { useNavigate } from "react-router-dom";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  const { data, loading } = useAuth();

  return (
    <div className="flex">
      <Sidebar />
      {isMobile ?<>
        <div className="h-[calc(100vh-6.625rem)] w-[100%] overflow-y-scroll overflow-x-hidden">
        <ListItem/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!loading &&
              data.map((item) => {
                if (item.type !== "video") return false;
                return <Video key={item.id} video={item?.video} />;
              })}
          </div>
        </div>
        </>
        :
        <>
        <div className="h-[calc(100vh-7vh)] w-[calc(100%-5.5%)] overflow-y-scroll overflow-x-hidden">
        <ListItem/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!loading &&
              data.map((item) => {
                if (item.type !== "video") return false;
                return <Video key={item.id} video={item?.video} />;
              })}
          </div>
        </div></>}
        <RemorteSidebar />
    </div>
  );
}

export default Home;