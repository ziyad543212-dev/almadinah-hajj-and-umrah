import { PackageItem, ReviewItem, AdditionalService, WhyChooseUsItem } from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pkg-1',
    titleAr: 'حج الباقة الملكية 5 نجوم',
    titleEn: '5-Star Premium Hajj',
    category: 'hajj',
    badgeAr: 'إقامة فاخرة VIP',
    badgeEn: 'VIP Luxury',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    priceSAR: 32500,
    durationDays: 14,
    hotelAr: 'فندق فيرمونت برج الساعة (مكة)',
    hotelEn: 'Fairmont Makkah Clock Royal Tower',
    proximityAr: 'إطلالة مباشرة أمام ساحة الحرم',
    proximityEn: 'Direct Kaaba Front View',
    transportAr: 'قطار الحرمين السريع + باصات VIP مكيفة',
    transportEn: 'VIP Haramain Train & Coach',
    amenitiesAr: ['بوفيه مفتوح كامل', 'خيام مكيفة بمشعر منى وعرفات', 'مرشد ديني وطبي مرافق', 'خدمة حقائب وVIP Lounge'],
    amenitiesEn: ['Full Open Buffet', 'Air-Conditioned VIP Tents', 'Religious & Medical Guide', 'Luggage & VIP Lounge Service'],
    rating: 4.95,
    featured: true,
    descriptionAr: 'رحلة حج متكاملة بأعلى معايير الرفاهية والسكينة في فنادق 5 نجوم مطلة مباشرة على الكعبة المشرفة مع خدمات مخيمات VIP في منى وعرفات.',
    descriptionEn: 'An all-inclusive Hajj journey with peak luxury, 5-star direct Haram view hotels, and premium VIP Mina and Arafat camps.'
  },
  {
    id: 'pkg-2',
    titleAr: 'حج التميز 5 نجوم (برج الصفوة)',
    titleEn: '5-Star Premium Hajj',
    category: 'hajj',
    badgeAr: 'باقة النخبة',
    badgeEn: 'Elite Package',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    priceSAR: 28900,
    durationDays: 12,
    hotelAr: 'فندق سويس أوتيل المقام',
    hotelEn: 'Swissôtel Al Maqam Makkah',
    proximityAr: 'أمام الحرم على بعد 50 متر',
    proximityEn: '50m Front of Haram',
    transportAr: 'سيارات خاصة VIP ومرسيدس للمجموعات',
    transportEn: 'VIP Luxury Private Transfer',
    amenitiesAr: ['إفطار وغداء فاخر', 'مخيمات ضيافة خاصة', 'زيارات المزارات النبوية', 'شريحة اتصال وإنترنت مجاناً'],
    amenitiesEn: ['Luxury Breakfast & Dinner', 'Private VIP Hospitality Tents', 'Historic Ziyarat Tour', 'Free 5G SIM & Internet'],
    rating: 4.9,
    featured: true,
    descriptionAr: 'تجربة حج مميزة تجمع بين القرب الروحاني من الحرم المكي الشريف والخدمات اللوجستية الفائقة طوال فترة المناسك.',
    descriptionEn: 'A distinctive Hajj package combining proximity to the Holy Kaaba with exceptional 24/7 dedicated logistics.'
  },
  {
    id: 'pkg-3',
    titleAr: 'عمرة النقاء الشاملة',
    titleEn: 'Standard Umrah',
    category: 'umrah',
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    priceSAR: 4200,
    durationDays: 7,
    hotelAr: 'فندق أنوار المدينة موفنبيك / مكة أنجم',
    hotelEn: 'Anwar Al Madinah Mövenpick / Makkah Anjum',
    proximityAr: 'خطوات يسيرة من الحرم النبوي والمكي',
    proximityEn: 'Few steps from Haram courtyard',
    transportAr: 'باصات حديثة موديل 2025 مكيفة',
    transportEn: 'Modern 2025 Air-Conditioned Coach',
    amenitiesAr: ['إفطار يومي شهي', 'جولات مزارات المدينة ومكة', 'مساعدة في استخراج التأشيرة', 'حقيبة هدايا المعتمر'],
    amenitiesEn: ['Daily Breakfast', 'Guided Holy Site Tours', 'Fast Visa Issuance', 'Complimentary Pilgrim Gift Pack'],
    rating: 4.85,
    featured: true,
    descriptionAr: 'باقة العمرة المتوازنة والمريحة للعائلات والأفراد، تشمل الإقامة في فنادق راقية ومواصلات منظمة وسلسة.',
    descriptionEn: 'A well-balanced and spiritually enriching Umrah experience for families and individuals with prime hotel locations.'
  },
  {
    id: 'pkg-4',
    titleAr: 'عمرة الراحة الاقتصادية المميزة',
    titleEn: 'Standard Umrah',
    category: 'umrah',
    badgeAr: 'عرض خاص',
    badgeEn: 'Special Offer',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80',
    priceSAR: 3100,
    durationDays: 5,
    hotelAr: 'فندق بولمان زمزم مكة & روف المدينة',
    hotelEn: 'Pullman Zamzam Makkah & Rove Madinah',
    proximityAr: 'منطقة أجياد المركزية قريبة للحرم',
    proximityEn: 'Ajyad Central Area near Haram',
    transportAr: 'نقل سريع ومريح من وإلى المطار والمشاعر',
    transportEn: 'Airport & Intercity Express Transfers',
    amenitiesAr: ['وجبات إفطار يومية', 'استقبال وترحيب من المطار', 'خدمة عملاء 24 ساعة', 'مياه زمزم معبأة مجاناً'],
    amenitiesEn: ['Daily Breakfast', 'Airport Meet & Greet', '24/7 Support Hotline', 'Complimentary Zamzam Water Bottle'],
    rating: 4.78,
    featured: true,
    descriptionAr: 'خيار مثالي لمن يرغب في أداء مناسك العمرة بيسر وتكلفة مدروسة مع الحفاظ على أعلى درجات الجودة والنظافة.',
    descriptionEn: 'The perfect cost-effective yet high-comfort choice for fulfilling your Umrah rituals with complete peace of mind.'
  },
  {
    id: 'pkg-5',
    titleAr: 'عمرة العشر الأواخر من رمضان',
    titleEn: 'Ramadan Last 10 Days VIP',
    category: 'ramadan',
    badgeAr: 'روحانيات رمضان',
    badgeEn: 'Ramadan Special',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    priceSAR: 18500,
    durationDays: 10,
    hotelAr: 'فندق دار التوحيد إنتركونتيننتال مكة',
    hotelEn: 'Dar Al Tawhid InterContinental Makkah',
    proximityAr: 'مباشرة في ساحة الحرم المكي',
    proximityEn: 'Directly in Haram courtyard',
    transportAr: 'خدمة ليموزين VIP خاصة',
    transportEn: 'VIP Private Chauffeur',
    amenitiesAr: ['بوفيه إفطار وسحور فاخر', 'إطلالة بانورامية على الكعبة', 'مجالس ذكر ودروس إيمانية', 'تأمين تصاريح الروضة الشريفة'],
    amenitiesEn: ['Gourmet Iftar & Suhoor Buffet', 'Panoramic Kaaba View', 'Spiritual Sessions', 'Rawdah Permit Assistance'],
    rating: 4.98,
    featured: false,
    descriptionAr: 'عش بركات وروحانيات العشر الأواخر من شهر رمضان المبارك وليالي الوتر في أقدس بقاع الأرض.',
    descriptionEn: 'Experience the profound blessings of the last ten nights of Ramadan in direct proximity to the Kaaba.'
  },
  {
    id: 'pkg-6',
    titleAr: 'باقة الحج السريع (رجال الأعمال)',
    titleEn: 'Executive Fast Track Hajj',
    category: 'vip',
    badgeAr: 'رجال الأعمال',
    badgeEn: 'Executive VIP',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    priceSAR: 45000,
    durationDays: 8,
    hotelAr: 'فندق رافلز قصر مكة',
    hotelEn: 'Raffles Makkah Palace',
    proximityAr: 'إطلالة حصرية على صحن الطواف',
    proximityEn: 'Exclusive Tawaf Floor View',
    transportAr: 'طيران خاص + سيارات فاخرة مصفحة/VIP',
    transportEn: 'Private Jet Concierge & VIP Fleet',
    amenitiesAr: ['جناح ملكي خاص', 'خدمة المساعد الشخصي 24/7', 'طاقم طبي واستشاري خاص', 'خيمة خاصة مكيفة بالكامل'],
    amenitiesEn: ['Royal Suite Accommodation', '24/7 Personal Butler', 'Private Medical Staff', 'Private Luxury Camp'],
    rating: 5.0,
    featured: false,
    descriptionAr: 'برنامج حج صمم خصيصاً للرؤساء ورجال الأعمال لضمان أداء المناسك بسلاسة تامة وتوفير الوقت والراحة القصوى.',
    descriptionEn: 'Designed for executives and VIPs demanding seamless coordination, luxury suites, and prompt concierge.'
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'why-1',
    titleAr: 'مرشدون ذوو خبرة',
    titleEn: 'Experienced Guides',
    descAr: 'نخبة من خيرة المشايخ والمرشدين لمرافقتكم وشرح المناسك خطوة بخطوة وفق الهدي النبوي.',
    descEn: 'Dedicated Islamic scholars and bilingual experts providing step-by-step guidance.',
    iconName: 'Award'
  },
  {
    id: 'why-2',
    titleAr: 'اسم موثوق ومرخص',
    titleEn: 'Trusted Name',
    descAr: 'أكثر من 15 عاماً من الريادة والاعتماد الرسمي من وزارة الحج والعمرة بالمملكة العربية السعودية.',
    descEn: 'Over 15 years of certified service recognized by the Ministry of Hajj & Umrah.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'why-3',
    titleAr: 'خدمة مخصصة VIP',
    titleEn: 'Personalized Service',
    descAr: 'برامج مصممة بعناية لتلائم احتياجات العائلات، كبار السن، والوفود برعاية متواصلة 24/7.',
    descEn: 'Customized itineraries catering to families, elderly pilgrims, and delegations.',
    iconName: 'Sparkles'
  },
  {
    id: 'why-4',
    titleAr: 'أمان وراحة تامة',
    titleEn: 'Peace of Mind & Comfort',
    descAr: 'ضمان أعلى معايير السلامة والتأمين الصحي والإقامة الفندقية المريحة بالقرب من الحرمين.',
    descEn: 'Guaranteed highest standards of hygiene, safety, medical care, and premium lodging.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'why-5',
    titleAr: 'خدماتنا السريعة',
    titleEn: 'Fast Service & Support',
    descAr: 'سرعة قياسية في إصدار التأشيرات، تصاريح نسك، وحجوزات الطيران والفنادق دون تأخير.',
    descEn: 'Record turnaround for Nusuk permits, e-visas, luxury hotel bookings, and flights.',
    iconName: 'Clock'
  },
  {
    id: 'why-6',
    titleAr: 'خدمات النقل المتميزة',
    titleEn: 'Premium Transportation',
    descAr: 'أسطول حافلات وسيارات فارهة موديل العام وقطار الحرمين السريع لتنقل مريح وسريع.',
    descEn: 'Latest fleet of luxury coaches, private cars, and Haramain High-Speed Rail passes.',
    iconName: 'PlaneTakeoff'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    nameAr: 'أحمد إبراهيم العلي',
    nameEn: 'Ahmed Ibrahim Al-Ali',
    roleAr: 'حاج معتمر - الرياض',
    roleEn: 'Pilgrim - Riyadh',
    countryAr: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    commentAr: 'تجربة فاخرة لا تُنسى مع الأجواء المدينة، كانت إقامتنا في فيرمونت برج الساعة قمة في الراحة والتنظيم في منى كان استثنائياً.',
    commentEn: 'An unforgettable spiritual experience. Our stay at the Clock Tower was pure comfort, and Mina organization was exceptional.',
    rating: 5
  },
  {
    id: 'rev-2',
    nameAr: 'الشيخ رامي عبدالمحسن',
    nameEn: 'Sheikh Rami Abdulmohsen',
    roleAr: 'منسق وفد الحج الكويتي',
    roleEn: 'Kuwait Pilgrim Delegation Head',
    countryAr: 'الكويت',
    countryEn: 'Kuwait',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    commentAr: 'خدمة احترافية بكل ما تعنيه الكلمة. المرشدون كانوا معنا في كل خطوة بالصفا والمروة والجمرات بكل طمأنينة وسرور.',
    commentEn: 'Professional service in every sense. The scholars and guides stayed with our group at every ritual with utmost care.',
    rating: 5
  },
  {
    id: 'rev-3',
    nameAr: 'الدكتورة أسمهان الشريف',
    nameEn: 'Dr. Asmahan Al-Sharif',
    roleAr: 'معتمرة مع العائلة',
    roleEn: 'Family Umrah Pilgrim',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'UAE',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    commentAr: 'سهولة الحجز وسرعة إصدار التأشيرة واستقبال المطار أراحتنا كثيراً، خصوصاً مع وجود والدي المسن. شكراً للأجواء المدينة!',
    commentEn: 'Booking ease, rapid visa issue, and warm airport reception made everything hassle-free, especially for my elderly father.',
    rating: 5
  }
];

