import React from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/nav';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Project from './components/project/project';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
};

export default App;