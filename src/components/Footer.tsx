import { Heart } from 'lucide-react';
import { committeeInfo } from '@/data/festivalData';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-cream-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-300 to-saffron-500 flex items-center justify-center text-maroon-950 font-display font-bold text-lg">
                ग
              </span>
              <div>
                <div className="font-display font-bold text-lg text-white">{committeeInfo.name}</div>
                <div className="text-gold-300 text-xs tracking-widest uppercase">{committeeInfo.tagline}</div>
              </div>
            </div>
            <p className="mt-4 text-cream-100/60 text-sm leading-relaxed max-w-sm">
              Celebrating Ganesh Chaturthi with devotion and community since {committeeInfo.established}. Join us in keeping our traditions alive.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-white text-lg">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream-100/70 hover:text-gold-300 transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-lg">Reach Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream-100/70">
              <li>{committeeInfo.contact.address}</li>
              <li>{committeeInfo.contact.phone}</li>
              <li>{committeeInfo.contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold-300/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream-100/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {committeeInfo.name}. All rights reserved.
          </p>
          <p className="text-cream-100/50 text-sm inline-flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-saffron-400 fill-current" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
