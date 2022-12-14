import React from 'react';
import Page from './Page';
import { Routes, Route, NavLink as Link } from 'react-router-dom';
import image from './smiley-flower.png';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Technologies from './Technologies';
import Navbar from './Navbar';

import { useMediaQuery } from 'react-responsive'


function useIsMobile() {
  const isMobile = useMediaQuery({ query: '(max-width: 560px)' });
  return isMobile
}

function App() {
  const isMobile = useIsMobile()

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {(isMobile) ?
        <div className="nav-mobile" style={{textAlign:"center"}} > 
           <img src={image} className="App-logo" alt="logo" />
        <Navbar />
        </div> :
        <nav>
          <ul>
            <li>
              <img src={image} className="App-logo" alt="logo" />
            </li>
            <li>
              <Link to="/" activeClassName="active" end>Home</Link>
            </li>
            <li>
              <Link to="aboutme" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="experience" activeClassName="active">Experience</Link>
            </li>
            <li>
              <Link to="technologies" activeClassName="active">Technologies</Link>
            </li>
            <li>
              <Link to="contact" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </nav>
      }

      <div className='routes'>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='aboutme' element={<About />} />
          <Route path='experience' element={<Experience />} />
          <Route path='technologies' element={<Technologies />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
      <footer>
        Celina Cywinska @ 2022
      </footer>
    </div>

  )
}

export default App;
