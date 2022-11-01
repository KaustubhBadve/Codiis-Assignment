import React from "react";
import { Route, Routes } from "react-router-dom";
import SubscribeCombine from "../Components/SubscribeCombine";
import Admin from "../Pages/Admin";
import AdminVideos from "../Pages/AdminVideos";
import Customer from "../Pages/Customer";
import Login from "../Pages/Login";
import Otp from "../Pages/Otp";
import Signup from "../Pages/Signup";

const Mainrouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/customer" element={<Customer/>} />
      <Route path="/checkSubscription" element={<SubscribeCombine/>} />
      <Route path="/video" element={<AdminVideos/>} />
      <Route path="/otp" element={<Otp/>} />
    </Routes>
  );
};

export default Mainrouting;
