import React from 'react';
import "./home.css";
import RobbeyImages from "./Images/robbeyface.jpg";

const Home = () => {
  return <div>
      <div className="page" id="home">
        <div className="page-left">
          <div className="h-intro">
            <img id="profilePic" src={RobbeyImages} alt="Roberto Rodriguez"/> 
            <h1 className="page-left-title" id="h-left-title">Entry Level Software / Web Developer</h1>        
          </div>
        </div>
        <div className="page-right">
          <div className="page-right-info" id='h-right-info'>
            <h3>Hi, my name is Roberto Rodriguez, but you can call me <font color="#f77062"><b>Robbey</b></font>.</h3><br/>
            I am finding my niche in the software/web development world, while looking to acquire more experience and ultimately a career.
            Most of my experience is with Java and C#, although I am currently enjoying front end development.<br/><br/>
            When I am not coding, you can find me at the gym, hiking, or playing competitive video games.
          </div>
        </div>
    </div>
  </div>;
};

export default Home;
