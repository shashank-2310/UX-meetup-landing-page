import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Event from "./Components/Event";
import Schedule from "./Components/Schedule";
import RegisterForm from "./Components/RegisterForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-brown p-3 mxs:p-2 h-auto w-full">
      <div className="bg-sepia h-auto w-full">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Event />
          <Schedule />
          <RegisterForm />
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
