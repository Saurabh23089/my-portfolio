import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toppart from './components/toppart';
import Intro from './components/intro';
import About from './components/aboutme';
import ProjectList from './components/projects';
import Contact from './components/contactme';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className=''>
      <Toppart/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
     </div>
  )
}

export default App
