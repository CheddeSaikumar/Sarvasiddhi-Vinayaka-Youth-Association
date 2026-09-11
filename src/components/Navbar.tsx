import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-maroon-950/95 backdrop-blur-md shadow-lg shadow-black/30 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3 group">
          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gold-300 to-saffron-500 flex-shrink-0 flex items-center justify-center text-maroon-950 font-display font-bold text-lg shadow-lg shadow-saffron-500/30 group-hover:scale-110 transition-transform">
            ग
          </span>
          <span className="min-w-0 font-display text-white text-sm sm:text-xl font-bold leading-tight">
            <span className="sm:hidden">Sarvasiddhi Vinayaka</span>
            <span className="hidden sm:inline">Sarvasiddhi Vinayaka Youth Association</span>
            <span className="block text-gold-300 text-xs font-sans font-normal tracking-widest uppercase">
              Committee
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream-100/90 hover:text-gold-300 transition-colors text-sm font-medium tracking-wide relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-300 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#donate"
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-saffron-500 text-maroon-950 font-semibold px-5 py-2.5 rounded-full text-sm shadow-lg shadow-saffron-500/30 hover:shadow-saffron-500/50 hover:scale-105 transition-all"
        >
          <Heart className="w-4 h-4 fill-current" />
          Donate Now
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-maroon-950/98 backdrop-blur-md mx-4 mt-3 rounded-2xl border border-gold-300/20 p-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="block px-4 py-3 rounded-xl text-cream-100 hover:bg-maroon-800/50 hover:text-gold-300 transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donate"
                onClick={handleClick}
                className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-saffron-500 text-maroon-950 font-semibold px-5 py-3 rounded-xl text-sm w-full justify-center"
              >
                <Heart className="w-4 h-4 fill-current" />
                Donate Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
