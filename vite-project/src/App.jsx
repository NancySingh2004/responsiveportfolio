//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero/Hero';
import Project from './sections/Project/project';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';

function App() {
  //const [count, setCount] = useState(0)
   
  return (
    
    <>
    <Hero/>
    <Project/>
    <Skills/>
    <Contact />
    
    </>
  );
}

export default App
