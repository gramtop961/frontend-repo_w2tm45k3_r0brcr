import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-red-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              For the Tifosi: Your Ferrari F1 Home
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Follow race weekends, catch the latest team news, and relive iconic moments — all in one clean, fast hub crafted for Ferrari Formula 1 fans.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#news"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-white font-medium shadow hover:bg-red-700 transition-colors"
              >
                Read Latest News
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-md border border-red-300 px-5 py-2.5 text-red-700 font-medium bg-white/70 backdrop-blur hover:bg-white"
              >
                Upcoming Races
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-white shadow-sm p-4">
                <div className="text-2xl font-bold text-gray-900">16</div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Constructors' Titles</div>
              </div>
              <div className="rounded-lg bg-white shadow-sm p-4">
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Drivers' Titles</div>
              </div>
              <div className="rounded-lg bg-white shadow-sm p-4">
                <div className="text-2xl font-bold text-gray-900">240+</div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Grand Prix Wins</div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-red-200">
              <img
                src="https://images.unsplash.com/photo-1518556972432-3d98783b6313?q=80&w=1600&auto=format&fit=crop"
                alt="Ferrari F1 car on track"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-rose-500/20" />
            </div>
            <p className="mt-3 text-xs text-gray-500 text-right">Photo: Unsplash</p>
          </div>
        </div>
      </div>
    </section>
  );
}
