import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Projects';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      
    </div>
  );
};

export default App;
