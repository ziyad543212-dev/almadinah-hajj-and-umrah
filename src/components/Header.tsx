import React, { useState } from 'react';
import logoImg from "../assets/imgs/Logo.png";
import { Menu, X, Globe, PhoneCall } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
  lang: 'ar' | 'en';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
  lang,
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', ar: 'الصفحة الرئيسية', en: 'Home' },
    { id: 'hajj', ar: 'حزم الحج', en: 'Hajj Packages' },
    { id: 'umrah', ar: 'حزم العمرة', en: 'Umrah Packages' },
    { id: 'services', ar: 'الخدمات', en: 'Services' },
    { id: 'gallery', ar: 'المعرض', en: 'Gallery' },
    { id: 'about', ar: 'من نحن', en: 'About Us' },
    { id: 'contact', ar: 'اتصل بنا', en: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0d14]/95 backdrop-blur-md border-b border-[#c5a059]/30 shadow-[0_4px_25px_rgba(0,0,0,0.7)]">
      {/* Top Banner Bar for contact & info */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#10141e] border-b border-[#c5a059]/15 text-[12px] text-amber-100/80">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-amber-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {lang === 'ar' ? 'التسجيل مفتوح لحج وعمرة 1447هـ' : 'Registration Open for Hajj & Umrah 2026 / 1447H'}
          </span>
          <span className="text-amber-200/50">|</span>
          <span className="flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-[#dfba73]" />
            <span dir="ltr">+963 968 531 013 / +963 995 772 511</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#c5a059]/40 hover:bg-[#c5a059]/20 text-amber-200 transition text-xs"
            title="Change language"
          >
            <Globe className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
          </button>
          <span className="text-amber-200/60 font-amiri text-xs">
            بإشراف من وزارة الحج والعمرة
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer py-2 group transition-transform hover:scale-[1.01] flex items-center gap-3"
          >
            <img 
              src={logoImg} 
              alt="Logo" 
              className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(223,186,115,0.25)]" 
            />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative px-3 py-2 flex flex-col items-center justify-center transition-all duration-200 ${
                    isActive ? 'text-[#fae29f]' : 'text-zinc-300 hover:text-amber-200'
                  }`}
                >
                  <span className="text-sm font-bold tracking-tight">
                    {item.ar}
                  </span>
                  <span className={`text-[10px] tracking-wider transition-colors ${
                    isActive ? 'text-[#dfba73]' : 'text-zinc-400 group-hover:text-amber-300/80'
                  }`}>
                    {item.en}
                  </span>

                  {/* Active Golden Bar Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-2 h-[2.5px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent rounded-full shadow-[0_0_8px_#dfba73]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Book Now CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLang}
              className="xl:hidden flex items-center justify-center p-2 rounded-lg border border-[#c5a059]/40 text-amber-200 hover:bg-[#c5a059]/20 transition"
              aria-label="Language Toggle"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* Book Now Button */}
            <button
              id="header-book-btn"
              onClick={onOpenBooking}
              className="gold-gradient-btn px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-lg shadow-[#b88a38]/30 hover:shadow-[#dfba73]/50 transition-all flex items-center gap-2 cursor-pointer border border-[#fae29f]/40"
            >
              <span>{lang === 'ar' ? 'احجز الآن' : 'Book Now'}</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg border border-[#c5a059]/40 text-amber-300 hover:bg-[#161c28] transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0c1018] border-b border-[#c5a059]/30 px-5 py-4 space-y-2 animate-in fade-in slide-in-from-top-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-right transition ${
                activeSection === item.id
                  ? 'bg-[#1e2536] text-[#dfba73] border border-[#c5a059]/40'
                  : 'text-zinc-200 hover:bg-[#131924]'
              }`}
            >
              <div className="flex flex-col">
                <span className="font-bold text-sm">{item.ar}</span>
                <span className="text-xs text-zinc-400">{item.en}</span>
              </div>
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-[#dfba73]"></span>
              )}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full gold-gradient-btn py-3 rounded-xl font-bold text-sm text-center block"
            >
              {lang === 'ar' ? 'ابدأ حجز رحلتك الإيمانية' : 'Start Your Spiritual Booking'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};