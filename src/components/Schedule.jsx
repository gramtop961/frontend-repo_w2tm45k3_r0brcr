import React from 'react';
import { Calendar } from 'lucide-react';

const races = [
  { round: 1, name: 'Bahrain Grand Prix', circuit: 'Sakhir', date: 'Mar 2', local: '18:00' },
  { round: 2, name: 'Saudi Arabian Grand Prix', circuit: 'Jeddah', date: 'Mar 9', local: '20:00' },
  { round: 3, name: 'Australian Grand Prix', circuit: 'Albert Park', date: 'Mar 24', local: '15:00' },
  { round: 4, name: 'Japanese Grand Prix', circuit: 'Suzuka', date: 'Apr 7', local: '14:00' },
  { round: 5, name: 'Chinese Grand Prix', circuit: 'Shanghai', date: 'Apr 21', local: '14:00' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-14 bg-rose-50 border-t border-red-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white"><Calendar size={18} /></span>
            Upcoming Races
          </h2>
          <a href="#" className="text-sm font-medium text-red-700 hover:text-red-800">Full calendar</a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm">
          <ul className="divide-y divide-red-100">
            {races.map((r) => (
              <li key={r.round} className="flex items-center justify-between p-4 hover:bg-rose-50/60">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-red-600 text-white grid place-items-center font-bold">{r.round}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <p className="text-sm text-gray-600">{r.circuit}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{r.date}</p>
                  <p className="text-sm text-gray-600">Local start {r.local}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-xs text-gray-500">Times are illustrative and may differ from official schedules.</p>
      </div>
    </section>
  );
}
