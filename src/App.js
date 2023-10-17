import './App.css';
import Home from '../src/components/Home'
import Page1 from '../src/components/Page1'
import Page2 from '../src/components/Page2'
import Page3 from '../src/components/Page3'
import Page4 from '../src/components/Page4'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';
import Page1Design from './components/Page1Design';
import pdf from './files/Seungil Choi - Resume.pdf';
function App() {
  
  return (
    <BrowserRouter>
      <div className="link">
        <ul className="link_menu">
          <li>
            <Link to='#home' style={{ textDecoration: 'none', color: "black" }}>
              To the Top
            </Link>
          </li>
          <li>
            <Link to='#page1' style={{ textDecoration: 'none', color: "black" }}>
              Profile
            </Link>
          </li>
          <li>
            <Link to='#page2' style={{ textDecoration: 'none', color: "black" }}>
              Experience
            </Link>
          </li>
          <li>
            <Link to='#page3' style={{ textDecoration: 'none', color: "black" }}>
              Applications
            </Link>
          </li>
          <li className="nav-width" >
            <Link to='#page4' style={{ textDecoration: 'none', color: "black" }}>
              Cover Letter
            </Link>
          </li>
        </ul>
      </div>
      <div>


        <Home />
        <Page1Design />



        {/* <Page1 /> */}


        {/* <Page2 />

        <Page3 />
        <Page4 /> */}
        <a href={pdf} download className="resume">Click to download my Resume</a>
      </div>
    </BrowserRouter>

  );
}

export default App;
