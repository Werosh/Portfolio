import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Back from "./components/Back";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./components/ThemeContext"; // Import ThemeContext
import Preloader from "./components/Preloader";
import CyberMouseTracker from "./components/CyberMouseTracker";

const App = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      {" "}
      {/* Apply the theme */}
      <Preloader />
      <CyberMouseTracker/>
      <Back />
      <Navbar />
      {/* <ThemeButton /> */}
      <main className="text-black transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
