import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/post" Component={Post} />
      </Routes>
    </Router>
  );
};

export default App;
