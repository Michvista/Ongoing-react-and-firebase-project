import React from 'react';
import './App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero';
// import Slider from "react-slick";
// import {Verses} from './data.js';
import Home from './components/pages/Home';
import Slide from './components/Slide';
import Card from './components/Card';
import CardItem from './components/CardItem';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Give from './components/pages/Give';
import Contact from './components/pages/Contact';
import Readmore from './components/pages/Readmore';
import SignupPage from './components/pages/SignupPage';

import {
  Route,
  Routes
} from 'react-router-dom';


function App() {
  
  return (
  <>
  <Navbar />
       <div className='container'>
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/Blogs' element= {<Blogs/>} />
            <Route path='/Give' element= {<Give/>} />
            <Route path='/Contact' element= {<Contact/>} />
            <Route path='/blog' element= {<Readmore/>} />
            <Route path='/sign-up' element= {<SignupPage/>} />
          </Routes>
      </div>
  </>
  )
 
};
  export default App;