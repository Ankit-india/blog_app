import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Dashboard from "./componenets/Dashboard";
import Projects from "./componenets/Projects";
import SignIn from "./componenets/SignIn";
import SignUp from "./componenets/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
