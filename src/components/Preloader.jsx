import React, { useState, useEffect } from 'react';
import { 
  Code2, Terminal, Database, Cpu, Binary, Cloud,
  GitBranch, Blocks, Wifi, Shield, Lock, Server,
  Globe, Bug, Keyboard, Monitor, Network, Radio,
  Hash, FileCode, Box, Layout, Layers, Palette
} from 'lucide-react';

const Preloader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [randomText, setRandomText] = useState('');
  const [currentTask, setCurrentTask] = useState('Initializing Systems');
  
  const webDevTasks = [
    'Loading React Components',
    'Compiling TypeScript',
    'Optimizing CSS Modules',
    'Bundling Assets',
    'Configuring Web APIs',
    'Initializing State Management',
    'Loading Design System',
    'Configuring Route Handlers'
  ];

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
    const interval = setInterval(() => {
      setRandomText(Array(8).fill(0).map(() => 
        chars[Math.floor(Math.random() * chars.length)]
      ).join(''));
    }, 100);

    const taskInterval = setInterval(() => {
      const taskIndex = Math.floor((progress / 100) * webDevTasks.length);
      setCurrentTask(webDevTasks[taskIndex] || webDevTasks[webDevTasks.length - 1]);
    }, 300);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(progressInterval);
      clearInterval(taskInterval);
    };
  }, [onLoadingComplete, progress]);

  if (!loading) return null;

  const icons = [
    FileCode, Layout, Layers, Palette, // Web-specific icons
    Code2, Terminal, Database, Cpu, Binary, Cloud, GitBranch, 
    Blocks, Wifi, Shield, Lock, Server, Globe, Bug, Keyboard, 
    Monitor, Network, Radio
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[100]">
      {/* Matrix rain background - kept from original */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* ... (same as original) ... */}
      </div>

      <div className={`transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0'}`}>
        {/* Developer signature */}
        <div className="absolute font-mono text-xl transform -translate-x-1/2 top-4 left-1/2">
          <span className="text-cyan-500">{'<'}</span>
          <span className="font-bold text-green-500">Werosh Kriyanjala</span>
          <span className="text-cyan-500">{' />'}</span>
        </div>

        {/* Main content */}
        <div className="relative flex flex-col items-center">
          {/* ... (previous animations and effects remain the same) ... */}

          {/* Enhanced status display */}
          <div className="mt-8 font-mono text-lg">
            <span className="text-cyan-500">{'>'}</span>
            <span className="ml-2 text-green-500">{currentTask}</span>
            <span className="ml-2 text-cyan-500">{randomText}</span>
            <span className="ml-1 text-white animate-blink">_</span>
          </div>

          {/* Web development metrics */}
          <div className="flex gap-4 mt-4 font-mono text-sm">
            <span className="text-blue-400">
              <Hash className="inline mr-1" size={14} />
              Bundle Size: {(progress * 0.5).toFixed(1)}MB
            </span>
            <span className="text-green-400">
              <Box className="inline mr-1" size={14} />
              Modules: {Math.floor(progress * 0.3)}
            </span>
          </div>

          {/* Progress bar - enhanced from original */}
          <div className="mt-6 w-80">
            <div className="h-2 overflow-hidden bg-gray-900 border rounded-full border-cyan-900">
              <div 
                className="relative h-full transition-all duration-300 bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white animate-pulse-fast opacity-30" />
              </div>
            </div>
            <div className="flex justify-between mt-2 font-mono text-sm">
              <span className="text-cyan-500">{currentTask}</span>
              <span className="text-green-500">{progress}%</span>
            </div>
          </div>

          {/* Floating tech icons - enhanced with web dev icons */}
          <div className="flex flex-wrap justify-center max-w-lg gap-4 mt-8">
            {icons.map((Icon, index) => (
              <div 
                key={index} 
                className="p-2 transition-transform transform bg-gray-900 bg-opacity-50 rounded-lg hover:scale-110"
                style={{
                  animation: 'float 2s infinite',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Icon 
                  className="text-cyan-500" 
                  size={20}
                  style={{
                    filter: 'drop-shadow(0 0 5px #0ff)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;