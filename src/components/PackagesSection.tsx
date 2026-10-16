import React, { useState } from 'react';
import { PackageItem } from '../types';
import { PACKAGES_DATA } from '../data/mockData';
import { MapPin, Bus, CheckCircle2, Clock, Sparkles, Eye, Bookmark } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onBookPackage: (pkg: PackageItem) => void;
  lang: 'ar' | 'en';
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onBookPackage,
  lang
}) => {
  const [filter, setFilter] = useState<'all' | 'hajj' | 'umrah' | 'vip'>('all');

  const filteredPackages = PACKAGES_DATA.filter((pkg) => {
    if (filter === 'all') return true;
    if (filter === 'hajj') return pkg.category === 'hajj';
    if (filter === 'umrah') return pkg.category === 'umrah' || pkg.category === 'ramadan';
    if (filter === 'vip') return pkg.category === 'vip' || pkg.badgeEn.includes('VIP');
    return true;
  });

  return (
    <section id="packages" className="py-16 sm:py-20 bg-[#080b11] relative">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1c170d]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching "حزمنا المميزة" in the image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-px w-8 bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-widest text-[#dfba73] font-cinzel font-semibold">
                Special Sacred Itineraries
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo">
              {lang === 'ar' ? 'حزمنا المميزة' : 'Our Featured Packages'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101520] rounded-xl border border-[#c5a059]/30">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#dfba73] to-[#b88a38] text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'جميع الحزم' : 'All Packages'}
            </button>
            <button
              onClick={() => setFilter('hajj')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                filter === 'hajj'
                  ? 'bg-gradient-to-r from-[#dfba73] to-[#b88a38] text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'حزم الحج' : 'Hajj'}
            </button>
            <button
              onClick={() => setFilter('umrah')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                filter === 'umrah'
                  ? 'bg-gradient-to-r from-[#dfba73] to-[#b88a38] text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'حزم العمرة' : 'Umrah'}
            </button>
            <button
              onClick={() => setFilter('vip')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                filter === 'vip'
                  ? 'bg-gradient-to-r from-[#dfba73] to-[#b88a38] text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'باقات VIP' : 'VIP'}
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Layout exactly replicating the four cards in the user image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.slice(0, 4).map((pkg) => (
            <div
              key={pkg.id}
              className="package-card group flex flex-col justify-between overflow-hidden shadow-2xl relative"
            >
              {/* Card Image with Badge & Hover Action */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <img
                  src={pkg.image}
                  alt={pkg.titleAr}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-black/40" />

                {/* Top Badge matching "قاعة ذهبية" / "عرض خاص" */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-[#dfba73] text-zinc-950 shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-zinc-900" />
                    {lang === 'ar' ? pkg.badgeAr : pkg.badgeEn}
                  </span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-2 left-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-amber-400/30 text-[11px] text-amber-200">
                  <Clock className="w-3 h-3 text-[#dfba73]" />
                  <span>{pkg.durationDays} {lang === 'ar' ? 'أيام' : 'Days'}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                {/* Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {lang === 'ar' ? pkg.titleAr : pkg.titleEn}
                  </h3>
                  <p className="text-xs text-amber-200/70 font-medium mt-0.5">
                    {pkg.titleEn}
                  </p>
                </div>

                {/* Specs: Hotel & Proximity */}
                <div className="space-y-1.5 text-xs text-zinc-300 bg-[#161d2b]/80 p-2.5 rounded-lg border border-[#c5a059]/20">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#dfba73] shrink-0 mt-0.5" />
                    <div className="truncate">
                      <span className="font-semibold text-white">
                        {lang === 'ar' ? pkg.hotelAr : pkg.hotelEn}
                      </span>
                      <p className="text-[11px] text-amber-200/80">
                        {lang === 'ar' ? pkg.proximityAr : pkg.proximityEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1 border-t border-zinc-700/50">
                    <Bus className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
                    <span className="text-[11px] text-zinc-300 truncate">
                      {lang === 'ar' ? pkg.transportAr : pkg.transportEn}
                    </span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold text-amber-300/90 flex items-center justify-between">
                    <span>{lang === 'ar' ? 'المزايا والخدمات:' : 'Key Amenities:'}</span>
                    <span className="text-[10px] text-zinc-400">★ {pkg.rating}</span>
                  </div>
                  <ul className="space-y-0.5">
                    {(lang === 'ar' ? pkg.amenitiesAr : pkg.amenitiesEn).slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-[11px] text-zinc-300 flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Buttons */}
                <div className="pt-2 border-t border-[#c5a059]/20">
                  <div className="flex items-baseline justify-between mb-2.5">
                    <span className="text-[11px] text-zinc-400">
                      {lang === 'ar' ? 'تبدأ من:' : 'Starting from:'}
                    </span>
                    <div className="text-right">
                      <span className="text-lg font-black text-amber-300">
                        {pkg.priceSAR.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-amber-100/70 mr-1">
                        {lang === 'ar' ? 'ريال سعودي' : 'SAR'}
                      </span>
                    </div>
                  </div>

                  {/* Button matching "استكشف الحزم" in screenshot */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="py-2 px-2 rounded-lg bg-[#182133] hover:bg-[#222d45] border border-[#c5a059]/40 text-amber-200 text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'التفاصيل' : 'Details'}</span>
                    </button>
                    <button
                      onClick={() => onBookPackage(pkg)}
                      className="gold-gradient-btn py-2 px-2 rounded-lg text-xs font-extrabold flex items-center justify-center gap-1 shadow-md"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'استكشف الحزم' : 'Book'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Footer bar */}
        <div className="mt-10 text-center">
          <p className="text-xs text-amber-200/60 mb-3">
            {lang === 'ar'
              ? 'هل تبحث عن باقة مخصصة لعائلتك أو مجموعتك؟ نصمم لك برنامجك بالكامل.'
              : 'Looking for a custom family or VIP delegation package? We tailor every detail.'}
          </p>
          <button
            onClick={() => onSelectPackage(filteredPackages[0])}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#dfba73] hover:text-amber-200 transition underline underline-offset-4"
          >
            <span>{lang === 'ar' ? 'عرض جدول مقارنة جميع برامج الحج والعمرة 1447هـ' : 'View Full Comparison Table for All Programs'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
