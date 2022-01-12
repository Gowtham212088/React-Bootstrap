import "./App.css";
import Navbars from "./component/inc/Navbar";
import Home from "./component/pages/Home";
import Aboutus from "./component/pages/About";
import Contactus from "./component/pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/inc/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/Home" element={<Home />} />

          <Route path="/About" element={<Aboutus />} />

          <Route path="/Contact" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
