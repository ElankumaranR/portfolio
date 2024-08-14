import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Skill from './components/skill';
import Project from './components/project';
import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
library.add(fas,faFacebook,faGithub,faInstagram,faLinkedin)
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setIsContentVisible(true), 300);
      }, 2000); 
  }, []);


  return (
    <div >
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`App ${isContentVisible ? 'content-visible' : ''}`}>
          <Header />
          <Home />
          <About />
          <Skill />
          <Project />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
