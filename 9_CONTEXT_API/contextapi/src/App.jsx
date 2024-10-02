import './App.css'

// 1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar'


// pages
import Home from './pages/Home'
import About from './pages/About'
import Other  from './pages/Other'


function App() {

  return (
      <div>
       <h1>Context API</h1>
       <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/other' element={<Other />} />
          </Routes>


       </BrowserRouter>
      </div>
  )
}

export default App
