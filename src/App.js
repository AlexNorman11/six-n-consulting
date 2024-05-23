import React from 'react';

import { About, Collabs, Contact, Header, Project } from "./container";
import { NavBar } from './components';
import './App.css';

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient_bg">
        <NavBar />
        <Header />
      </div>
      <About />
      <Project />
      <Collabs />
      <Contact />
    </div>
  )
}

export default App
