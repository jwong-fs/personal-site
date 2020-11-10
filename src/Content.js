import React, { Component } from 'react';
import Home from './section/Home';
import About from './section/About';
import Experience from './section/Experience';
import Projects from './section/Projects';
import Contact from './section/Contact';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Content;
