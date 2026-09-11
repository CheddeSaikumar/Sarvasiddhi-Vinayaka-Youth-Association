import { Heart, Users, Calendar, Award } from 'lucide-react';
import { committeeInfo } from '@/data/festivalData';

const stats = [
  { icon: Calendar, label: 'Years Celebrating', value: '15+' },
  { icon: Users, label: 'Community Members', value: '1,200+' },
  { icon: Heart, label: 'Devotees Each Year', value: '5,000+' },
  { icon: Award, label: 'Cultural Events', value: '25+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-100 rounded-full blur-3xl opacity-50 -translate-y-1/3 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/28300438/pexels-photo-28300438.jpeg?auto=compress&cs=tinysrgb&h=600&w=450"
                alt="Decorated Ganesh idol"
                className="rounded-2xl shadow-xl shadow-maroon-900/10 w-full h-64 sm:h-80 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/35591621/pexels-photo-35591621.jpeg?auto=compress&cs=tinysrgb&h=600&w=450"
                alt="Festival flowers"
                className="rounded-2xl shadow-xl shadow-maroon-900/10 w-full h-64 sm:h-80 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-maroon-800 to-maroon-950 text-white rounded-2xl px-6 py-4 shadow-2xl text-center w-56">
              <div className="font-display font-bold text-3xl text-gold-300">Since {committeeInfo.established}</div>
              <div className="text-cream-100/70 text-xs uppercase tracking-widest mt-1">Serving Our Community</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-saffron-600 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-maroon-900 leading-tight">
              A Tradition of Devotion & Togetherness
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              {committeeInfo.description}
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Every year, our committee organizes the full eleven-day festival — from the ceremonial installation to the grand visarjan procession — with daily aartis, cultural programs, community feasts, and eco-friendly initiatives that keep our traditions alive while caring for our environment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-saffron-100/60 hover:shadow-md hover:border-saffron-200 transition-all"
                >
                  <s.icon className="w-7 h-7 text-saffron-500" />
                  <div className="mt-3 font-display font-bold text-3xl text-maroon-900">{s.value}</div>
                  <div className="text-stone-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
