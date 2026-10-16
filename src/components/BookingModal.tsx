import React, { useState } from 'react';
import { PackageItem, BookingFormData } from '../types';
import { PACKAGES_DATA } from '../data/mockData';
import { X, CheckCircle, ShieldCheck, User, Phone, Mail, MapPin, Calendar, Users, Award, Printer, Heart } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: PackageItem | null;
  initialService?: string;
  lang: 'ar' | 'en';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  initialService,
  lang
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    country: 'المملكة العربية السعودية',
    packageId: selectedPackage?.id || PACKAGES_DATA[0].id,
    pilgrimsCount: 2,
    departureDate: '2026-06-15',
    roomType: 'double',
    needVisa: false,
    needFlights: true,
    specialRequests: initialService ? `طلب خدمة: ${initialService}` : ''
  });

  const [bookingRef, setBookingRef] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentPkg = PACKAGES_DATA.find((p) => p.id === formData.packageId) || PACKAGES_DATA[0];

  // Pricing calculation
  const basePrice = currentPkg.priceSAR * formData.pilgrimsCount;
  const roomMultiplier = formData.roomType === 'single' ? 1.4 : formData.roomType === 'triple' ? 0.9 : formData.roomType === 'quad' ? 0.8 : 1;
  const visaPrice = formData.needVisa ? 650 * formData.pilgrimsCount : 0;
  const flightPrice = formData.needFlights ? 1800 * formData.pilgrimsCount : 0;
  const totalPrice = Math.round(basePrice * roomMultiplier + visaPrice + flightPrice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = 'AJW-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setCurrentStep(3);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0e1420] border-2 border-[#b88a38] rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141d2e] border-b border-[#c5a059]/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#dfba73] flex items-center justify-center text-zinc-950 font-bold text-sm">
              AM
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {lang === 'ar' ? 'حجز رحلة الحج والعمرة' : 'Hajj & Umrah Booking'}
              </h3>
              <p className="text-xs text-amber-200/70">
                {lang === 'ar' ? 'شركة المدينة لخدمات ضيوف الرحمن' : 'Al-Ajwiah Al-Madena Services'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 bg-[#0a0f18] px-6 py-3 border-b border-zinc-800 text-xs font-semibold text-center">
          <div className={`flex items-center justify-center gap-1.5 ${currentStep >= 1 ? 'text-[#dfba73]' : 'text-zinc-500'}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>
            <span>{lang === 'ar' ? 'اختيار الحزمة' : 'Package'}</span>
          </div>
          <div className={`flex items-center justify-center gap-1.5 ${currentStep >= 2 ? 'text-[#dfba73]' : 'text-zinc-500'}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>
            <span>{lang === 'ar' ? 'بيانات المعتمر' : 'Details'}</span>
          </div>
          <div className={`flex items-center justify-center gap-1.5 ${currentStep >= 3 ? 'text-[#dfba73]' : 'text-zinc-500'}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
            <span>{lang === 'ar' ? 'التأكيد والسند' : 'Confirm'}</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-amber-200 mb-2">
                  {lang === 'ar' ? 'اختر الباقة المناسبة:' : 'Select Desired Package:'}
                </label>
                <select
                  value={formData.packageId}
                  onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#151c2c] border border-[#c5a059]/40 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                >
                  {PACKAGES_DATA.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.titleAr} - {pkg.titleEn} ({pkg.priceSAR.toLocaleString()} SAR)
                    </option>
                  ))}
                </select>
              </div>

              {/* Package Summary Box */}
              <div className="p-4 rounded-xl bg-[#121927] border border-[#c5a059]/30 flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={currentPkg.image}
                  alt={currentPkg.titleAr}
                  className="w-24 h-24 rounded-lg object-cover border border-[#c5a059]/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1 text-right flex-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#dfba73] text-black">
                    {currentPkg.badgeAr}
                  </span>
                  <h4 className="text-sm font-bold text-white">{currentPkg.titleAr}</h4>
                  <p className="text-xs text-amber-200/80">{currentPkg.hotelAr}</p>
                  <p className="text-xs text-zinc-400">{currentPkg.proximityAr} • {currentPkg.transportAr}</p>
                </div>
              </div>

              {/* Number of Pilgrims & Room Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    {lang === 'ar' ? 'عدد الحجاج / المعتمرين:' : 'Number of Pilgrims:'}
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, pilgrimsCount: Math.max(1, formData.pilgrimsCount - 1) })}
                      className="w-10 h-10 rounded-lg bg-[#182133] border border-zinc-700 text-white font-bold hover:bg-zinc-700"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-amber-300 bg-[#151c2c] py-2 rounded-lg border border-zinc-700">
                      {formData.pilgrimsCount} {lang === 'ar' ? 'أفراد' : 'Pilgrims'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, pilgrimsCount: formData.pilgrimsCount + 1 })}
                      className="w-10 h-10 rounded-lg bg-[#182133] border border-zinc-700 text-white font-bold hover:bg-zinc-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    {lang === 'ar' ? 'نوع الإقامة بالغرفة:' : 'Room Accommodation:'}
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#151c2c] border border-zinc-700 text-white text-xs"
                  >
                    <option value="double">غرفة ثنائية (Double Room)</option>
                    <option value="single">غرفة مفردة VIP (Single Room +40%)</option>
                    <option value="triple">غرفة ثلاثية (Triple Room -10%)</option>
                    <option value="quad">غرفة رباعية عائلية (Quad Room -20%)</option>
                  </select>
                </div>
              </div>

              {/* Extra Services checkboxes */}
              <div className="p-3.5 rounded-xl bg-[#121927] border border-zinc-800 space-y-2">
                <span className="text-xs font-bold text-amber-200 block mb-1">
                  {lang === 'ar' ? 'خدمات إضافية مطلوبة:' : 'Additional Services Required:'}
                </span>
                <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.needVisa}
                    onChange={(e) => setFormData({ ...formData, needVisa: e.target.checked })}
                    className="accent-[#dfba73] w-4 h-4 rounded"
                  />
                  <span>{lang === 'ar' ? 'إصدار تأشيرة العمرة الإلكترونية وتصاريح نسك (+650 ر.س للفرد)' : 'Electronic Visa & Nusuk Permit assistance (+650 SAR/person)'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.needFlights}
                    onChange={(e) => setFormData({ ...formData, needFlights: e.target.checked })}
                    className="accent-[#dfba73] w-4 h-4 rounded"
                  />
                  <span>{lang === 'ar' ? 'تضمين تذاكر الطيران المباشر ذهاباً وعودة (+1800 ر.س للفرد)' : 'Include Return Direct Flights (+1800 SAR/person)'}</span>
                </label>
              </div>

              {/* Estimated Total Price */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#182133] to-[#121926] border border-[#c5a059]/40">
                <span className="text-xs font-medium text-zinc-300">
                  {lang === 'ar' ? 'الإجمالي التقديري للباقة:' : 'Estimated Total Amount:'}
                </span>
                <div className="text-right">
                  <span className="text-xl font-black text-[#fae29f]">
                    {totalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-amber-200/80 mr-1">
                    {lang === 'ar' ? 'ريال سعودي' : 'SAR'}
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="gold-gradient-btn px-8 py-3 rounded-xl font-bold text-sm shadow-lg"
                >
                  {lang === 'ar' ? 'المتابعة لبيانات الاتصال ←' : 'Continue to Contact Details →'}
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  {lang === 'ar' ? 'الاسم الكامل (كما في جواز السفر):' : 'Full Name (as in Passport):'}
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-3 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="مثال: عبدالله بن محمد الشهري"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pr-10 pl-3 py-2.5 rounded-xl bg-[#151c2c] border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {lang === 'ar' ? 'رقم الهاتف / الواتساب:' : 'Phone / WhatsApp:'}
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 w-4 h-4 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+966 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pr-10 pl-3 py-2.5 rounded-xl bg-[#151c2c] border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {lang === 'ar' ? 'البريد الإلكتروني:' : 'Email Address:'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pr-10 pl-3 py-2.5 rounded-xl bg-[#151c2c] border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {lang === 'ar' ? 'بلد الإقامة أو المغادرة:' : 'Country of Residence:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#151c2c] border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">
                    {lang === 'ar' ? 'تاريخ السفر المفضل:' : 'Preferred Departure Date:'}
                  </label>
                  <input
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#151c2c] border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  {lang === 'ar' ? 'ملاحظات أو طلبات خاصة (كراسي متحركة، وجبات خاصة):' : 'Special Requests (Wheelchair, Dietary, Dates Gift):'}
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="اكتب هنا أي تفاصيل أو متطلبات خاصة..."
                  className="w-full px-3 py-2 rounded-xl bg-[#151c2c] border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#dfba73]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-700"
                >
                  ← {lang === 'ar' ? 'السابق' : 'Back'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-gradient-btn px-8 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>{lang === 'ar' ? 'جاري تأكيد الحجز...' : 'Confirming...'}</span>
                  ) : (
                    <span>{lang === 'ar' ? 'تأكيد الحجز المبدئي' : 'Confirm Reservation'}</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-lg">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white font-cairo">
                  {lang === 'ar' ? 'تقبل الله منا ومنكم صالح الأعمال' : 'Booking Request Confirmed!'}
                </h4>
                <p className="text-xs text-amber-200/80 mt-1">
                  {lang === 'ar'
                    ? 'تم تسجيل طلب حجز رحلتكم الإيمانية بنجاح لدى شركة الأجواء المدينة.'
                    : 'Your pilgrimage reservation request has been successfully registered.'}
                </p>
              </div>

              {/* Voucher Card */}
              <div className="bg-[#131b2b] p-5 rounded-2xl border-2 border-[#dfba73] text-right space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-700 pb-2.5">
                  <div>
                    <span className="text-[10px] text-zinc-400 block">{lang === 'ar' ? 'رقم الحجز المرجعي' : 'Booking Ref'}</span>
                    <span className="text-lg font-black text-[#fae29f] tracking-widest">{bookingRef}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                    {lang === 'ar' ? 'مؤكد ومسجل' : 'Confirmed'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{lang === 'ar' ? 'اسم الحاج / المعتمر:' : 'Pilgrim Name:'}</span>
                    <span className="font-bold text-white">{formData.fullName || 'ضيف الرحمن'}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{lang === 'ar' ? 'الباقة المختارة:' : 'Selected Package:'}</span>
                    <span className="font-bold text-[#dfba73]">{currentPkg.titleAr}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{lang === 'ar' ? 'عدد الأفراد:' : 'Pilgrims:'}</span>
                    <span>{formData.pilgrimsCount} {lang === 'ar' ? 'أفراد' : 'Persons'}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{lang === 'ar' ? 'المبلغ التقديري:' : 'Total Amount:'}</span>
                    <span className="font-bold text-white">{totalPrice.toLocaleString()} SAR</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-700/60 text-[11px] text-zinc-400">
                  {lang === 'ar'
                    ? 'سيقوم مستشار الحج والعمرة بالتواصل معكم خلال ساعتين عبر الواتساب لتأكيد جدول الرحلة واستلام المستندات.'
                    : 'Our dedicated pilgrim advisor will contact you within 2 hours via WhatsApp to finalize your itinerary.'}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'طباعة السند' : 'Print Voucher'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="gold-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold"
                >
                  {lang === 'ar' ? 'إغلاق والعودة للرئيسية' : 'Done & Return'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
