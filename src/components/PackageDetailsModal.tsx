import React from 'react';
import { PackageItem } from '../types';
import { X, Check, MapPin, Calendar, Clock, Sparkles, Building2, ShieldCheck, Bus, Utensils, Award } from 'lucide-react';

interface PackageDetailsModalProps {
  pkg: PackageItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (pkg: PackageItem) => void;
  lang: 'ar' | 'en';
}

export const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({
  pkg,
  isOpen,
  onClose,
  onBook,
  lang
}) => {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0d131e] border-2 border-[#b88a38] rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95">
        
        {/* Modal Top Banner with Image */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.titleAr}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d131e] via-[#0d131e]/50 to-black/40" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 right-6 left-6 text-right">
            <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#dfba73] text-black inline-flex items-center gap-1 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'ar' ? pkg.badgeAr : pkg.badgeEn}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-cairo">
              {lang === 'ar' ? pkg.titleAr : pkg.titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 font-cinzel">
              {pkg.titleEn}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#141c2c] border border-zinc-800 text-right">
              <span className="text-[10px] text-zinc-400 block">{lang === 'ar' ? 'المدة الإجمالية' : 'Duration'}</span>
              <span className="text-sm font-bold text-amber-300">{pkg.durationDays} {lang === 'ar' ? 'أيام / ليالٍ' : 'Days'}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#141c2c] border border-zinc-800 text-right">
              <span className="text-[10px] text-zinc-400 block">{lang === 'ar' ? 'تصنيف الفندق' : 'Hotel Rating'}</span>
              <span className="text-sm font-bold text-white">⭐⭐⭐⭐⭐ 5 نجوم</span>
            </div>
            <div className="p-3 rounded-xl bg-[#141c2c] border border-zinc-800 text-right">
              <span className="text-[10px] text-zinc-400 block">{lang === 'ar' ? 'المسافة للحرم' : 'Proximity'}</span>
              <span className="text-xs font-bold text-[#dfba73] truncate block">{lang === 'ar' ? pkg.proximityAr : pkg.proximityEn}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#141c2c] border border-zinc-800 text-right">
              <span className="text-[10px] text-zinc-400 block">{lang === 'ar' ? 'سعر الفرد' : 'Price / Person'}</span>
              <span className="text-sm font-bold text-white">{pkg.priceSAR.toLocaleString()} SAR</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-amber-200 mb-1.5 font-cairo">
              {lang === 'ar' ? 'عن البرنامج والرحلة:' : 'About This Journey:'}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {lang === 'ar' ? pkg.descriptionAr : pkg.descriptionEn}
            </p>
          </div>

          {/* Inclusions & Highlights */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-200 font-cairo">
              {lang === 'ar' ? 'المزايا المشمولة في الباقة:' : 'Package Inclusions:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'ar' ? pkg.amenitiesAr : pkg.amenitiesEn).map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141c2b] border border-zinc-800 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141c2b] border border-zinc-800 text-xs text-zinc-200">
                <Building2 className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>{lang === 'ar' ? pkg.hotelAr : pkg.hotelEn}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141c2b] border border-zinc-800 text-xs text-zinc-200">
                <Bus className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>{lang === 'ar' ? pkg.transportAr : pkg.transportEn}</span>
              </div>
            </div>
          </div>

          {/* Footer action */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-zinc-400 block">{lang === 'ar' ? 'السعر يبدأ من' : 'Starting Price'}</span>
              <span className="text-2xl font-black text-amber-300">{pkg.priceSAR.toLocaleString()} SAR</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-700 transition"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBook(pkg);
                }}
                className="gold-gradient-btn px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg"
              >
                {lang === 'ar' ? 'احجز هذه الباقة الآن' : 'Book This Package'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
