import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./App.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/header.css";
import "./styles/portfolio.css";
import "./styles/resume.css";
import "./styles/sidebar.css";
import CyberBackground from "./components/CyberBackground";

const AppContent = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activePage, setActivePage] = useState("about");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActivePage("about");
    else if (path === "/resume") setActivePage("resume");
    else if (path === "/portfolio") setActivePage("portfolio");
    else if (path === "/contact") setActivePage("contact");
  }, [location]);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  return (
    <div className="container">
      {/* 🔥 Gradient Background */}
      <CyberBackground />

      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isActive={sidebarActive}
        closeSidebar={closeSidebar}
        currentPage={activePage}
      />

      <div className={`about page ${activePage === "about" ? "active" : ""}`}>
        <About />
      </div>
      <div className={`resume page ${activePage === "resume" ? "active" : ""}`}>
        <Resume />
      </div>
      <div
        className={`portfolio page ${
          activePage === "portfolio" ? "active" : ""
        }`}
      >
        <Portfolio />
      </div>
      <div
        className={`contact page ${activePage === "contact" ? "active" : ""}`}
      >
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
