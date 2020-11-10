import React, { Component } from "react";
import { Home, About, Experience, Projects, Contact } from './section';
 
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