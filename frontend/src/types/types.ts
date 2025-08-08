import { IconType } from "react-icons";

export type ColorKey = "blue" | "green" | "indigo" | "orange";

export interface CategoryItem {
  icon: IconType;
  title: string;
  description: string;
  linkText: string;
  color: ColorKey;
  link: string;
}

export interface ExamProps {
  exam_name: string;
  featured_image: string[];
  exam_short_name: string;
  uniqueId: string;
  [key: string]: unknown;
  property_id: number;
}
export interface BlogsProps {
  uniqueId?: number;
  featured_image: string[];
  title: string;
  createdAt: Date;
  author: number;
  category: string[];
  tags: string[];
  blog: string;
  author_profile: string[];
  author_name: string;
}
export interface BlogCategoryProps {
  uniqueId: number;
  blog_category: string;
}
export interface BlogTagProps {
  uniqueId: number;
  blog_tag: string;
}

export interface AdminProps {
  name: string;
  uniqueId: number;
  profile: string[];
}

export interface PropertyProps {
  uniqueId: number;
  rank: number;
  featured_image: string[];
  property_name: string;
  category: string;
  property_city: string;
  property_state: string;
  property_country: string;
  property_description: string;
  reviews?: ReviewProps[];
  property_slug: string;
  property_logo: string[];
  address: string;
  pincode: number;
  city: string;
  state: string;
  country: string;
  est_year: string;
  property_type: string;
  exams: ExamProps[];
  gallery: GalleryProps[];
  accomodation: AccommodationProps[];
  amenities: AmenitiesProps;
  working_hours: WorkingHoursProps[];
  faqs: FaqProps[];
  coupons: CouponsProps[];
  teachers: TeacherProps[];
}
export interface RankProps {
  property_id: number;
  rank: number;
  lastRank: number;
  overallScore: number;
}
export interface ReviewProps {
  uniqueId?: number;
  property_id: string | number;
  name: string;
  rating: number;
  review: string;
  createdAt: string;
}

export interface LocationProps {
  property_address: string;
  property_pincode: string;
  property_id: number;
  property_city?: string;
  property_state?: string;
  property_country?: string;
}

export interface CategoryProps {
  uniqueId: number;
  category_name: string;
}

export interface SimpleLocationProps {
  city?: string;
  state?: string;
  country?: string;
}
export interface TopLocationProps {
  city: string;
  state?: string;
  country?: string;
  count: number;
}

export interface TabProps {
  icon: IconType;
  label: string;
  id: string;
  show: boolean;
}

export interface AccommodationProps {
  accomodation_name: string;
  accomodation_description: string;
  accomodation_images: string[];
  accomodation_price: PriceProps[];
}

export interface AmenityItemObject {
  [key: string]: true | string | string[];
}

export interface AmenitiesProps {
  [category: string]: AmenityItemObject[];
}

export interface PropertyAmenities {
  propertyId: number;
  selectedAmenities: AmenitiesProps;
}

export interface WorkingHoursProps {
  day: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
}

export interface TeacherProps {
  teacher_name: string;
  designation: string;
  experience: string;
  profile: string[];
}

export interface FaqProps {
  question: string;
  answer: string;
}

export interface CouponsProps {
  coupon_code: string;
  discount: number;
  description: string;
  start_from: Date;
  valid_upto: Date;
}

export interface PriceProps {
  INR: string;
  DOLLAR: string;
}

export interface FiltersProps {
  country: string[];
  state: string[];
  city: string[];
  exam_name: string[];
  rating: string[];
  category: string[];
  property_type: string[];
}

export interface FilterOptionProps {
  name: string;
  count: number;
}

export interface CategoryOptionProps {
  name: string;
  value: string;
  count: number;
}

export interface DynamicFilterOptionsProps {
  countries: FilterOptionProps[];
  getStatesForCountries: (selectedCountries?: string[]) => string[];
  getCitiesForLocation: (
    selectedCountries?: string[],
    selectedStates?: string[]
  ) => string[];
  examsNames: FilterOptionProps[];
  categories: CategoryOptionProps[];
  propertyTypes: CategoryOptionProps[];
}

export interface FilterSearchTermsProps {
  country: string;
  state: string;
  city: string;
  exam_name: string;
  category: string;
  property_type: string;
}

export interface ExpandedFiltersProps {
  country: boolean;
  state: boolean;
  city: boolean;
  exam_name: boolean;
  rating: boolean;
  category: boolean;
  property_type: boolean;
}

export interface BreadcrumbItemProps {
  label: string;
  path?: string;
}

export interface GalleryProps {
  title: string;
  gallery: string[];
}

export interface SlidProps {
  src: string;
  alt?: string;
  title?: string;
}

export interface PropertyExam {
  exam_id: string;
  property_id: number;
  [key: string]: unknown;
}

export interface PropertyExamMainProps {
  property_id: string;
  image: string[];
}

export interface ExperienceProps {
  uniqueId?: number;
  position: string;
  property_name_id?: number;
  location: string;
  start_date: string;
  end_date: string;
  property_id?: number | null;
  property_name?: string;
  currentlyWorking: boolean;
}

export interface EducationProps {
  uniqueId?: number;
  institute: number | null;
  degree: number | null;
  start_date: string;
  end_date: string;
  currentlyStuding: boolean;
}

export interface EducationPayloadProps {
  start_date: string;
  end_date: string | null;
  currentlyStuding: boolean;
  userId: string | number;
  uniqueId: string | number;
  degreeId?: string | number;
  degree?: string;
  instituteId?: string | number;
  institute?: string;
}

export interface AllDegreeAndInstituteProps {
  degree: {
    uniqueId: number;
    degree_name: string;
  }[];
  institute: {
    uniqueId: number;
    institute_name: string;
  }[];
}

export interface UserProps {
  uniqueId: number;
  name: string;
  email: string;
  mobile_no: string;
  username: string;
  verified: boolean;
  verifyTokenExpiry: Date;
  resetTokenExpiry: Date;
  verifyToken: string;
  resetToken: string;
  avatar: string[];
  address: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  alt_mobile_no: string;
  deletionToken: true;
  banner: string[];
  _id: string;
  about: string;
  heading: string;
  role: string;
  score: number;
  resume: string;
  languages: number[];
  skills: number[];
  experiences: ExperienceProps[];
  education: EducationProps[];
}

export interface AllLanaguagesProps {
  uniqueId: number;
  language: string;
}
export interface AllSkillsProps {
  uniqueId: number;
  skill: string;
}

export interface SelectOptionProps {
  label: string;
  value: number;
}

export interface CountryProps {
  country_name: string;
}
export interface StateProps {
  name: string;
  country_name: string;
}
export interface CityProps {
  name: string;
  state_name: string;
}

export interface FormattedOptionsProps {
  label: string;
  value: string;
  id?: number;
}

export interface RatingCount {
  rating: number;
  count: number;
}

export interface DynamicFilterOptionsProps {
  countries: FilterOptionProps[];
  getStatesForCountries: (selectedCountries?: string[]) => string[];
  getCitiesForLocation: (
    selectedCountries?: string[],
    selectedStates?: string[]
  ) => string[];
  getStatesWithCounts: (selectedCountries?: string[]) => FilterOptionProps[];
  getCitiesWithCounts: (
    selectedCountries?: string[],
    selectedStates?: string[]
  ) => FilterOptionProps[];
  examsNames: FilterOptionProps[];
  categories: CategoryOptionProps[];
  propertyTypes: CategoryOptionProps[];
  ratingCounts: RatingCount[];
}
