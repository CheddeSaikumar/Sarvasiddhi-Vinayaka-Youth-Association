import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryYears } from '@/data/festivalData';

export default function Gallery() {
  const [activeYear, setActiveYear] = useState(galleryYears[0].year);
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const yearData = galleryYears.find((y) => y.year === activeYear)!;
  const photos = yearData.photos;

  const openLightbox = (index: number) => setLightbox({ index });
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () =>
    setLightbox((lb) => (lb ? { index: (lb.index - 1 + photos.length) % photos.length } : lb));
  const nextPhoto = () =>
    setLightbox((lb) => (lb ? { index: (lb.index + 1) % photos.length } : lb));

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-saffron-600 font-semibold text-sm uppercase tracking-widest">
            <Camera className="w-4 h-4" />
            Memories
          </span>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-maroon-900 leading-tight">
            Five Years of Celebration
          </h2>
          <p className="mt-4 text-stone-600 text-lg">
            Relive the devotion, colors, and joy of Ganesh Chaturthi through our photo archive.
          </p>
        </div>

        {/* Year tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {galleryYears.map((y) => (
            <button
              key={y.year}
              onClick={() => setActiveYear(y.year)}
              className={`px-5 sm:px-7 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeYear === y.year
                  ? 'bg-gradient-to-r from-saffron-500 to-maroon-700 text-white shadow-lg shadow-saffron-500/25 scale-105'
                  : 'bg-white text-stone-600 border border-saffron-200 hover:border-saffron-400 hover:text-saffron-600'
              }`}
            >
              {y.year}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-maroon-700 font-display text-xl italic">
          “{yearData.theme}”
        </p>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all aspect-[4/5] sm:aspect-square"
            >
              {!loadedImages.has(photo.url) && <div className="absolute inset-0 animate-pulse bg-saffron-100" aria-hidden="true" />}
              <img
                src={photo.url}
                alt={photo.alt}
                className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${loadedImages.has(photo.url) ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setLoadedImages((images) => new Set(images).add(photo.url))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-maroon-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox.index].url}
              alt={photos[lightbox.index].alt}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-cream-100">
              <p className="font-display text-lg text-gold-300">{photos[lightbox.index].caption}</p>
              <p className="text-cream-100/60 text-sm mt-1">{yearData.year} — {yearData.theme}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
