
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import React from 'react'

import DefaultLayout from './layouts/Defaultlayout'
import Home from './Pages/Home/Home'
import './App.css'
import './index.css'
import News from './Pages/News/News'
import About from './Pages/About/About'

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={"/"} element={<Home />}/>
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
