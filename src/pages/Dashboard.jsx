import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import users from "../../users.json";
import Hero from "../components/Hero";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero/>

      <Card bookData={users} />

      <Footer />
    </div>
  );
};

export default Dashboard;