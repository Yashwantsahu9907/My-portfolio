import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/common/Navbar'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Skill from './pages/public/Skill'
import Project from './pages/public/Project'
import Contact from './pages/public/Contact'




function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
       
        <Route path='/about' element={<About/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
       
 



      </Routes>
    </BrowserRouter>
  )
}

export default App
