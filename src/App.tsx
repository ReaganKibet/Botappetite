import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitsSection } from './components/BenefitsSection';
import { IntegrationSection } from './components/IntegrationSection';
import { FutureSection } from './components/FutureSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <IntegrationSection />
      <FutureSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;