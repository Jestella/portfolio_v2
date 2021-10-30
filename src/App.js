import React from "react";
import { Fragment } from "react";

import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import FixedItem from "./components/fixed-item/fixed-item.component";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <FixedItem />
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
