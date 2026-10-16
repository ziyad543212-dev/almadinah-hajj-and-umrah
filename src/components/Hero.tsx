import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onOpenBooking: () => void;
  lang: 'ar' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, lang }) => {
  return (
    <section id="home" className="relative min-h-[560px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* High-Resolution Majestic Kaaba Background Image matching the screenshot */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Warm Golden / Spiritual Ambient Lighting Gradient Overlays matching the original screenshot */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e16]/85 via-[#0c101a]/70 to-[#0b0f17] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-[#0a0d14]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Subtle Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c160e]/80 border border-[#c5a059]/50 backdrop-blur-md text-amber-200 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_15px_rgba(218,165,32,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-[#fae29f] animate-spin" style={{ animationDuration: '8s' }} />
          <span>{lang === 'ar' ? 'الوكيل المعتمد لرحلات الحج والعمرة والزيارة' : 'Official Certified Partner for Hajj & Umrah'}</span>
        </motion.div>

        {/* Main Arabic Title - رحلتك الإيمانية تبدأ هنا */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-cairo"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-amber-100">
            رحلتك الإيمانية تبدأ هنا
          </span>
        </motion.h1>

        {/* English Subtitle: Al-Ajwiah Al-Madena: Your Trusted Partner for Hajj and Umrah */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-amber-200/90 font-medium max-w-3xl mx-auto mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-cinzel"
        >
          Al-Ajwiah Al-Madena: Your Trusted Partner for Hajj and Umrah
        </motion.p>

        {/* CTA Button matching the screenshot: "استكشف الحزم" with golden glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            id="hero-explore-btn"
            onClick={onExplorePackages}
            className="gold-gradient-btn px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-extrabold tracking-wide shadow-2xl flex items-center justify-center gap-3 border border-[#fae29f]/60 hover:scale-105 transition-all group"
          >
            <span>{lang === 'ar' ? 'استكشف الحزم' : 'Explore Packages'}</span>
            <Compass className="w-5 h-5 text-zinc-900 group-hover:rotate-45 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-[#c5a059]/20"
        >
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0e131d]/60 backdrop-blur border border-[#c5a059]/20 text-right">
            <ShieldCheck className="w-5 h-5 text-[#dfba73] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">ترخيص رسمي معتمد</p>
              <p className="text-[10px] text-zinc-400">وزارة الحج والعمرة</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0e131d]/60 backdrop-blur border border-[#c5a059]/20 text-right">
            <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
            <div>
              <p className="text-xs font-bold text-white">فنادق 5 نجوم مطلة</p>
              <p className="text-[10px] text-zinc-400">أمام ساحات الحرمين</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0e131d]/60 backdrop-blur border border-[#c5a059]/20 text-right">
            <Sparkles className="w-5 h-5 text-[#dfba73] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">+50,000 معتمر وحاج</p>
              <p className="text-[10px] text-zinc-400">خدمناهم بكل فخر</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0e131d]/60 backdrop-blur border border-[#c5a059]/20 text-right">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0">
              24
            </div>
            <div>
              <p className="text-xs font-bold text-white">رعاية متواصلة 24/7</p>
              <p className="text-[10px] text-zinc-400">إرشاد ديني وطبي</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
