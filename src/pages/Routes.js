import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';



export default function Routes() {
  return (
    <div>
       <Routes>

        <Route path='/' element={<Home />} />
       </Routes>
    </div>
  )
}
