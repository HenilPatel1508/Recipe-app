import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AddRecipe from './components/AddRecipe.jsx'
import Saved from './components/Saved.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FetchRecipeById from "./components/FetchRecipeById.jsx";
import Detail from "./components/Detail.jsx"


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/add' element={<AddRecipe/>}/>
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
