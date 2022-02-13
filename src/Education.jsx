import React from 'react'
import "./education.css";

const About = () => {
  return (
    <div>
      <div className="page" id="education">
        <div className="page-left">
            <div className="ed-left-wrapper">
                  <h1 className="page-left-title">Education</h1>
            </div>
        </div>
        <div className="page-right">
          <div className="page-right-info">
            <div className="ed-right-education">
              <h1 className="page-right-title">University of North Carolina at Charlotte</h1>
              <div className="ed-right-education-info">
                
                <h2><i>Bachelor of Science of Computer Science</i></h2>
                <h3>Minor in Mathematics</h3>
              </div>
            </div>
            <div className="ed-right-skills">
              <h1 className="page-right-title">Technical Skills</h1>
              <ul id="ed-right-list">
                <li>Java<br/>
                  <progress value="70" max="100"/>
                </li>
                <li>C#<br/>
                  <progress value="70" max="100"/>
                </li>
                <li>HTML<br/>
                  <progress value="30" max="100"/>
                </li>
                <li>CSS<br/>
                  <progress value="30" max="100"/>
                </li>
                <li>JavaScript<br/>
                  <progress value="20" max="100"/>
                </li>
                <li>SQL<br/>
                  <progress value="50" max="100"/>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default About