export const ADDITIONAL_SERVICES_DATA: AdditionalService[] = [
  {
    id: 'srv-1',
    titleAr: 'معالجة وتأشيرات الدخول',
    titleEn: 'Visa Processing',
    descAr: 'استخراج تأشيرات العمرة والسياحة الإلكترونية وتصاريح نسك المعتمدة في وقت قياسي.',
    descEn: 'Fast e-visa issuance, tourist visa assistance, and Nusuk permit coordination.',
    iconName: 'CreditCard'
  },
  {
    id: 'srv-2',
    titleAr: 'حجوزات الطيران الدولية والمحلية',
    titleEn: 'Flights & Aviation',
    descAr: 'حجز أفضل المقاعد المباشرة إلى مطار جدة والمدينة المنورة بأسعار تفضيلية.',
    descEn: 'Direct flights to Jeddah and Madinah airports with flexible baggage allowances.',
    iconName: 'Plane'
  },
  {
    id: 'srv-3',
    titleAr: 'المواصلات الخاصة VIP',
    titleEn: 'VIP Transportation',
    descAr: 'تنقلات خاصة بسيارات مرسيدس وGMC حديثة وتذاكر درجة أولى لقطار الحرمين.',
    descEn: 'Private luxury SUVs, chauffeur services, and Haramain high-speed train tickets.',
    iconName: 'Car'
  },
  {
    id: 'srv-4',
    titleAr: 'تمور المدينة المنورة والهدايا',
    titleEn: 'Medina Dates & Gifts',
    descAr: 'توفير وتغليف أفخر أنواع تمر العجوة والعنبرة والمجدول والشحن المباشر إلى بلدكم.',
    descEn: 'Finest authentic Ajwa, Safawi, and Anbara dates sourced directly from Madinah farms.',
    iconName: 'Gift'
  },
  {
    id: 'srv-5',
    titleAr: 'جولات المزارات الدينية والتاريخية',
    titleEn: 'Ziyarat & Holy Sites',
    descAr: 'زيارات بصحبة مرشدين إلى مسجد قباء، جبل أحد، مجمع الملك فهد لطباعة المصحف وغار حراء.',
    descEn: 'Guided excursions to Mount Uhud, Quba Mosque, King Fahd Quran Complex, and Cave Hira.',
    iconName: 'Compass'
  }
];

