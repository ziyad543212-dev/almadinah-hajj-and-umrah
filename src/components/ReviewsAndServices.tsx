import React from 'react';
import { REVIEWS_DATA, ADDITIONAL_SERVICES_DATA } from '../data/mockData';
import { Star, Quote, CreditCard, Plane, Car, Gift, Compass, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewsAndServicesProps {
  onOpenBooking: (serviceName?: string) => void;
  lang: 'ar' | 'en';
}

export const ReviewsAndServices: React.FC<ReviewsAndServicesProps> = ({ onOpenBooking, lang }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-[#dfba73]" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-[#dfba73]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#dfba73]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#dfba73]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#dfba73]" />;
      default:
        return <Check className="w-5 h-5 text-[#dfba73]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#090d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left / Center-Left: "تجارب المعتمرين والحجاج" (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-right sm:text-right">
              <div className="flex items-center gap-2 mb-1 justify-start">
                <span className="h-px w-6 bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-wider text-[#dfba73] font-cinzel">
                  Verified Pilgrim Reviews
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-cairo">
                {lang === 'ar' ? 'تجارب المعتمرين والحجاج' : 'Pilgrim Reviews & Testimonials'}
              </h2>
            </div>

            {/* 3 Testimonials in horizontal layout matching the image */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {REVIEWS_DATA.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#101622] p-4 rounded-xl border border-[#c5a059]/30 hover:border-[#dfba73] transition-all duration-300 flex flex-col items-center text-center shadow-lg group hover:-translate-y-1"
                >
                  {/* Circular Avatar with Gold Ring Border matching image */}
                  <div className="relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#dfba73] to-[#8a611f] mb-3 shadow-md">
                    <img
                      src={rev.avatar}
                      alt={rev.nameAr}
                      className="w-full h-full rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#101622] p-1 rounded-full border border-[#c5a059]">
                      <Quote className="w-2.5 h-2.5 text-[#dfba73]" />
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Comment in quotes */}
                  <p className="text-xs text-zinc-300 italic mb-3 line-clamp-4 leading-relaxed">
                    "{lang === 'ar' ? rev.commentAr : rev.commentEn}"
                  </p>

                  {/* Pilgrim Name & Role */}
                  <div className="mt-auto pt-2 border-t border-zinc-800 w-full">
                    <h4 className="text-xs font-bold text-amber-200 truncate">
                      {lang === 'ar' ? rev.nameAr : rev.nameEn}
                    </h4>
                    <p className="text-[10px] text-zinc-400 truncate">
                      {lang === 'ar' ? rev.roleAr : rev.roleEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust endorsement banner */}
            <div className="p-3.5 rounded-xl bg-[#131926] border border-[#c5a059]/20 flex items-center justify-between text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="text-lg">🕋</span>
                <span>
                  {lang === 'ar'
                    ? 'نسبة رضا الحجاج والمعتمرين 99.4% على مدى 10 مواسم متتالية'
                    : '99.4% satisfaction score across 10 consecutive Hajj & Umrah seasons.'}
                </span>
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="text-[11px] font-bold text-[#dfba73] hover:underline"
              >
                {lang === 'ar' ? 'شارك تجربتك' : 'Share Review'}
              </button>
            </div>
          </div>

          {/* Right: "خدماتنا الإضافية" (5 Cols) matching the layout in image */}
          <div className="lg:col-span-5 bg-[#101622] p-5 sm:p-6 rounded-2xl border-2 border-[#b88a38]/60 shadow-2xl space-y-4">
            <div className="border-b border-[#c5a059]/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#dfba73] font-cinzel">
                  Comprehensive Hospitality
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-cairo">
                {lang === 'ar' ? 'خدماتنا الإضافية' : 'Additional Services'}
              </h3>
            </div>

            {/* List of services with icons matching image */}
            <div className="space-y-3">
              {ADDITIONAL_SERVICES_DATA.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => onOpenBooking(srv.titleAr)}
                  className="group flex items-center justify-between p-3 rounded-xl bg-[#141b2b] hover:bg-[#1a2338] border border-[#c5a059]/20 hover:border-[#dfba73] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0e131d] border border-[#c5a059]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {lang === 'ar' ? srv.titleAr : srv.titleEn}
                      </h4>
                      <p className="text-[11px] text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                        {lang === 'ar' ? srv.descAr : srv.descEn}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-amber-400 group-hover:translate-x-[-2px] transition-transform">
                    {lang === 'ar' ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="w-full gold-gradient-btn py-3 rounded-xl text-xs sm:text-sm font-bold text-center mt-2 shadow-lg"
            >
              {lang === 'ar' ? 'طلب باقة خدمات مخصصة' : 'Request Custom Service Bundle'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
