import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Homepage from '../Pages/HomePage'
const route = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      </Routes>    

    </Router>
   
    </>
  )
}

export default route