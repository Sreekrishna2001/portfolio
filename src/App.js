import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education'
import Experience from './Experience';
import Contact from './Contact';
import Header from './Header';

function App() {
  return (
    <>
    <Header/>
    <Intro />
    <Skills />
    <Projects />
    <Education/>
    <Experience/>
    <Contact/>
    </>
  );
}

export default App;
