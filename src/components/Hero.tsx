import { useEffect, useState } from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { committeeInfo } from '@/data/festivalData';

function getRemaining(target: string) {
  const total = new Date(target).getTime() - Date.now();
  const isLive = total <= 0;
  const clamped = Math.max(0, total);
  const days = Math.floor(clamped / 86400000);
  const hours = Math.floor((clamped % 86400000) / 3600000);
  const minutes = Math.floor((clamped % 3600000) / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  return { days, hours, minutes, seconds, isLive };
}

export default function Hero() {
  const [time, setTime] = useState(getRemaining(committeeInfo.festivalStartISO));
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(committeeInfo.festivalStartISO)), 1000);
    return () => clearInterval(id);
  }, []);



  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-festive-radial">
      {/* Decorative background image */}
      <div className="absolute inset-0 opacity-20">
        {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-maroon-900" aria-hidden="true" />}
        <img
          src="https://images.pexels.com/photos/10846024/pexels-photo-10846024.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
          alt="Festival background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {/* Glow accents */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-saffron-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl animate-pulse-slow" />

      {/* Floating diya icons */}
      <Sparkles className="absolute top-32 right-[15%] w-6 h-6 text-gold-300/60 animate-float" />
      <Sparkles className="absolute bottom-40 left-[12%] w-5 h-5 text-saffron-300/50 animate-float" style={{ animationDelay: '2s' } as React.CSSProperties} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full text-center">
        <span className="inline-flex items-center gap-2 bg-gold-300/10 border border-gold-300/30 text-gold-200 px-4 py-2 rounded-full text-sm font-medium tracking-wide animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          {committeeInfo.festivalDates}
        </span>

        <h1 className="mt-6 font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ganesh Chaturthi
          <span className="block text-gradient-gold animate-shimmer mt-2">
            Celebration 2026
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-cream-100/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Join the {committeeInfo.name} for five days of devotion, culture, and community — honoring Lord Ganesha with grand traditions and joyful togetherness.
        </p>

        {/* Countdown or live message */}
        {time.isLive ? (
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-col items-center gap-3 bg-gradient-to-r from-gold-400/20 to-saffron-500/20 border border-gold-300/40 rounded-3xl px-8 py-6 backdrop-blur-sm">
              <span className="text-4xl sm:text-5xl animate-float">🪔</span>
              <p className="font-display font-bold text-3xl sm:text-4xl text-gradient-gold animate-shimmer">
                The Festival Has Begun!
              </p>
              <p className="text-cream-100/80 text-base sm:text-lg">
                Ganpati Bappa Morya! Join us at the community mandap for the celebrations.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { label: 'Days', value: time.days },
              { label: 'Hours', value: time.hours },
              { label: 'Minutes', value: time.minutes },
              { label: 'Seconds', value: time.seconds },
            ].map((u) => (
              <div
                key={u.label}
                className="bg-white/5 backdrop-blur-sm border border-gold-300/20 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 min-w-[80px] sm:min-w-[110px] hover:border-gold-300/50 transition-colors"
              >
                <div className="font-display font-bold text-3xl sm:text-5xl text-gold-300 tabular-nums">
                  {String(u.value).padStart(2, '0')}
                </div>
                <div className="text-cream-100/60 text-xs sm:text-sm uppercase tracking-widest mt-1">
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="inline-flex items-center gap-2 text-cream-100/70 text-sm">
            <Calendar className="w-4 h-4 text-gold-300" />
            5 Days of Celebration
          </span>
          <span className="inline-flex items-center gap-2 text-cream-100/70 text-sm">
            <MapPin className="w-4 h-4 text-gold-300" />
            {committeeInfo.location.split(',')[0]}
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#schedule"
            className="bg-gradient-to-r from-gold-400 to-saffron-500 text-maroon-950 font-semibold px-8 py-4 rounded-full shadow-xl shadow-saffron-500/30 hover:scale-105 transition-transform"
          >
            View Festival Schedule
          </a>
          <a
            href="#gallery"
            className="border border-gold-300/40 text-gold-200 font-medium px-8 py-4 rounded-full hover:bg-gold-300/10 transition-colors"
          >
            Explore Photo Gallery
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,60 C360,100 720,20 1080,50 C1260,65 1380,55 1440,50 L1440,100 L0,100 Z" fill="#fdfbf6" />
        </svg>
      </div>
    </section>
  );
}
