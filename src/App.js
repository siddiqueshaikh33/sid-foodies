import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Menu from "./Components/Menu"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
  return (
         <>
         {/* <h1 className="bg-info">React Class</h1>
         <p>This is a Paragrapgh</p><hr/> */}

         <BrowserRouter>
         <Navbar/>
         <Routes>

           <Route path="/" element ={<Home />} />
           <Route path="/about" element ={<About />} />
           <Route path="/menu" element ={<Menu />} />
           <Route path="/contact" element ={<Contact />} />
           <Route path="/login" element ={<Login/>} />
           <Route path="/signup" element ={<Signup />} />
          </Routes>
          </BrowserRouter>
         </>
  );
}

export default App;
