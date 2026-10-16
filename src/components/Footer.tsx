import React from 'react';
import logoImg from '../assets/imgs/Logo.png';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onSelectDatesProduct?: (product: unknown) => void;
  lang: 'ar' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer 
      id="contact" 
      dir={isAr ? 'rtl' : 'ltr'} 
      className="bg-[#06080d] border-t-2 border-[#b88a38] text-white pt-14 pb-8 relative overflow-hidden"
    >
      {/* Decorative top glow */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#fae29f] to-transparent shadow-[0_0_15px_#dfba73]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between pb-12 border-b border-[#c5a059]/20">
          
          {/* Left Column: Contact info & Social icons */}
          <div className="space-y-4 order-2 md:order-1 text-start">
            <div className="space-y-2.5 text-xs text-zinc-300">
              {/* Phone */}
              <div className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-full bg-[#121824] border border-[#c5a059]/40 flex items-center justify-center text-[#dfba73] shrink-0 group-hover:border-[#dfba73] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span dir="ltr" className="font-semibold text-white tracking-wider block">+963 995 277 511</span>
                  <span className="text-[10px] text-zinc-400 block" dir="ltr">+966 5838 55 722</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-full bg-[#121824] border border-[#c5a059]/40 flex items-center justify-center text-[#dfba73] shrink-0 group-hover:border-[#dfba73] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Almadinahco2026@gmail.com</span>
                  <span className="text-[10px] text-zinc-400 block">Almadinahco2026@gmail.com</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-full bg-[#121824] border border-[#c5a059]/40 flex items-center justify-center text-[#dfba73] shrink-0 group-hover:border-[#dfba73] transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Damascus Suburb Douma</span>
                  <span className="text-[10px] text-zinc-400 block">
                    {isAr ? 'ريف دمشق دوما شارع المالية' : 'King Abdulaziz Rd - Central Area, Medina'}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2 justify-start">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#facebook' },
                { Icon: Instagram, label: 'Instagram', href: '#instagram' },
                { Icon: Twitter, label: 'X Twitter', href: '#twitter' },
                { Icon: Youtube, label: 'YouTube', href: '#youtube' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-[#121824] border border-[#c5a059]/30 hover:border-[#dfba73] hover:bg-[#dfba73] hover:text-black transition flex items-center justify-center text-amber-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Center Column: Golden Crest Monogram Emblem */}
          <div className="flex flex-col items-center justify-center text-center order-1 md:order-2">
            <div className="mb-3">
              <img 
                src={logoImg} 
                alt="Al-Madena Logo" 
                className="w-20 h-20 object-contain drop-shadow-[0_2px_8px_rgba(223,186,115,0.3)]" 
              />
            </div>
            <h3 className="font-cinzel text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fae29f] via-[#dfba73] to-[#b88a38] tracking-widest">
              AL-MADENA HAJJ & UMRAH
            </h3>
            <p className="text-xs text-amber-200/80 mt-1 font-amiri font-bold">
              {isAr ? 'شركة المدينة لخدمات الحج والعمرة والزيارة' : 'Al-Madinah Al-Ajwa Hajj & Umrah Services'}
            </p>
            <p className="text-[11px] text-zinc-400 mt-1 max-w-xs">
              {isAr ? 'خدمة ضيوف الرحمن شرف لنا وأمانة نرعاها بأعلى درجات الإتقان' : 'Serving the guests of Allah is our honor and trust'}
            </p>
          </div>

          {/* Right Column: Medina Dates Feature */}
          <div className="space-y-3 order-3">
            <div className="bg-[#101624] p-4 rounded-xl border border-[#c5a059]/30 flex flex-col items-start text-start">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#dfba73]" />
                <h4 className="font-cinzel font-bold text-sm text-amber-200">
                  {isAr ? 'تمور المدينة' : 'Medina Dates'}
                </h4>
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug mb-3">
                {isAr
                  ? 'تمور العجوة والعنبرة المباركة من مزارع المدينة المنورة العريقة منتقاة ومعبأة خصيصاً لضيوف الرحمن.'
                  : 'Al-Ajwiah authentic dates are carefully harvested and packaged for pilgrims and global shipment.'}
              </p>

              {/* Photos & Order Button */}
              <div className="flex items-center gap-3 w-full">
                <img
                  src="https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=300&q=80"
                  alt="Medina Ajwa Dates"
                  className="w-14 h-14 rounded-lg object-cover border border-[#c5a059]/50 shadow-md shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=300&q=80"
                  alt="Madinah Premium Dates Bowl"
                  className="w-14 h-14 rounded-lg object-cover border border-[#c5a059]/50 shadow-md shrink-0"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="ms-auto px-3 py-1.5 rounded-lg bg-[#dfba73] hover:bg-[#fae29f] text-zinc-950 font-bold text-[11px] transition shadow shrink-0"
                >
                  {isAr ? 'طلب التمور' : 'Order'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <p className="text-center sm:text-start">
            {isAr 
              ? `© ${new Date().getFullYear()} شركة المدينة لخدمات الحج والعمرة. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} Al-Madinah Hajj & Umrah Services. All rights reserved.`}
          </p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <a href="#privacy" className="hover:text-amber-300 transition">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <span>•</span>
            <a href="#terms" className="hover:text-amber-300 transition">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
            <span>•</span>
            <a href="#license" className="hover:text-amber-300 transition">{isAr ? 'رقم الترخيص: 1445-98210' : 'Licence: 1445-98210'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};