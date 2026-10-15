import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Markets from './pages/Markets'
import Calculator from './pages/Calculator'
import Education from './pages/Education'
import Packages from './pages/Packages'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="markets" element={<Markets />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="education" element={<Education />} />
        <Route path="packages" element={<Packages />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
