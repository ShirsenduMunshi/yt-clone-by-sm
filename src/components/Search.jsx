import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import { fetchData } from '../utils/rapidapi'
import Sidebar from './Sidebar'
import SearchCard from './searchCard'

const Search = () => {
  const [result,setResult]=useState()
  const {searchQuery} = useParams()
  const {loading} = useAuth()

  useEffect(() => {
    fetchSearchResult()
  }, [searchQuery])
  
  const fetchSearchResult = () => {
    fetchData(`search/?q=${searchQuery}`).then(({contents})=>{
      setResult(contents)
    })
  }
  

  return (
    <div className="">
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className=" grid grid-cols-1 gap-2 p-2">
          {result?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SearchCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Search
