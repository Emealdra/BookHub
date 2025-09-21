import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import About from './pages/About'
import Browse from './pages/Browse'
import Random from './pages/Random'
import Trending from './pages/Trending'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/trending" element={<Trending />} />
          <Route path="/" element={<Browse />} />
          <Route path="/random" element={<Random />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

