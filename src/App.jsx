import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Home from './components/home'
import Navbar from './components/navbar'
import Branch from './components/branch'
import Search from './components/search'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <main>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:branch' element={<Branch />} />
        <Route exact path='/search/:id' element={<Search />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;