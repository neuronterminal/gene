import React from 'react';
import { HeroSection } from './components/HeroSection';
import { Features } from './components/Features';
import { Visualization } from './components/Visualization';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <Features />
      <Visualization />
    </div>
  );
}

export default App;