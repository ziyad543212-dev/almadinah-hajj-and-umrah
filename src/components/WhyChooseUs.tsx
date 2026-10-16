import React from 'react';
import { Award, ShieldCheck, Sparkles, HeartHandshake, Clock, PlaneTakeoff } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/mockData';

interface WhyChooseUsProps {
  lang: 'ar' | 'en';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-[#dfba73]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#dfba73]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#dfba73]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#dfba73]" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#dfba73]" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-7 h-7 text-[#dfba73]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#dfba73]" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#06090e] border-y border-[#c5a059]/25 relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#dfba73_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching screenshot */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-cairo mb-2">
            {lang === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#dfba73] to-transparent mx-auto mb-3" />
          <p className="text-sm sm:text-base text-amber-200/70 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'نضع خبرتنا الممتدة لأكثر من 15 عاماً في خدمة ضيوف الرحمن لتقديم أقدس الرحلات بأقصى درجات الطمأنينة والرفاهية.'
              : 'Over 15 years dedicated to serving the guests of Allah with highest excellence and absolute peace of mind.'}
          </p>
        </div>

        {/* 6 Icons Feature Grid matching screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Gold Icon Border matching image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#111724] border-2 border-[#b88a38] group-hover:border-[#fae29f] group-hover:shadow-[0_0_20px_rgba(223,186,115,0.4)] transition-all duration-300 flex items-center justify-center mb-3.5 shadow-lg group-hover:scale-110">
                {getIcon(item.iconName)}
              </div>

              {/* Title in Arabic and English */}
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1 font-cairo leading-snug">
                {lang === 'ar' ? item.titleAr : item.titleEn}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-amber-200/60 font-medium mb-1.5">
                {item.titleEn}
              </p>

              {/* Short explanation */}
              <p className="text-[11px] text-zinc-400 leading-relaxed max-w-[170px] line-clamp-3">
                {lang === 'ar' ? item.descAr : item.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
