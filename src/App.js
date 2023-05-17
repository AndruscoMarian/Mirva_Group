import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home/Home"
import Group from "./components/Pages/Group/Group"
import Contacts from "./components/Pages/Contacts/Contacts"
import NotFound from "./components/Pages/Error/Error"

function App() {
  return (
    <div className='mirva-web-page w-full h-screen bg-gray-100 relative'>
      <Router>
        <Navbar/>
        <div className='hero-section w-full absolute top-12 '>
          <Routes>
            <Route 
              path='/' 
              exact 
              element={<Home/>}
              />
            <Route 
              path='/group' 
              exact 
              element={<Group/>}
              />
            <Route 
              path='/contacts' 
              exact 
              element={<Contacts/>}
              />
            <Route 
              path='*' 
              element={<NotFound/>}
              />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

