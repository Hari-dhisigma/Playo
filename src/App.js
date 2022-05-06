import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Venue from "./components/Venue";
import Profile from "./components/Profile";
import Start from "./components/Start";
import Offers from "./components/Offers";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Venue />} />
            {/* <Route path="/" element={<Profile />} /> */}
            {/* <Route path="/" element={<Start />} /> */}
            {/* <Route path="/" element={<Offers />} />  */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
