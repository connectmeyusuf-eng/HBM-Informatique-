import React from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', alt: 'Server Infrastructure' },
    { url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80', alt: 'CCTV & Security' },
    { url: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80', alt: 'Computer Maintenance' },
    { url: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=800&q=80', alt: 'Network Cabling' },
    { url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80', alt: 'Mobile Solutions' },
    { url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80', alt: 'Printer Services' },
    { url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', alt: 'IT Consulting' },
    { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', alt: 'Hardware & Components' },
    { url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80', alt: 'Tech Repair' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('gallery.title')}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('gallery.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Items */}
          {images.map((img, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative group aspect-video">
              <img 
                src={img.url} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg">{img.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