export const DATES_PRODUCTS = [
  {
    id: 'd-1',
    nameAr: 'عجوة المدينة المنورة الملكية (فاخرة)',
    nameEn: 'Royal Madinah Ajwa Dates (Premium Grade A)',
    weight: '1 كجم / 1 KG',
    priceSAR: 120,
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=400&q=80',
    descAr: 'تمر العجوة المبارك من مزارع المدينة المنورة العريقة، قطفة أولى منتقاة بعناية.',
    descEn: 'Blessed Ajwa dates sourced from historic Madinah date palms, rich in natural goodness.'
  },
  {
    id: 'd-2',
    nameAr: 'تمر عنبرة المدينة الفاخر',
    nameEn: 'Premium Madinah Anbara Dates',
    weight: '1 كجم / 1 KG',
    priceSAR: 145,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=400&q=80',
    descAr: 'حبات كبيرة ولينة ذات طعم فاخر وغني مع تغليف هدايا ملكي محكم.',
    descEn: 'Large, soft, and naturally sweet dates packaged in an elegant luxury gift box.'
  },
  {
    id: 'd-3',
    nameAr: 'صندوق هدايا المعتمر (عجوة + مياه زمزم + سجادة)',
    nameEn: 'Pilgrim Gift Hamper (Ajwa + Zamzam + Luxury Mat)',
    weight: 'طقم متكامل / Full Set',
    priceSAR: 250,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    descAr: 'هدية روحانية متكاملة للأهل والأحباب تشمل العجوة الأصلية، ماء زمزم مبارك، ومسك طيب.',
    descEn: 'The perfect spiritual keepsake with authentic Ajwa dates, certified Zamzam, and musk.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    titleAr: 'الكعبة المشرفة وصحن المطاف',
    titleEn: 'The Holy Kaaba & Mataf',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
    category: 'Makkah'
  },
  {
    id: 'g-2',
    titleAr: 'المسجد النبوي الشريف بالمدينة',
    titleEn: "The Prophet's Mosque, Madinah",
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    category: 'Madinah'
  },
  {
    id: 'g-3',
    titleAr: 'أبراج البيت وبرج الساعة بمكة',
    titleEn: 'Abraj Al-Bait & Clock Tower',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&q=80',
    category: 'Hotels'
  },
  {
    id: 'g-4',
    titleAr: 'مخيمات منى وعرفات النموذجية VIP',
    titleEn: 'VIP Mina & Arafat Camps',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1000&q=80',
    category: 'Hajj'
  }
];
