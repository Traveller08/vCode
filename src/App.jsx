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
import Post from './components/post/Post';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Err from './Err';


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
          <NavbarSec 
            handleBtnClick={handleBtnClick}

          />
          {
            form ? <Auth /> : null
          }
          {/* <Post 
            user={
              {
                name:'Sourav',
                username:'sourav',
                profile_image:'https://avatars2.githubusercontent.com/u/52709818?s=400&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d&v=4'

              }
            }
            post={
              {
                body:'kjbjbjdf gfdjhbfg fdhjbgnm gfhjbgf nfdjhbbfdg fdhjgf hj gfggfhjbdfj ln;aknndanm aghd jg gduabggj',
                created_at:'2020-05-05'

              }
            }
          /> */}   
            <Router>
             <Routes>
                <Route exact path='/' element={<Caraousel />} />
                <Route exact path='/home' element={<Caraousel />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contests' element={<Contests />} />
                <Route exact path='/problems' element={<Problems />} />
                <Route exact path='/mystats' element={<Problems />} />
                <Route exact path='/compare' element={<Problems />} />
                <Route path='*' element={<Err />} />
              </Routes>
            </Router>

          
              
        </div>
        
    );
}
export default App;