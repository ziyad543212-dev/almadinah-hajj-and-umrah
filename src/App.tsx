import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PackagesSection } from './components/PackagesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsAndServices } from './components/ReviewsAndServices';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { PackageItem } from './types';
import { PACKAGES_DATA } from './data/mockData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<PackageItem | null>(null);
  const [selectedPackageForDetails, setSelectedPackageForDetails] = useState<PackageItem | null>(null);
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

    if (sectionId === 'hajj' || sectionId === 'umrah') {
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceName?: string, pkg?: PackageItem) => {
    setServiceNameForBooking(serviceName);
    setSelectedPackageForBooking(pkg || PACKAGES_DATA[0]);
    setIsBookingOpen(true);
  };

  const handleBookFromCard = (pkg: PackageItem) => {
    setSelectedPackageForBooking(pkg);
    setServiceNameForBooking(undefined);
    setIsBookingOpen(true);
  };

  const handleViewDetails = (pkg: PackageItem) => {
    setSelectedPackageForDetails(pkg);
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
        {/* 1. Hero Section matching the image */}
        <Hero
          onExplorePackages={() => handleNavigate('packages')}
          onOpenBooking={() => handleOpenBooking()}
          lang={lang}
        />

        {/* 2. Featured Packages Section ("حزمنا المميزة") */}
        <PackagesSection
          onSelectPackage={handleViewDetails}
          onBookPackage={handleBookFromCard}
          lang={lang}
        />

        {/* 3. Why Choose Us Section ("لماذا تختارنا؟") */}
        <WhyChooseUs lang={lang} />

        {/* 4. Pilgrim Reviews & Additional Services ("تجارب المعتمرين والحجاج" & "خدماتنا الإضافية") */}
        <ReviewsAndServices
          onOpenBooking={(service) => handleOpenBooking(service)}
          lang={lang}
        />

        {/* 5. Sacred Sites & Holy Sanctuaries Gallery ("المعرض") */}
        <GallerySection lang={lang} />
      </main>

      {/* 6. Footer matching the image */}
      <Footer
        onOpenBooking={() => handleOpenBooking('تمور المدينة والهدايا')}
        lang={lang}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPackage={selectedPackageForBooking}
        initialService={serviceNameForBooking}
        lang={lang}
      />

      {/* Detailed Package Info Modal */}
      <PackageDetailsModal
        isOpen={!!selectedPackageForDetails}
        pkg={selectedPackageForDetails}
        onClose={() => setSelectedPackageForDetails(null)}
        onBook={(pkg) => {
          setSelectedPackageForDetails(null);
          handleBookFromCard(pkg);
        }}
        lang={lang}
      />
    </div>
  );
}
