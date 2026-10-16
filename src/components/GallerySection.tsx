import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { Sparkles, Maximize2, X } from 'lucide-react';

interface GallerySectionProps {
  lang: 'ar' | 'en';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 bg-[#070a10] border-t border-[#c5a059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#dfba73]" />
            <span className="text-xs uppercase tracking-wider text-[#dfba73] font-cinzel">
              Sacred Moments
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo">
            {lang === 'ar' ? 'معرض المشاعر المقدسة والحرمين' : 'Sacred Sites & Holy Sanctuaries'}
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/70 mt-1 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'لقطات حية من أقدس بقاع الأرض، لنوثق معكم أسمى رحلة في العمر.'
              : 'Glimpses from the holiest places on earth throughout our Hajj and Umrah journeys.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item.image)}
              className="group relative h-60 rounded-xl overflow-hidden cursor-pointer border border-[#c5a059]/30 hover:border-[#dfba73] transition-all duration-300 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.titleAr}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#dfba73] uppercase tracking-wider font-semibold block">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h4>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#dfba73] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer animate-in fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border-2 border-[#dfba73]">
            <img
              src={selectedImg}
              alt="Expanded holy view"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
