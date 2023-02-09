import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from "./pages/ContactUs/ContactUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Home/>}/> {/* completed */}
        <Route path="/login" element={<Login />} /> {/* completed */}
        <Route path="/register" element={<Register/>}/> {/* add more input */}
        <Route path="/dashboard" element={<Dashboard/>}/> {/*Not started */}
        <Route path="/contact" element={<ContactUs/>}/> {/*Not started */}
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
