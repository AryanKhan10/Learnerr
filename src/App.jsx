import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
function App() {


  return (

    <div className="w-screen min-h-screen bg-gray-900 flex flex-col ">    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>


   
  )
}

export default App
