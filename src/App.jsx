import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Homepage from "./pages/Home";
import Contact from "./pages/Contact";
import Test from "./components/Test";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="r">
      <Router>

<AuthContextProvider>

        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/test" element={<Test />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

</AuthContextProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
