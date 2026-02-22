import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import ProblemStatement from './components/ProblemStatement';
import Hero from './components/Hero';
import ClutchIntelligence from './components/ClutchIntelligence';
import BentoGrid from './components/BentoGrid';
import ActivityFeed from './components/ActivityFeed';
import WaitlistSignal from './components/WaitlistSignal';
import LaunchAnnouncement from './components/LaunchAnnouncement';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      <div
        className={`transition-opacity duration-500 ${
          showSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />

        {/* 1. Hook — the problem they recognize */}
        <ProblemStatement />

        {/* 2. Solution — meet Clutch, sign up, see the demo */}
        <Hero />

        {/* 3. Depth — how Clutch AI actually works */}
        <ClutchIntelligence />

        {/* 4. Capabilities — everything Clutch can do */}
        <BentoGrid />

        {/* 5. Proof of life — live activity stream */}
        <ActivityFeed />

        {/* 6. Social credibility — honest early community signal */}
        <WaitlistSignal />

        {/* 7. Timing + exclusivity */}
        <LaunchAnnouncement />

        {/* 8. Final conversion */}
        <FinalCTA />

        <Footer />
      </div>
    </>
  );
}

export default App;
