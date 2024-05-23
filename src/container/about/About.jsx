import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="sixn__about__container" id="about">
      <h1 className="sub-title">About Us</h1>

      <div className="section">
        <div className="para">
        <h2>Services</h2>
          <p>
            6N Consulting specializes in providing rail and civil engineering expertise for design and construction projects across the UK.
          </p>
          <p>
            With over 15 years of experience in the rail industry and degree qualifications in Civil Engineering, we offer specialized resources to support various project needs.
          </p>
          <p>
            We provide technical services, advice, and support to clients undertaking rail construction works, whether directly for Network Rail or third-party projects with railway interfaces.
          </p>
          <p>
            Our expertise includes fulfilling roles such as Contractor's Responsible Engineer (CRE) and Contractor's Engineering Manager (CEM), ensuring compliance with Network Rail standards for both permanent and temporary works.
          </p>
        </div>
      </div>

      <div className="section">
      
        <div className="para">
          <p className="Aspro_head"><strong>ASPRO & BAPA Works</strong></p>
          <p>
            We have extensive experience in managing works requiring Network Rail asset protection engagement and approvals.
          </p>
          <ul className="can-do-list">
            <li>Your proposed development works and the requirements for Network Rail approval.</li>
            <li>Coordinating Basic Asset Protection (BAPA) contracts with Network Rail.</li>
            <li>Engaging with Network Rail’s asset protection team and managing development and approval processes.</li>
            <li>Advising on program timescales, planning, and design development.</li>
            <li>Fulfilling roles such as ASPRO CEM & CRE to ensure compliance with Network Rail standards.</li>
            <li>Providing constructability advice, safe methods of working, and hazard identification.</li>
            <li>Supporting safe onsite work delivery and managing interfaces.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;