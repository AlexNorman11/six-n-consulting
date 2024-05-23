import React from 'react';
import './project.css';
import Exchange from '/Users/alex/six-consulting-app/src/assets/Projects/Exchange.webp';
import Holborn from '/Users/alex/six-consulting-app/src/assets/Projects/holgate.webp';
import settle from '/Users/alex/six-consulting-app/src/assets/Projects/settle.webp';
import raines from '/Users/alex/six-consulting-app/src/assets/Projects/raines.webp';



const Project = () => {
  return (

    <div className="sixn__projects__container" id = "projects">
     
      <h1 className = "project__title"> Recent Projects </h1>
     
      <div className = "project__one">
        <div className = "project__one__img">
          <img src = {Exchange} alt = "projectOne" />
        </div>
        <div className = "text__box__one">
          <h2>One Exchange Square, Liverpool St Station, London</h2>
          <p>ASPRO CEM - Redevelopment and extension of One Exchange Square office accommodation that adjoins & over sails Network Rail Liverpool Street Station.  </p>
        </div>
      </div>

      <div className = "project__two">
        <div className = "text__box__two">
          <h2>Holborn Viaduct, Farringdon Street, London </h2>
          <p>ASPRO CEM - Demolition of existing properties and construction of a new high-rise office accommodation building that interface with Network Rail underground railway, Thameslink. </p>
        </div>
        <div className = "project__two__img">
          <img src = {Holborn} alt = "projectTwo" />
        </div>
      </div>

      <div className = "project__three">
      <div className = "project__three__img">
        <img src = {settle} alt = "projectThree" />
      </div>
        <div className = "text__box__three">
          <h2>Story Contracting – Northwest & Central Route, Network Rail Civils & Structures Framework </h2>
          <p>CEM – Providing Engineering Management for Tier 1 Principal Contractor across a portfolio of civil engineering & structure, maintenance, and enhancement schemes. </p>
        </div>
      </div>

      <div className = "project__four">
        <div className = "text__box__four">
          <h2>Raines Court, Stoke Newington, London </h2>
          <p>ASPRO CEM – Recladding of private accommodation building that requires interface with Network Rail infrastructure to facilitate safe access to complete the works.</p>
        </div>
        <div className = "project__four__img">
          <img src = {raines} alt = "projectFour" />
        </div>
      </div>

    </div>
  )
}

export default Project