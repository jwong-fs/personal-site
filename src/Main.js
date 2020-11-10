import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <ul className="header">
                <li><HashLink to="/">Home</HashLink></li>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#experience">Experience</HashLink></li>
                <li><HashLink to="/#projects">Projects</HashLink></li>
                <li><HashLink to="/#contact">Contact</HashLink></li>
            </ul>
            <div className="content">
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;