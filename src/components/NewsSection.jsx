import React from 'react';
import { Newspaper } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Ferrari unveils aero tweaks ahead of high-downforce weekend",
    excerpt:
      "The team brings a refined rear wing and floor updates targeted at tighter, slower sectors — aiming for better traction and tire management.",
    image:
      "https://images.unsplash.com/photo-1512446733611-9099a758e0f5?q=80&w=1600&auto=format&fit=crop",
    tag: "Tech",
    date: "Today",
  },
  {
    id: 2,
    title: "Leclerc targets podium after strong long-run pace in FP2",
    excerpt:
      "Consistency on used softs encouraged the garage as setup refinements overnight aim to unlock more rotation through mid-speed corners.",
    image:
      "https://images.unsplash.com/photo-1518445114029-64b6b54d7913?q=80&w=1600&auto=format&fit=crop",
    tag: "Paddock",
    date: "2h ago",
  },
  {
    id: 3,
    title: "Strategy focus: Two-stop likely as temperatures climb",
    excerpt:
      "Higher track temps point to degradation challenges. Ferrari could keep options open with offset stints and undercut windows.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    tag: "Analysis",
    date: "5h ago",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white"><Newspaper size={18} /></span>
            Latest News
          </h2>
          <a href="#" className="text-sm font-medium text-red-700 hover:text-red-800">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden border border-red-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-red-700 font-medium">
                  <span className="px-2 py-0.5 rounded bg-red-50 border border-red-100">{item.tag}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-snug">
                  <a href="#" className="hover:text-red-700">{item.title}</a>
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="text-sm font-medium text-red-700 hover:text-red-800">Read more →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
