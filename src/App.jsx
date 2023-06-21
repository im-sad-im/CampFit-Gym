
import NavbarNav from "./components/Nav/NavbarNav"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Gallery from "./pages/Gallery";
import Community from "./pages/Community";

import { Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  return (
    <>
      <NavbarNav />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/community" element={<Community />} />
      </Routes>

    </>
  )
}

export default App
