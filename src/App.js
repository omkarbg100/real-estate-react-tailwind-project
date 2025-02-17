import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/projects";
import WorkForce from "./Components/WorkForce";

import logo from "./assets/logo.svg";
import headerImg from "./assets/header_img.png";


import MyProjectsSlider from "./Components/MyProjectsSlider";

function App() {
  const [showComponent, setShowComponent] = useState(<Home />);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <div id="Home" className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${headerImg})` }} >
        <nav className="m-0 border-spacing-4 h-16 flex flex-wrap justify-between items-center px-4  lg:px-12">
          {/* Left Section */}
          <div className="font-sans text-center p-1 cursor-pointer">
            <div className="px-3 cursor-pointer mx-12 rounded-md">
              <img src={logo}></img>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="font-sans text-center p-3 hidden lg:flex">
            <a
              onClick={() => setShowComponent(<Home />)}
              className="px-3 cursor-pointer mx-8 rounded-md"
              href="#Home"
            >
              Home
            </a>
            <a href="#About"
              onClick={() => setShowComponent(<About />)}
              className="px-3 cursor-pointer mx-8 rounded-md"
            >
              About
            </a>
            <a
              onClick={() => setShowComponent(<Contact />)}
              className="px-3 cursor-pointer mx-8 rounded-md"
              href="#Contact"
            >
              Contact
            </a>
            <a
              href="#Projects"
              onClick={() => setShowComponent(<projects />)}
              className="px-3 cursor-pointer mx-8 rounded-md"
            >
              projects
            </a>
          </div>

          {/* Mobile Dropdown Navigation */}
          <div className="font-sans text-center p-3 lg:hidden">
            <button
              className="bg-violet-500 px-4 py-2 rounded-md hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
              onClick={toggleDropdown}
            >
              Menu
            </button>
            {/* Dropdown Content */}
            {dropdownVisible && (
              <div className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-md flex flex-col">
                <a
                  onClick={() => {
                    setShowComponent(<Contact />);
                    toggleDropdown();
                  }}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  href="#Home"
                >
                  Home
                </a>
                <a
                  onClick={() => {
                    setShowComponent(<Contact />);
                    toggleDropdown();
                  }}
                  href="#About"
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  About
                </a>
                <a
                  onClick={() => {
                    setShowComponent(<Contact />);
                    toggleDropdown();
                  }}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  href="#Contact"
                >
                  Contact
                </a>
                <a
                  href="#Projects"
                  onClick={() => setShowComponent(<Projects />)}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  projects
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <Home />
      </div>
      <About />
      <Projects />
      <WorkForce/>
      <Contact />
    </div>
  );
}

export default App;
