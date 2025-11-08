
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import DefaultLayout from './layouts/Defaultlayout'
import Home from './Pages/Home/index'
import './App.css'
import './index.css'
import News from './Pages/News/index'
import About from './Pages/About/index'

function App() {
  return (
    <Router basename={import.meta.env.PROD ? "/f8-fullstack-baitapday33/" : "/"}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
