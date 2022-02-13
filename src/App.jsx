import React from 'react';
import "./App.css";
import './navbar.css';
import Experience from './Experience';
import Home from './Home';
import Education from './Education';

const App = () => {
  return <div>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" id="navbar-name">Roberto Rodriguez</a>
                <p className='navbar-info'><i class='bx bxs-phone bx-md'></i>(336) 596-8629</p>
                <p className='navbar-info'><i class='bx bxs-envelope bx-md'></i>robbey.v.rodriguez@gmail.com</p>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="#home" className="navbar-links">Home</a>
                    </li>

                    <li className="navbar-item">
                        <a href="#education" className="navbar-links">Education</a>
                    </li>

                    <li className="navbar-item">
                        <a href="#experience" className="navbar-links">Experience</a>
                    </li>
                    
                    <li className="navbar-btn">
                        <a href="https://github.com/RobbeyR" target="_blank" rel='noreferrer' className="button"><i className='bx bxl-github bx-lg'></i></a>
                    </li>

                    <li className="navbar-btn">
                        <a href="https://www.linkedin.com/in/roberto-rodriguez-bab14b158" target="_blank" rel='noreferrer' className="button"><i className='bx bxl-linkedin-square bx-lg'></i></a>
                    </li>
                </ul>
            </div>
        </nav>
        <Home/>
        <Education/>
        <Experience/>
      </div>;
};

export default App;
