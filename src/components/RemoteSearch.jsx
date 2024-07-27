import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const RemoteSearch = () => {
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
        <div><div className="flex justify-around items-center w-full">
            <div className="w-[90%] flex items-center">
                <input type="text" className='outline-none w-[90%] px-3 py-2 rounded-bl-full rounded-tl-full border border-gray-200' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    value={searchQuery} />
                <button className='outline-none w-[10%] border rounded-r-full px-4 py-2 bg-gray-200 cursor-pointer'><CiSearch size={"24px"} className='relative left-[-14px]' onClick={() => searchQueryHandler("searchButton")} /></button>
            </div>
        </div></div>
    )
}

export default RemoteSearch