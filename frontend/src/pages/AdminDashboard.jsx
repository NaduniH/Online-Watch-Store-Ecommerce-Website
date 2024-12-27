import React from "react";
import AdminNavbar from "../components/Navbar/AdminNavbar.jsx";
import adminImg from "../assets/images/Admin1.jpg";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      {/* Navbar */}
      <AdminNavbar />

      {/* Admin Dashboard Content */}
      <div className="flex items-center justify-center h-full text-blue-900 mt-5">
        <h1 className="text-4xl font-bold">Welcome to Admin Dashboard</h1>
      </div>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat mt-8"
        style={{ backgroundImage: `url(${adminImg})` }}
      ></div>
    </>
  );
}

export default AdminDashboard;
