import { useState } from 'react';
import { Heart, Copy, Check, Smartphone, Phone, User, Sparkles, QrCode } from 'lucide-react';
import { donationInfo, committeeInfo } from '@/data/festivalData';

export default function Donation() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  // UPI deep link for QR — opens payment app directly when scanned
  const upiQrPayload = `upi://pay?pa=${donationInfo.upiId}&pn=Ganesh%20Associate%20Committee&tn=Ganesh%20Chaturthi%20Donation`;

  // Google Charts QR API generates a scannable QR image
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiQrPayload)}`;

  const contactItems = [
    { icon: Phone, label: 'UPI / Phone Number', value: donationInfo.upiNumber, copyKey: 'phone', href: `tel:${donationInfo.upiNumber.replace(/\s/g, '')}` },
    { icon: User, label: 'Contact Person', value: donationInfo.contactPerson, copyKey: 'person' },
    { icon: Phone, label: 'Committee Phone', value: committeeInfo.contact.phone, copyKey: 'commPhone', href: `tel:${committeeInfo.contact.phone.replace(/\s/g, '')}` },
    { icon: Smartphone, label: 'UPI ID', value: donationInfo.upiId, copyKey: 'upi' },
  ];

  return (
    <section id="donate" className="py-20 sm:py-28 bg-gradient-to-b from-cream-100 to-saffron-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-saffron-600 font-semibold text-sm uppercase tracking-widest">
            <Heart className="w-4 h-4 fill-current" />
            Support the Celebration
          </span>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-maroon-900 leading-tight">
            Donate to the Festival
          </h2>
          <p className="mt-4 text-stone-600 text-lg">
            Your generosity keeps our traditions alive. Contributions fund the idol, decorations, cultural programs, community meals, and eco-friendly initiatives.
          </p>
        </div>

        {/* UPI payment card with QR + UPI ID */}
        <div className="mt-12 bg-gradient-to-br from-maroon-800 to-maroon-950 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-maroon-900/20 relative overflow-hidden">
          <Sparkles className="absolute top-6 right-6 w-8 h-8 text-gold-300/30" />
          <Sparkles className="absolute bottom-6 left-6 w-6 h-6 text-saffron-300/20" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* QR Code */}
            <div className="flex flex-col items-center text-center order-1">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-saffron-500 shadow-lg mb-4">
                <QrCode className="w-7 h-7 text-maroon-950" />
              </span>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <img
                  src={qrImageUrl}
                  alt="UPI Donation QR Code"
                  width={220}
                  height={220}
                  className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px]"
                />
              </div>
              <p className="text-cream-100/60 text-sm mt-4 max-w-xs">
                Scan with any UPI app (PhonePe, Google Pay, Paytm) to donate instantly
              </p>
            </div>

            {/* UPI ID + copy */}
            <div className="order-2 text-center md:text-left">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-saffron-500 shadow-lg md:hidden">
                <Smartphone className="w-7 h-7 text-maroon-950" />
              </span>
              <h3 className="mt-4 font-display font-bold text-2xl text-white">Pay via UPI</h3>
              <p className="text-cream-100/60 text-sm mt-1">
                The easiest way to contribute — scan the QR or copy the UPI ID below
              </p>

              <div className="mt-6 bg-white/10 backdrop-blur-sm border border-gold-300/20 rounded-2xl p-5 max-w-md mx-auto md:mx-0">
                <p className="text-cream-100/50 text-xs uppercase tracking-widest mb-2">UPI ID</p>
                <code className="text-gold-300 font-semibold text-xl block break-all">{donationInfo.upiId}</code>
                <button
                  onClick={() => copyToClipboard(donationInfo.upiId, 'upi')}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-saffron-500 text-maroon-950 px-5 py-3 rounded-xl text-sm font-semibold hover:scale-[1.02] transition-transform"
                >
                  {copied === 'upi' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied === 'upi' ? 'Copied to clipboard' : 'Copy UPI ID'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact details for donation */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 shadow-sm border border-saffron-100 hover:shadow-lg hover:border-saffron-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-100 to-gold-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-saffron-600" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-stone-500 text-xs uppercase tracking-widest font-semibold">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-maroon-900 font-medium text-lg hover:text-saffron-600 transition-colors block mt-0.5 truncate">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-maroon-900 font-medium text-lg mt-0.5 truncate">{item.value}</p>
                  )}
                </div>
                <button
                  onClick={() => copyToClipboard(item.value, item.copyKey)}
                  className="text-saffron-500 hover:text-saffron-600 transition-colors flex-shrink-0"
                  aria-label={`Copy ${item.label}`}
                >
                  {copied === item.copyKey ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-stone-500 text-sm max-w-2xl mx-auto">
          For any donation-related queries, please reach out to the contact person above. All donations are used transparently for festival expenses and community welfare.
        </p>
      </div>
    </section>
  );
}
