import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-brown p-3 mxs:p-2 h-full w-full">
      <div className="bg-sepia h-full w-full">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
