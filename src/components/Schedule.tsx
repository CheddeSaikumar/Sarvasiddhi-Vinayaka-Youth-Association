import { Clock, Calendar, Star } from 'lucide-react';
import { schedule } from '@/data/festivalData';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-28 bg-gradient-to-b from-maroon-950 to-maroon-900 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-gold-300 font-semibold text-sm uppercase tracking-widest">Festival Schedule</span>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Five Days of Celebration
          </h2>
          <p className="mt-4 text-cream-100/70 text-lg">
            From the sacred installation to the grand farewell procession — every day brings a unique experience of devotion and joy.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300/10 via-gold-300/40 to-gold-300/10 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {schedule.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={event.day}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ring-4 ring-maroon-950 ${event.highlight ? 'bg-gold-300' : 'bg-saffron-400'} animate-pulse-slow`} />
                  </div>

                  {/* Content */}
                  <div className={`pl-16 sm:pl-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div
                      className={`group bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all hover:bg-white/10 ${
                        event.highlight ? 'border-gold-300/40 shadow-lg shadow-gold-300/10' : 'border-gold-300/15'
                      }`}
                    >
                      <div className={`flex items-center gap-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 text-white font-display font-bold text-sm">
                          {event.day}
                        </span>
                        {event.highlight && (
                          <span className="inline-flex items-center gap-1 text-gold-300 text-xs font-medium bg-gold-300/10 px-2 py-1 rounded-full">
                            <Star className="w-3 h-3 fill-current" />
                            Highlight
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display font-bold text-xl text-white">{event.title}</h3>
                      <div className={`mt-2 flex flex-wrap gap-3 text-sm text-cream-100/60 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                      </div>
                      <p className="mt-3 text-cream-100/70 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  {/* Spacer for other half */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
