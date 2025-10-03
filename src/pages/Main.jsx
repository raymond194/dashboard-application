import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Profile from "../routes/Profile";
import Home1 from "../routes/Home1";
import Users1 from "../routes/Users1";

const Main = () => {
  return (
    <div className="flex-1 bg-gray-800 border-t border-gray-500 h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Users" element={<Users1 />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Main;
