export interface PackageItem {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'hajj' | 'umrah' | 'vip' | 'ramadan';
  badgeAr: string;
  badgeEn: string;
  image: string;
  priceSAR: number;
  durationDays: number;
  hotelAr: string;
  hotelEn: string;
  proximityAr: string;
  proximityEn: string;
  transportAr: string;
  transportEn: string;
  amenitiesAr: string[];
  amenitiesEn: string[];
  rating: number;
  featured: boolean;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ReviewItem {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  countryAr: string;
  countryEn: string;
  avatar: string;
  commentAr: string;
  commentEn: string;
  rating: number;
}

export interface AdditionalService {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  country: string;
  packageId: string;
  pilgrimsCount: number;
  departureDate: string;
  roomType: 'single' | 'double' | 'triple' | 'quad';
  needVisa: boolean;
  needFlights: boolean;
  specialRequests: string;
}
