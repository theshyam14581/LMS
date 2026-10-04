import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import users from "../../users.json";
import Hero from "../components/Hero";
import Villen from "../components/Villen.jsx";
import "./Dashboard.css";


// import Signup from "./Signup";
// import Login from "./Login";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      {/* <Signup />
      <Login /> */}

      <Card bookData={users} />
      <Villen />

      


      <Footer />
    </div>
  );
};

export default Dashboard;