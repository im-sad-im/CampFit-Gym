
import NavbarNav from "./components/Nav/NavbarNav"
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavbarNav />
      <Routes>
            <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
