
import NavbarNav from "./components/Nav/NavbarNav"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Gallery from "./pages/Gallery/Gallery";
import Schedule from "./pages/Schedule/Schedule";
import GalleryPage1 from "./pages/Gallery/GalleryPage1";
import GalleryPage2 from "./pages/Gallery/GalleryPage2";

import { Route, Routes } from 'react-router-dom'
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

        <Route path="/gallery" element={<Gallery />} >
           <Route path="page1" element={<GalleryPage1 />} /> 
          <Route path="page2" element={<GalleryPage2 />} />
        </Route>
        <Route path="/schedule" element={<Schedule />} />
      </Routes>

    </>
  )
}

export default App
