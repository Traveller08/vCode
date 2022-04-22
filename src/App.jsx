import './App.css';
import React from 'react';
import About from './components/aboutus/About';
import Auth from './components/forms/Auth';
import Caraousel from './components/Caraousel/Caraousel';
import GetContest from './components/Practice/GetContest';
import NavbarSec from './components/Navbar/NavbarSec';
import NavbarTop from './components/Navbar/NavbarTop';
import Problems from './components/Practice/Problems';
import Contests from './components/Practice/Contests';
import GetProblem from './components/Practice/GetProblem';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [form, setForm] = React.useState(false);
  const [about, setAbout] = React.useState(false);

  function handleBtnClick() {
    setForm(prev=>{
      return !prev;
    })
  }
    return (
        <div className="App">
          <NavbarSec />
            <Router>
             <Routes>
                <Route exact path='/' element={<Caraousel />} />
                <Route path='/about' element={<About />} />
                <Route path='/contests' element={<Contests />} />
                <Route path='/problems' element={<Problems />} />
                <Route path='/mystats' element={<Problems />} />
                <Route path='/compare' element={<Problems />} />
                <Route path='*' element={<div>ERROR</div>} />
              </Routes>
            </Router>

            <GetProblem />
              
        </div>
        
    );
}
export default App;