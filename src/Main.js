import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
 
class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <Header />
            <Content />
            <Footer />
        </BrowserRouter>
    );
  }
}
 
export default Main;