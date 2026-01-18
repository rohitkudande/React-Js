import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavScroll from "./NavScroll";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Service from "./Service";
import Api from "./Api";
export default function App() {

  return (
    <>
       <Router>
      <NavScroll /> {/* Always render Navbar component */}
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/api" element={<Api />} />
      </Routes>
    </Router>
    </>
  )
}

