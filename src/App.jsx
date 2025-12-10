import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <StatsSection />
        <SolutionSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
