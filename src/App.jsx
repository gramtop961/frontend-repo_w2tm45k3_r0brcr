import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <Schedule />
      </main>
      <footer className="py-8 border-t border-red-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ferrari F1 Fan Hub — Built for the Tifosi.</p>
          <div className="text-sm text-gray-600">
            Unofficial fan site. Not affiliated with Scuderia Ferrari or Formula 1.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
