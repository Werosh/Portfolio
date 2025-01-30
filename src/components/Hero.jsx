import React, { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { CiCircleChevDown } from "react-icons/ci";


const ModernHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textToType = [
    { text: "Werosh Kriyanjala", color: "from-violet-500 to-indigo-500" },
    { text: "Software Engineer", color: "from-cyan-500 to-blue-500" },
    { text: "Frontend Developer", color: "from-fuchsia-500 to-pink-500" },
    { text: "Content Creator", color: "from-amber-500 to-orange-500" }
  ];

  useEffect(() => {
    let timeout;
    const currentTextObj = textToType[currentTextIndex];
    const currentText = currentTextObj.text;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textToType.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting]);

  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl 
          animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl 
          animate-pulse bottom-[-100px] right-[-100px]" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl 
          animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-screen px-6">
        <div className="text-center">
          {/* Greeting */}
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm">
            <span className="text-gray-300">Welcome to my portfolio</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-medium leading-tight md:text-7xl lg:text-8xl">
            Hi, I'm{" "}
            <span className="relative">
              <span className={`bg-gradient-to-r ${textToType[currentTextIndex].color} bg-clip-text text-transparent font-bold`}>
                {displayedText}
              </span>
              <span className="absolute -right-[2px] top-[0.15em] h-[0.9em] w-[2px] bg-current animate-pulse" />
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-300/80">
            Passionate about crafting elegant digital experiences. Based in Kurunegala, Sri Lanka, 
            I transform creative ideas into beautiful, functional realities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105"
            >
              View Projects
              <CiCircleChevDown  size={16} />
            </a>
            <a target="_blank"
              href="https://github.com/Werosh"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium transition-all border rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border-white/10 hover:scale-105"
            >
              <Github size={16} />
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ModernHero;