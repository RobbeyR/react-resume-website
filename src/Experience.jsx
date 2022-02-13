import React from 'react';
import "./experience.css";

const Experience = () => {
  return <div className="page" id="experience">
  <div className="page-left">
    <div className="e-left-wrapper">
      <h1 className="page-left-title">Professional Experience</h1>
    </div>
  </div>
  <div className="page-right">
    <div className="page-right-info">
      <h2 className="page-right-title">LEAD Technologies Inc.</h2>
      <h3 className="e-right-experience"><i>Developer Support Engineer</i></h3>
      <ul>
        <li>Provide pre-sale and post-sale technical support to customers via phone, chat, and email</li>
        <li>Reproduce and report bugs found, in our SDK and applications, to the engineering department</li>
        <li>Write sample code for customers to provide a proof of concept based on the customers' objective</li>
        <li>System testing applications made with our SDK</li>
        <li>Project development using our SDK</li>
      </ul>
      <h2 className="page-right-title">University of North Carolina at Charlotte</h2>
      <h3 className="e-right-experience"><i>Resident Advisor</i></h3>
      <ul>
        <li>Mentor freshman residents</li>
        <li>Communicate with other staff members through training sessions, office hours, and programs</li>
        <li>Interviewing potential RA candidates</li>
        <li>Give presentations for RA workshops</li>
      </ul>
      <h2 className="page-right-title">Heartland Commerce</h2>
      <h3 className="e-right-experience"><i>Software Testing Intern</i></h3>
      <ul>
        <li>Assisted the IT department with a prototype application</li>
        <li>Experience working with a team on testing applications</li>
      </ul>
      <h2 className="page-right-title">Flying Fish Market and Grill</h2>
      <h3 className="e-right-experience"><i>Busser, Runner, Server</i></h3>
      <ul>
        <li>Customer service experience</li>
        <li>Adaptable with multiple positions</li>
      </ul>
    </div>
  </div>
</div>;
};

export default Experience;
