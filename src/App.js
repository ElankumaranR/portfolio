import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Skill from './components/skill';
import Project from './components/project';
library.add(fas,faFacebook,faGithub,faInstagram,faLinkedin)
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
