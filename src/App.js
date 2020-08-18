import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./componenets/NavBar/NavBar";
import Masthead from "./componenets/Masthead/Masthead";
import AboutMe from "./componenets/AboutMe/AboutMe";
import Knowledge from "./componenets/Knowledge/Knowledge";
import Portfolio from "./componenets/Portfolio/Portfolio";
import Footer from "./componenets/Footer/Footer";
import './App.css'

function App() {
  return (
      <div className='container-fluid pl-0 pr-0'>
          <NavBar/>
          <Masthead/>
          <div className='container p-0 shadow'>
              <AboutMe/>
              <Knowledge/>
              <Portfolio/>
              <Footer/>
          </div>
      </div>
  );
}

export default App;
