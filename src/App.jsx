import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Project from './components/project/project';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  const [currentTab, setCurrentTab] = useState('about');

  const renderTab = () => {
    switch (currentTab) {
      case 'about': 
      return <About />;
      case 'project': return <Project />;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };
  return (
    <>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
};

export default App;