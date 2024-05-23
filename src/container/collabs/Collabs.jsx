import React from 'react';
import './collabs.css';
import story from '/Users/alex/six-consulting-app/src/assets/logos/story.webp';
import bam from '/Users/alex/six-consulting-app/src/assets/logos/bam.webp';
import consult from '/Users/alex/six-consulting-app/src/assets/logos/consult.webp';
import mthree from '/Users/alex/six-consulting-app/src/assets/logos/m3.webp';
import network from '/Users/alex/six-consulting-app/src/assets/logos/network.webp';
import richter from '/Users/alex/six-consulting-app/src/assets/logos/richter.webp';
import scotrail from '/Users/alex/six-consulting-app/src/assets/logos/scotrail.webp';


const Collabs = () => {
  return (
    <div className = "sixn__collabs__container">
      <h1 className = "collab-title"> Collaborators</h1>
      <p className ="collab__info">Organizations we have partnered with to deliver successful projects.</p>

      <div class="list">
          <a href="https://www.storycontracting.com/rail/"><img src={story} alt="story" /></a>
          <a href="https://www.bamnuttall.co.uk/"><img src={bam} alt="bam" /></a>
          <a href="https://consultinternational.co.uk/"><img src={consult} alt="consult" /></a>
          <a href="https://www.m3c.co.uk/"><img src={mthree} alt="mthree" /></a>
          <a href="https://www.networkrail.co.uk/"><img src={network} alt="network" /></a>
          <a href="https://www.richter.global/"><img src={richter} alt="richter" /></a>
          <a href="https://www.scotrail.co.uk/"><img src={scotrail} alt="scotrail" /></a>
      </div>
    </div>
  )
}

export default Collabs