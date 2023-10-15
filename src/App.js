import './App.css';
import Home from '../src/components/Home'
import Page1 from '../src/components/Page1'
import Page2 from '../src/components/Page2'
import Page3 from '../src/components/Page3'
import Page4 from '../src/components/Page4'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <BrowserRouter>
      <div className="bgcolor">
        <div className="link">
          <ul className="link-menu">
            <li>
              <Link to='#home'>
                Home
              </Link>
            </li>
            <li>
              <Link to='#page1'>
                page1
              </Link>
            </li>
            <li>
              <Link to='#page2'>
                page2
              </Link>
            </li>
            <li>
              <Link to='#page3'>
                page3
              </Link>
            </li>
            <li>
              <Link to='#page4'>
                page4
              </Link>
            </li>
          </ul>
        </div>

        <Home />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    </BrowserRouter>

  );
}

export default App;
