export type ActiveTab = 'home' | 'about' | 'academics' | 'toppers' | 'facilities' | 'activities' | 'admissions' | 'gallery' | 'events' | 'contact';

export interface SchoolInfo {
  name: string;
  tagline: string;
  affiliation: string;
  affiliationNumber: string;
  schoolCode: string;
  establishedYear: number;
  campusSize: string;
  curriculum: string;
  medium: string;
  managedBy: string;
  phone: string;
  altPhone?: string;
  email: string;
  admissionEmail: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  officeHours: string;
  schoolHours: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface AcademicLevel {
  id: string;
  title: string;
  gradeRange: string;
  ageGroup: string;
  description: string;
  focusAreas: string[];
  keyFeatures: string[];
  image: string;
  curriculumHighlights: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: 'academic' | 'sports' | 'creative' | 'security';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  specs: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  image?: string;
}

export interface TopperStudent {
  id: string;
  name: string;
  classGrade: 'Class XII' | 'Class X';
  stream?: string;
  percentage: string;
  rankTitle: string;
  keyHighlight: string;
  avatarUrl: string;
  badgeColor?: string;
  year: string;
}

export interface SubjectTopper {
  id: string;
  subject: string;
  subjectCategory: 'science' | 'commerce' | 'humanities' | 'languages' | 'stem';
  marks: string; // e.g. "100/100"
  studentName: string;
  classGrade: string;
  stream?: string;
  photoUrl: string;
  year: string;
  achievementText?: string;
}

export type ActivityCategory =
  | 'all'
  | 'eco_environment'
  | 'academic_stem'
  | 'sports_athletics'
  | 'culture_celebrations'
  | 'excursions_tours';

export interface SchoolActivity {
  id: string;
  title: string;
  category: ActivityCategory;
  categoryLabel: string;
  caption: string;
  description: string;
  imageUrl: string;
  highlightBadge: string;
  frequencyOrDate: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'classrooms' | 'labs' | 'sports' | 'cultural' | 'celebrations';
  imageUrl: string;
  caption: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  category: string;
  description: string;
  venue: string;
  time: string;
  badge?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  isImportant?: boolean;
  linkText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string;
  quote: string;
  rating: number;
  avatar: string;
  studentClass?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'admission' | 'academics' | 'transport' | 'facilities';
}

export interface LeadershipMessage {
  designation: string;
  name: string;
  qualification: string;
  image: string;
  message: string[];
  quote: string;
  motto?: string;
  roleBadge?: string;
}

export interface AdmissionEnquiryData {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  gradeApplying: string;
  gender: string;
  dateOfBirth: string;
  previousSchool: string;
  residentialAddress: string;
  transportRequired: boolean;
  additionalNotes: string;
}
