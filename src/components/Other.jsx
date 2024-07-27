import React from 'react'
import { useNavigate } from 'react-router-dom'

const Other = () => {
    const navigate = useNavigate()
  return (<>
    <div className='flex justify-center items-center'><b>Page IS Not Ready, <span className='text-red-600'>Sorry!</span></b></div>
    <div>
        <div className="flex justify-center items-center h-[90vh] w-[95vw] bg-gray-200 mx-auto cursor-pointer" onClick={() => navigate(`/`)}><b>Tap To GO To Home</b></div>
    </div>
    </>
  )
}

export default Other