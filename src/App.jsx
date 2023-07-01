
import NavbarNav from "./components/Nav/NavbarNav"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Gallery from "./pages/Gallery/Gallery";
import GalleryPage1 from "./pages/Gallery/GalleryPage1";
import GalleryPage2 from "./pages/Gallery/GalleryPage2";

import Schedule from "./pages/Schedule/Schedule";
import Monday from "./pages/Schedule/Monday";
import Tuesday from "./pages/Schedule/Tuesday";
import Wednesday from "./pages/Schedule/Wednesday";
import Thursday from "./pages/Schedule/Thursday";
import Friday from "./pages/Schedule/Friday";
import Saturday from "./pages/Schedule/Saturday";
import Sunday from "./pages/Schedule/Sunday";

import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <NavbarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} >
          <Route path="page1" element={<GalleryPage1 />} />
          <Route path="page2" element={<GalleryPage2 />} />
        </Route>

        <Route path="/schedule" element={<Schedule />}>
          <Route path="monday" element={<Monday />} />
          <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} />
          <Route path="saturday" element={<Saturday />} />
          <Route path="sunday" element={<Sunday />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
