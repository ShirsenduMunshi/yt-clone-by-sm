import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlayingVideo from './components/PlayingVideo'
import Home from './components/Home'
import Search from './components/Search'
import { useAuth } from './context/AuthProvider'
import Loading from './loader/loading'
import Other from './components/Other'
import RemoteSearch from './components/RemoteSearch'

const App = () => {
  const {loading, data} = useAuth()
  return (
    <>
    {loading ? <Loading/> : <>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Home' exact element={<Home/>} />
        <Route path='/search/:searchQuery' element={<Search/>} />
        <Route path='/video/:id' element={<PlayingVideo/>} />
        <Route path='/remotesearch' exact element={<RemoteSearch/>} />
        <Route path='/*' exact element={<Other/>} />
      </Routes>
    </>}
    </>
  )
}

export default App
