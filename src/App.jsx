
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Education from './pages/Education.jsx';
// import Experience from './pages/Experience.jsx';
// import Project from './pages/Project.jsx';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/projects" element={<Project />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import react from 'react'
import './App.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import Experience from './pages/Experience.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/resume.jsx'

function App() {


  return (
    <>
    <Home/>
    <About/>
    <Project/>
    <Education/>
    <Resume/>
    <Experience/>
    <Contact />
  
    </>
  )
}

export default App
