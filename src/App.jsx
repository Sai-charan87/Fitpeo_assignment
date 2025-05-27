import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}

export default App;
