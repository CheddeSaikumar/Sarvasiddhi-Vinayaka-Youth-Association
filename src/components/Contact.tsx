import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { committeeInfo } from '@/data/festivalData';

export default function Contact() {
  const details = [
    { icon: Phone, label: 'Phone', value: committeeInfo.contact.phone, href: `tel:${committeeInfo.contact.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: committeeInfo.contact.email, href: `mailto:${committeeInfo.contact.email}` },
    { icon: MapPin, label: 'Address', value: committeeInfo.contact.address, href: '#' },
    { icon: Clock, label: 'Festival Dates', value: committeeInfo.festivalDates, href: '#schedule' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-saffron-600 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-maroon-900 leading-tight">
            Contact the Committee
          </h2>
          <p className="mt-4 text-stone-600 text-lg">
            Have questions about the festival, volunteering, or donations? We’d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {details.map((d) => (
            <a
              key={d.label}
              href={d.href}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-saffron-100 hover:shadow-lg hover:border-saffron-300 transition-all flex items-center gap-5"
            >
              <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-100 to-gold-100 flex items-center justify-center group-hover:from-saffron-400 group-hover:to-saffron-600 transition-all flex-shrink-0">
                <d.icon className="w-6 h-6 text-saffron-600 group-hover:text-white transition-colors" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold text-stone-500 text-xs uppercase tracking-widest">{d.label}</h3>
                <p className="mt-1 text-maroon-900 font-medium text-base sm:text-lg break-words">{d.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
