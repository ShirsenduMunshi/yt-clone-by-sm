import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = () => {
    const categories = [
        "All", "Music", "React-Tutorial", "JavaScript", "Web Development", "Coding", "Programming", "Software Engineering", "Technology", "Computer Science", "IT", "Gaming", "Design", "UX", "UI", "Front-end", "Back-end", "Full-stack", "DevOps", "Cybersecurity"
    ];

    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" || event === "searchButton") {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    };

    return (
        <div className="flex overflow-x-scroll no-scrollbar px-4">
            <div className="flex space-x-4 flex-nowrap">
                {categories.map((category) => {
                    return (
                        <div
                            key={category}
                            className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
                            onClick={() => navigate(`/search/${category}`)}
                        >
                            {category}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListItem;
