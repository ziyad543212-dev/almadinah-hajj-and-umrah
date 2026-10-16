import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [serviceNameForBooking, setServiceNameForBooking] = useState<string | undefined>(undefined);

  const toggleLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setServiceNameForBooking(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-white flex flex-col selection:bg-[#dfba73] selection:text-black font-cairo">
      {/* Top Fixed Header Navbar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePackages={() => handleOpenBooking()}
          onOpenBooking={() => handleOpenBooking()}
          lang={lang}
        />

        {/* 2. Why Choose Us Section ("لماذا تختارنا؟") */}
        <WhyChooseUs lang={lang} />

        {/* 3. Sacred Sites & Holy Sanctuaries Gallery ("المعرض") */}
        <GallerySection lang={lang} />
      </main>

      {/* 4. Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking('تمور المدينة والهدايا')}
        lang={lang}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={serviceNameForBooking}
        lang={lang}
      />
    </div>
  );
}