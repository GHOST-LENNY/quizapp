import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Startpage from "./pages/Home/Startpage";
import Contact from "./pages/Contact/Contact";
import Test from "./components/Test";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Startpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
