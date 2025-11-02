import React from 'react';
import { Home, Newspaper, Calendar, Trophy } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-red-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-red-600 to-rose-600 grid place-items-center text-white font-bold">
            SF
          </div>
          <span className="font-semibold tracking-tight text-red-700">Ferrari F1 Fan Hub</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#home" className="inline-flex items-center gap-2 hover:text-red-600 transition-colors">
            <Home size={18} /> Home
          </a>
          <a href="#news" className="inline-flex items-center gap-2 hover:text-red-600 transition-colors">
            <Newspaper size={18} /> News
          </a>
          <a href="#schedule" className="inline-flex items-center gap-2 hover:text-red-600 transition-colors">
            <Calendar size={18} /> Schedule
          </a>
          <a href="#championship" className="inline-flex items-center gap-2 hover:text-red-600 transition-colors">
            <Trophy size={18} /> Legacy
          </a>
        </nav>
        <a
          href="#news"
          className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-600 text-white text-sm shadow hover:bg-red-700"
        >
          <Newspaper size={16} /> Updates
        </a>
      </div>
    </header>
  );
}
