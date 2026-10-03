# Trung Tâm Việt Hàn Nhật — Execution-Ready Implementation Plan

> **For another model to execute**: This document contains the **exact code** for every file, in the exact order they should be created. Follow each phase sequentially, running the validation gate at the end of each phase before proceeding.

> **Project path**: `D:\Sync\Works\OU\outside\web\trungtamviethantrungnhat-demo`

---

## Phase 1: Foundation (Day 1-2)

### Step 1.1 — Initialize Next.js Project

```bash
cd D:\Sync\Works\OU\outside\web\trungtamviethantrungnhat-demo

npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm

npm install framer-motion lucide-react
npm install -D @tailwindcss/typography
```

### Step 1.2 — `next.config.mjs`

Overwrite the generated file:

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### Step 1.3 — `tailwind.config.ts`

Overwrite the generated file:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e40af',
          600: '#1e3a8a',
          700: '#1e3570',
          800: '#1a2e5c',
          900: '#1e2a5e',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      fontFamily: {
        heading: ['var(--font-be-vietnam-pro)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

### Step 1.4 — `src/styles/globals.css`

Overwrite the generated file (remove all default Next.js styles):

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: 30 64 175;    /* #1e40af */
    --color-accent: 234 179 8;     /* #eab308 */
    --color-bg: 255 255 255;
    --color-text: 23 23 23;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-body text-neutral-900 bg-white antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer components {
  .section-padding {
    @apply py-16 md:py-24;
  }

  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .gradient-primary {
    @apply bg-gradient-to-r from-primary-500 to-primary-900;
  }

  .gradient-accent {
    @apply bg-gradient-to-r from-accent-400 to-accent-500;
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700;
  }
}
```

### Step 1.5 — `src/lib/utils.ts`

```ts
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";

// Simple cn utility without clsx dependency — just use template literals
// If you want full clsx support, install it: npm install clsx
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
```

> **Note**: If clsx is not available, this simple version works. Alternatively run `npm install clsx` and use `import { clsx } from "clsx"`.

### Step 1.6 — Data Files

#### `src/data/site.ts`

```ts
// src/data/site.ts
export const siteConfig = {
  name: "Trung Tâm Việt Hàn Nhật",
  nameEn: "Vietnam-Korea-Japan Center",
  description: "Trung tâm giao lưu văn hóa Việt Nam - Hàn Quốc - Nhật Bản, trực thuộc Trường Đại học Mở TP.HCM",
  descriptionEn: "Vietnam-Korea-Japan Cultural Exchange Center under Ho Chi Minh City Open University",
  url: "https://viethannhat.ou.edu.vn",
  ogImage: "/images/og/default.jpg",
  address: "97 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3, TP.HCM",
  phone: "(028) 3930 0089",
  email: "viethannhat@ou.edu.vn",
  social: {
    facebook: "https://facebook.com/viethannhat",
    zalo: "https://zalo.me/viethannhat",
    youtube: "https://youtube.com/@viethannhat",
  },
};

export const navItems = [
  { label: "Trang chủ", labelEn: "Home", href: "/" },
  { label: "Giới thiệu", labelEn: "About", href: "/about" },
  { label: "Chương trình", labelEn: "Programs", href: "/programs" },
  { label: "Tin tức", labelEn: "News", href: "/news" },
  { label: "Đội ngũ", labelEn: "Faculty", href: "/faculty" },
  { label: "Tuyển sinh", labelEn: "Admissions", href: "/admissions" },
  { label: "Liên hệ", labelEn: "Contact", href: "/contact" },
];
```

#### `src/data/programs.ts`

```ts
// src/data/programs.ts
export interface Program {
  slug: string;
  title: string;
  titleEn: string;
  category: "korean" | "japanese" | "exchange";
  description: string;
  descriptionEn: string;
  duration: string;
  image: string;
  features: string[];
}

export const programs: Program[] = [
  {
    slug: "korean-language-culture",
    title: "Ngôn ngữ & Văn hóa Hàn Quốc",
    titleEn: "Korean Language & Culture",
    category: "korean",
    description: "Chương trình đào tạo ngôn ngữ và tìm hiểu văn hóa Hàn Quốc, từ cơ bản đến nâng cao. Giảng viên bản ngữ, phương pháp hiện đại.",
    descriptionEn: "Korean language and culture training program, from beginner to advanced. Native instructors, modern methodology.",
    duration: "12 tháng",
    image: "/images/placeholder/program-korean-1.jpg",
    features: ["Giảng viên bản ngữ", "Chứng chỉ TOPIK", "Giao lưu văn hóa", "Học bổng du học"],
  },
  {
    slug: "korean-business",
    title: "Tiếng Hàn thương mại",
    titleEn: "Business Korean",
    category: "korean",
    description: "Khóa học tiếng Hàn chuyên ngành thương mại, giao tiếp doanh nghiệp, đàm phán và hợp tác kinh doanh Việt-Hàn.",
    descriptionEn: "Business Korean course focusing on corporate communication, negotiation, and Vietnam-Korea business cooperation.",
    duration: "6 tháng",
    image: "/images/placeholder/program-korean-2.jpg",
    features: ["Thương mại quốc tế", "Giao tiếp doanh nghiệp", "Thực tập doanh nghiệp Hàn"],
  },
  {
    slug: "japanese-language-culture",
    title: "Ngôn ngữ & Văn hóa Nhật Bản",
    titleEn: "Japanese Language & Culture",
    category: "japanese",
    description: "Chương trình đào tạo tiếng Nhật toàn diện, kết hợp văn hóa truyền thống và hiện đại Nhật Bản.",
    descriptionEn: "Comprehensive Japanese language training program, combining traditional and modern Japanese culture.",
    duration: "12 tháng",
    image: "/images/placeholder/program-japanese-1.jpg",
    features: ["Giảng viên bản ngữ", "Luyện thi JLPT", "Trà đạo & Thư pháp", "Du học Nhật Bản"],
  },
  {
    slug: "japanese-n2-preparation",
    title: "Luyện thi JLPT N2",
    titleEn: "JLPT N2 Preparation",
    category: "japanese",
    description: "Khóa luyện thi chuyên sâu JLPT N2, cam kết đầu ra. Tài liệu cập nhật, đề thi thử hàng tuần.",
    descriptionEn: "Intensive JLPT N2 preparation course with guaranteed outcomes. Updated materials, weekly mock exams.",
    duration: "4 tháng",
    image: "/images/placeholder/program-japanese-2.jpg",
    features: ["Cam kết đầu ra", "Đề thi thử hàng tuần", "Tài liệu độc quyền"],
  },
  {
    slug: "exchange-program-korea",
    title: "Chương trình trao đổi Hàn Quốc",
    titleEn: "Korea Exchange Program",
    category: "exchange",
    description: "Chương trình trao đổi sinh viên với các trường đại học đối tác tại Hàn Quốc. Thời gian 1-2 học kỳ.",
    descriptionEn: "Student exchange program with partner universities in Korea. Duration: 1-2 semesters.",
    duration: "1-2 học kỳ",
    image: "/images/placeholder/program-exchange-1.jpg",
    features: ["Học bổng toàn phần", "Công nhận tín chỉ", "Hỗ trợ visa", "Ở ký túc xá"],
  },
  {
    slug: "exchange-program-japan",
    title: "Chương trình trao đổi Nhật Bản",
    titleEn: "Japan Exchange Program",
    category: "exchange",
    description: "Chương trình trao đổi sinh viên với các trường đại học đối tác tại Nhật Bản. Trải nghiệm văn hóa thực tế.",
    descriptionEn: "Student exchange program with partner universities in Japan. Real cultural experience.",
    duration: "1-2 học kỳ",
    image: "/images/placeholder/program-exchange-2.jpg",
    features: ["Học bổng JASSO", "Công nhận tín chỉ", "Thực tập doanh nghiệp", "Homestay"],
  },
];

export function getProgramsByCategory(category?: string): Program[] {
  if (!category || category === "all") return programs;
  return programs.filter((p) => p.category === category);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
```

#### `src/data/news.ts`

```ts
// src/data/news.ts
export interface NewsArticle {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  category: "announcement" | "event" | "scholarship";
  date: string;
  image: string;
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "tuyen-sinh-khoa-moi-2026",
    title: "Thông báo tuyển sinh khóa mới 2026",
    titleEn: "New Course Enrollment 2026 Announcement",
    excerpt: "Trung tâm Việt Hàn Nhật thông báo mở đăng ký khóa học mới cho năm 2026. Nhiều ưu đãi hấp dẫn cho học viên đăng ký sớm.",
    excerptEn: "The Vietnam-Korea-Japan Center announces new course registration for 2026. Many attractive offers for early registrants.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "announcement",
    date: "2026-08-20",
    image: "/images/placeholder/news-1.jpg",
    featured: true,
  },
  {
    slug: "le-hoi-van-hoa-han-nhat",
    title: "Lễ hội giao lưu văn hóa Hàn - Nhật 2026",
    titleEn: "Korean-Japanese Cultural Festival 2026",
    excerpt: "Sự kiện giao lưu văn hóa thường niên quy tụ sinh viên và giảng viên từ ba nước Việt Nam, Hàn Quốc và Nhật Bản.",
    excerptEn: "Annual cultural exchange event bringing together students and faculty from Vietnam, Korea, and Japan.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "event",
    date: "2026-08-15",
    image: "/images/placeholder/news-2.jpg",
    featured: false,
  },
  {
    slug: "hoc-bong-du-hoc-han-quoc",
    title: "Học bổng du học Hàn Quốc kỳ Xuân 2027",
    titleEn: "Korea Study Abroad Scholarship Spring 2027",
    excerpt: "Cơ hội nhận học bổng toàn phần du học Hàn Quốc tại các trường đại học đối tác. Hạn nộp hồ sơ: 30/11/2026.",
    excerptEn: "Full scholarship opportunity to study in Korea at partner universities. Application deadline: November 30, 2026.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "scholarship",
    date: "2026-08-10",
    image: "/images/placeholder/news-3.jpg",
    featured: false,
  },
  {
    slug: "ky-thi-jlpt-thang-12",
    title: "Hướng dẫn đăng ký thi JLPT tháng 12/2026",
    titleEn: "JLPT December 2026 Registration Guide",
    excerpt: "Thông tin chi tiết về kỳ thi năng lực tiếng Nhật JLPT tháng 12/2026 và hướng dẫn đăng ký.",
    excerptEn: "Details about the JLPT December 2026 exam and registration instructions.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "announcement",
    date: "2026-08-05",
    image: "/images/placeholder/news-4.jpg",
    featured: false,
  },
  {
    slug: "hoc-bong-jasso-2027",
    title: "Học bổng JASSO du học Nhật Bản 2027",
    titleEn: "JASSO Scholarship Japan 2027",
    excerpt: "Thông tin về chương trình học bổng JASSO cho sinh viên trao đổi tại Nhật Bản năm 2027.",
    excerptEn: "Information about the JASSO scholarship program for exchange students in Japan 2027.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "scholarship",
    date: "2026-07-28",
    image: "/images/placeholder/news-5.jpg",
    featured: false,
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
```

#### `src/data/faculty.ts`

```ts
// src/data/faculty.ts
export interface FacultyMember {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  bio: string;
  bioEn: string;
  image: string;
  specialization: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    name: "PGS.TS. Nguyễn Văn A",
    nameEn: "Assoc. Prof. Dr. Nguyen Van A",
    title: "Giám đốc Trung tâm",
    titleEn: "Center Director",
    bio: "Hơn 20 năm kinh nghiệm trong lĩnh vực giáo dục quốc tế và giao lưu văn hóa Đông Á.",
    bioEn: "Over 20 years of experience in international education and East Asian cultural exchange.",
    image: "/images/placeholder/faculty-1.jpg",
    specialization: "Quản lý giáo dục quốc tế",
  },
  {
    name: "TS. Kim Min-ji",
    nameEn: "Dr. Kim Min-ji",
    title: "Trưởng bộ phận Hàn Quốc học",
    titleEn: "Head of Korean Studies",
    bio: "Tiến sĩ ngôn ngữ học từ Đại học Seoul, chuyên gia đào tạo tiếng Hàn cho người Việt.",
    bioEn: "PhD in Linguistics from Seoul National University, expert in Korean language training for Vietnamese speakers.",
    image: "/images/placeholder/faculty-2.jpg",
    specialization: "Ngôn ngữ Hàn Quốc",
  },
  {
    name: "TS. Tanaka Yuki",
    nameEn: "Dr. Tanaka Yuki",
    title: "Trưởng bộ phận Nhật Bản học",
    titleEn: "Head of Japanese Studies",
    bio: "Tốt nghiệp Đại học Tokyo, 15 năm giảng dạy tiếng Nhật tại Việt Nam.",
    bioEn: "Graduate of the University of Tokyo, 15 years of teaching Japanese in Vietnam.",
    image: "/images/placeholder/faculty-3.jpg",
    specialization: "Ngôn ngữ & Văn hóa Nhật",
  },
  {
    name: "ThS. Trần Thị B",
    nameEn: "MA. Tran Thi B",
    title: "Giảng viên tiếng Hàn",
    titleEn: "Korean Language Instructor",
    bio: "Thạc sĩ Hàn Quốc học, TOPIK cấp 6, chuyên đào tạo tiếng Hàn giao tiếp và thương mại.",
    bioEn: "Master's in Korean Studies, TOPIK Level 6, specializes in conversational and business Korean.",
    image: "/images/placeholder/faculty-4.jpg",
    specialization: "Tiếng Hàn thương mại",
  },
  {
    name: "ThS. Lê Văn C",
    nameEn: "MA. Le Van C",
    title: "Giảng viên tiếng Nhật",
    titleEn: "Japanese Language Instructor",
    bio: "Thạc sĩ Nhật Bản học, JLPT N1, 10 năm kinh nghiệm luyện thi JLPT các cấp độ.",
    bioEn: "Master's in Japanese Studies, JLPT N1, 10 years of experience in JLPT exam preparation.",
    image: "/images/placeholder/faculty-5.jpg",
    specialization: "Luyện thi JLPT",
  },
  {
    name: "ThS. Park Soo-yeon",
    nameEn: "MA. Park Soo-yeon",
    title: "Điều phối viên chương trình trao đổi",
    titleEn: "Exchange Program Coordinator",
    bio: "Chuyên gia điều phối chương trình trao đổi sinh viên quốc tế Việt-Hàn-Nhật.",
    bioEn: "International student exchange program coordinator for Vietnam-Korea-Japan programs.",
    image: "/images/placeholder/faculty-6.jpg",
    specialization: "Trao đổi quốc tế",
  },
];
```

#### `src/data/i18n.ts`

```ts
// src/data/i18n.ts
export type Locale = "vi" | "en";

export const translations = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      programs: "Chương trình",
      news: "Tin tức",
      faculty: "Đội ngũ",
      admissions: "Tuyển sinh",
      contact: "Liên hệ",
    },
    hero: {
      title: "Trung Tâm Việt Hàn Nhật",
      subtitle: "Cầu nối văn hóa Việt Nam • Hàn Quốc • Nhật Bản",
      cta1: "Khám phá chương trình",
      cta2: "Liên hệ tư vấn",
    },
    sections: {
      features: "Chương trình nổi bật",
      latestNews: "Tin tức mới nhất",
      stats: "Con số ấn tượng",
      partners: "Đối tác",
      cta: "Sẵn sàng bắt đầu hành trình?",
      ctaSub: "Đăng ký ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia của chúng tôi",
      ctaButton: "Đăng ký tư vấn",
    },
    about: {
      title: "Giới thiệu",
      mission: "Sứ mệnh",
      vision: "Tầm nhìn",
      history: "Lịch sử hình thành",
    },
    programs: {
      title: "Chương trình đào tạo",
      all: "Tất cả",
      korean: "Hàn Quốc",
      japanese: "Nhật Bản",
      exchange: "Trao đổi",
      duration: "Thời lượng",
      viewDetails: "Xem chi tiết",
    },
    news: {
      title: "Tin tức & Sự kiện",
      readMore: "Đọc thêm",
      viewAll: "Xem tất cả",
    },
    faculty: {
      title: "Đội ngũ giảng viên & chuyên gia",
    },
    admissions: {
      title: "Thông tin tuyển sinh",
      timeline: "Quy trình đăng ký",
      form: "Đăng ký nhập học",
      fullName: "Họ và tên",
      email: "Email",
      phone: "Số điện thoại",
      program: "Chương trình quan tâm",
      message: "Lời nhắn",
      submit: "Gửi đăng ký",
    },
    contact: {
      title: "Liên hệ",
      formTitle: "Gửi tin nhắn cho chúng tôi",
      name: "Họ và tên",
      email: "Email",
      subject: "Chủ đề",
      message: "Nội dung",
      send: "Gửi tin nhắn",
      info: "Thông tin liên hệ",
      address: "Địa chỉ",
      phone: "Điện thoại",
      officeHours: "Giờ làm việc",
      officeHoursValue: "Thứ 2 - Thứ 6: 8:00 - 17:00",
    },
    footer: {
      description: "Trung tâm giao lưu văn hóa Việt Nam - Hàn Quốc - Nhật Bản, trực thuộc Trường Đại học Mở TP.HCM",
      quickLinks: "Liên kết nhanh",
      programs: "Chương trình",
      contactInfo: "Liên hệ",
      copyright: "© 2026 Trung Tâm Việt Hàn Nhật - Trường Đại học Mở TP.HCM",
    },
    stats: {
      students: "Học viên",
      programs: "Chương trình",
      partners: "Đối tác",
      years: "Năm hoạt động",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      programs: "Programs",
      news: "News",
      faculty: "Faculty",
      admissions: "Admissions",
      contact: "Contact",
    },
    hero: {
      title: "Vietnam-Korea-Japan Center",
      subtitle: "Bridging Cultures: Vietnam • Korea • Japan",
      cta1: "Explore Programs",
      cta2: "Contact Us",
    },
    sections: {
      features: "Featured Programs",
      latestNews: "Latest News",
      stats: "Our Impact",
      partners: "Partners",
      cta: "Ready to Start Your Journey?",
      ctaSub: "Register now for free consultation from our expert team",
      ctaButton: "Register for Consultation",
    },
    about: {
      title: "About Us",
      mission: "Our Mission",
      vision: "Our Vision",
      history: "Our History",
    },
    programs: {
      title: "Training Programs",
      all: "All",
      korean: "Korean",
      japanese: "Japanese",
      exchange: "Exchange",
      duration: "Duration",
      viewDetails: "View Details",
    },
    news: {
      title: "News & Events",
      readMore: "Read More",
      viewAll: "View All",
    },
    faculty: {
      title: "Faculty & Experts",
    },
    admissions: {
      title: "Admissions Information",
      timeline: "Application Process",
      form: "Registration Form",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      program: "Program of Interest",
      message: "Message",
      submit: "Submit Application",
    },
    contact: {
      title: "Contact",
      formTitle: "Send Us a Message",
      name: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      info: "Contact Information",
      address: "Address",
      phone: "Phone",
      officeHours: "Office Hours",
      officeHoursValue: "Monday - Friday: 8:00 AM - 5:00 PM",
    },
    footer: {
      description: "Vietnam-Korea-Japan Cultural Exchange Center under Ho Chi Minh City Open University",
      quickLinks: "Quick Links",
      programs: "Programs",
      contactInfo: "Contact",
      copyright: "© 2026 Vietnam-Korea-Japan Center - HCMC Open University",
    },
    stats: {
      students: "Students",
      programs: "Programs",
      partners: "Partners",
      years: "Years Active",
    },
  },
} as const;

export type TranslationKeys = typeof translations.vi;
```

### Step 1.7 — Layout Components

#### `src/components/layout/Container.tsx`

```tsx
// src/components/layout/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

#### `src/components/layout/Header.tsx`

```tsx
// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { navItems } from "@/data/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLabels = [
    t.nav.home, t.nav.about, t.nav.programs, t.nav.news,
    t.nav.faculty, t.nav.admissions, t.nav.contact,
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center text-white font-heading font-bold text-lg group-hover:bg-primary-600 transition-colors">
              VHN
            </div>
            <div className="hidden sm:block">
              <p className={`font-heading font-bold text-sm leading-tight ${isScrolled ? "text-primary-900" : "text-primary-900"}`}>
                {locale === "vi" ? "Trung Tâm" : "Center"}
              </p>
              <p className={`font-heading font-semibold text-xs ${isScrolled ? "text-primary-600" : "text-primary-700"}`}>
                {locale === "vi" ? "Việt Hàn Nhật" : "Vietnam-Korea-Japan"}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary-500 bg-primary-50"
                      : "text-neutral-700 hover:text-primary-500 hover:bg-neutral-50"
                  }`}
                >
                  {navLabels[i]}
                </Link>
              );
            })}
          </div>

          {/* Language Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "vi" ? "EN" : "VI"}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-neutral-100 shadow-lg overflow-hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive
                            ? "text-primary-500 bg-primary-50"
                            : "text-neutral-700 hover:bg-neutral-50"
                        }`}
                      >
                        {navLabels[i]}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

#### `src/components/layout/Footer.tsx`

```tsx
// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";
import { siteConfig, navItems } from "@/data/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-900 text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-400 flex items-center justify-center text-primary-900 font-heading font-bold text-lg">
                VHN
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Trung Tâm</p>
                <p className="font-heading font-semibold text-xs text-primary-200">Việt Hàn Nhật</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {navItems.slice(1).map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-200 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">
              {t.footer.programs}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-primary-200 hover:text-white text-sm transition-colors">🇰🇷 Hàn Quốc học</Link></li>
              <li><Link href="/programs" className="text-primary-200 hover:text-white text-sm transition-colors">🇯🇵 Nhật Bản học</Link></li>
              <li><Link href="/programs" className="text-primary-200 hover:text-white text-sm transition-colors">🔄 Chương trình trao đổi</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-primary-200">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-200">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3 text-sm text-primary-200">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <Container className="py-4">
          <p className="text-center text-primary-300 text-xs">
            {t.footer.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
```

#### `src/components/providers/LanguageProvider.tsx`

```tsx
// src/components/providers/LanguageProvider.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type Locale, type TranslationKeys, translations } from "@/data/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "vi" || saved === "en")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === "vi" ? "en" : "vi");
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
```

### Step 1.8 — UI Components

#### `src/components/ui/Button.tsx`

```tsx
// src/components/ui/Button.tsx
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
  secondary: "bg-accent-400 text-primary-900 hover:bg-accent-500 shadow-lg shadow-accent-400/25",
  outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
  ghost: "text-primary-500 hover:bg-primary-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  children, variant = "primary", size = "md", href, className = "", onClick, type = "button", disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return <Link href={href} className={baseClasses}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>{children}</button>;
}
```

#### `src/components/ui/Card.tsx`

```tsx
// src/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-neutral-100 overflow-hidden ${hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : ""} ${className}`}>
      {children}
    </div>
  );
}
```

#### `src/components/ui/Badge.tsx`

```tsx
// src/components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "korean" | "japanese" | "exchange";
}

const badgeVariants = {
  default: "bg-neutral-100 text-neutral-700",
  korean: "bg-red-50 text-red-700",
  japanese: "bg-pink-50 text-pink-700",
  exchange: "bg-blue-50 text-blue-700",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeVariants[variant]}`}>
      {children}
    </span>
  );
}
```

#### `src/components/ui/SectionHeading.tsx`

```tsx
// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
        {title}
      </h2>
      <div className={`w-16 h-1 bg-accent-400 rounded-full mb-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
```

#### `src/components/ui/Input.tsx`

```tsx
// src/components/ui/Input.tsx
interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

export default function Input({ label, type = "text", name, value, onChange, required, error, placeholder }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-xl border ${error ? "border-red-400 focus:ring-red-500" : "border-neutral-200 focus:ring-primary-500"} focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
```

#### `src/components/ui/Textarea.tsx`

```tsx
// src/components/ui/Textarea.tsx
interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  rows?: number;
  placeholder?: string;
}

export default function Textarea({ label, name, value, onChange, required, error, rows = 4, placeholder }: TextareaProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-xl border ${error ? "border-red-400 focus:ring-red-500" : "border-neutral-200 focus:ring-primary-500"} focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm resize-none`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
```

### Step 1.9 — Root Layout

#### `src/app/layout.tsx`

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trung Tâm Việt Hàn Nhật - Trường Đại học Mở TP.HCM",
    template: "%s | Trung Tâm Việt Hàn Nhật",
  },
  description: "Trung tâm giao lưu văn hóa Việt Nam - Hàn Quốc - Nhật Bản, trực thuộc Trường Đại học Mở TP.HCM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${beVietnamPro.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### Step 1.10 — Placeholder Home Page (minimal, to pass Gate 1)

#### `src/app/page.tsx`

```tsx
// src/app/page.tsx (temporary — will be replaced in Phase 2)
export default function Home() {
  return (
    <div className="container-custom section-padding">
      <h1 className="font-heading text-4xl font-bold">Trung Tâm Việt Hàn Nhật</h1>
      <p className="text-neutral-600 mt-4">Website coming soon.</p>
    </div>
  );
}
```

### Step 1.11 — Deployment Files

#### `Dockerfile`

```dockerfile
# Dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Production
FROM nginx:alpine AS runner
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid
USER nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
```

#### `nginx.conf`

```nginx
# nginx.conf
server {
    listen 8080;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types text/plain text/css text/javascript application/javascript application/json application/xml image/svg+xml font/woff2;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        expires 30d;
        add_header Cache-Control "public";
    }

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
```

#### `.dockerignore`

```
node_modules
.next
out
.git
.github
*.md
.env*
.vscode
```

#### `.github/workflows/deploy.yml`

```yaml
# .github/workflows/deploy.yml
name: Build & Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  quality:
    name: "🔍 Lint & Type Check"
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci --frozen-lockfile
      - run: npm run lint
      - run: npx tsc --noEmit

  build:
    name: "🐳 Build & Push Image"
    runs-on: ubuntu-latest
    needs: quality
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=sha,prefix=
            type=raw,value=latest
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy:
    name: "🚀 Deploy to Server"
    runs-on: ubuntu-latest
    needs: build
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    environment: production
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.DEPLOY_HOST }}
          username: ${{ secrets.DEPLOY_USER }}
          key: ${{ secrets.DEPLOY_SSH_KEY }}
          script: |
            docker pull ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
            docker stop viethannhat-web 2>/dev/null || true
            docker rm viethannhat-web 2>/dev/null || true
            docker run -d \
              --name viethannhat-web \
              --restart unless-stopped \
              -p 8080:8080 \
              ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
            docker image prune -f
```

### ✅ Gate 1 — Validate Foundation

```bash
npm run lint
npx tsc --noEmit
npm run build
docker build -t viethannhat-web:phase1 .
docker run -d --name test -p 8080:8080 viethannhat-web:phase1
curl -f http://localhost:8080/
docker stop test && docker rm test
```

**All must pass before proceeding to Phase 2.**

---

## Phase 2: Home Page (Day 2-3)

### Step 2.1 — `src/components/home/HeroSection.tsx`

```tsx
// src/components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text — 2/5 (40%) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Đại học Mở TP.HCM
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/programs" size="lg">{t.hero.cta1}</Button>
              <Button href="/contact" variant="outline" size="lg">{t.hero.cta2}</Button>
            </div>
          </motion.div>

          {/* Image — 3/5 (60%) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-200 to-accent-100 flex items-center justify-center overflow-hidden">
                {/* Placeholder — replace with actual hero image */}
                <div className="text-center p-8">
                  <p className="text-6xl mb-4">🇻🇳 🇰🇷 🇯🇵</p>
                  <p className="text-primary-600 font-heading font-semibold text-lg">Hero Image Placeholder</p>
                  <p className="text-primary-400 text-sm mt-2">1200×900 recommended</p>
                </div>
              </div>
              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-2xl font-bold text-primary-500">500+</p>
                <p className="text-xs text-neutral-500">Học viên mỗi năm</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
```

### Step 2.2 — `src/components/home/FeatureGrid.tsx`

```tsx
// src/components/home/FeatureGrid.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

const features = [
  { icon: "🇰🇷", title: "Hàn Quốc học", titleEn: "Korean Studies", desc: "Ngôn ngữ, văn hóa và cơ hội du học Hàn Quốc", descEn: "Language, culture, and study abroad in Korea", href: "/programs", color: "from-red-50 to-red-100 border-red-200" },
  { icon: "🇯🇵", title: "Nhật Bản học", titleEn: "Japanese Studies", desc: "Tiếng Nhật, JLPT và trải nghiệm văn hóa Nhật", descEn: "Japanese language, JLPT, and cultural experience", href: "/programs", color: "from-pink-50 to-pink-100 border-pink-200" },
  { icon: "🔄", title: "Trao đổi quốc tế", titleEn: "International Exchange", desc: "Chương trình trao đổi sinh viên với đối tác quốc tế", descEn: "Student exchange programs with international partners", href: "/programs", color: "from-blue-50 to-blue-100 border-blue-200" },
];

export default function FeatureGrid() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title={t.sections.features} />
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={f.href} className="block group">
                <div className={`rounded-2xl border bg-gradient-to-br ${f.color} p-8 h-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300`}>
                  <span className="text-5xl block mb-4">{f.icon}</span>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                    {locale === "vi" ? f.title : f.titleEn}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {locale === "vi" ? f.desc : f.descEn}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

### Step 2.3 — `src/components/home/StatsCounter.tsx`

```tsx
// src/components/home/StatsCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const stats = [
  { value: 500, suffix: "+", labelKey: "students" as const },
  { value: 20, suffix: "+", labelKey: "programs" as const },
  { value: 10, suffix: "+", labelKey: "partners" as const },
  { value: 15, suffix: "", labelKey: "years" as const },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

export default function StatsCounter() {
  const { t } = useLanguage();

  return (
    <section className="section-padding gradient-primary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const { count, ref } = useCountUp(stat.value);
            return (
              <motion.div
                key={i}
                ref={ref}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-heading font-extrabold mb-2">
                  {count}{stat.suffix}
                </p>
                <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">
                  {t.stats[stat.labelKey]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
```

### Step 2.4 — `src/components/home/LatestNews.tsx`

```tsx
// src/components/home/LatestNews.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { newsArticles } from "@/data/news";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LatestNews() {
  const { locale, t } = useLanguage();
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading title={t.sections.latestNews} />
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
                  <p className="text-neutral-400 text-sm">Image Placeholder</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{article.category}</Badge>
                    <span className="text-xs text-neutral-400">{article.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-2 line-clamp-2">
                    {locale === "vi" ? article.title : article.titleEn}
                  </h3>
                  <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
                    {locale === "vi" ? article.excerpt : article.excerptEn}
                  </p>
                  <Link href={`/news/${article.slug}`} className="text-primary-500 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    {t.news.readMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/news" className="text-primary-500 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
            {t.news.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
```

### Step 2.5 — `src/components/home/CTABanner.tsx`

```tsx
// src/components/home/CTABanner.tsx
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 via-primary-600 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {t.sections.cta}
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            {t.sections.ctaSub}
          </p>
          <Button href="/admissions" variant="secondary" size="lg">
            {t.sections.ctaButton}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
```

### Step 2.6 — `src/components/home/PartnersSection.tsx`

```tsx
// src/components/home/PartnersSection.tsx
"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

const partners = [
  "Seoul National University", "Korea University", "Yonsei University",
  "University of Tokyo", "Osaka University", "Kyoto University",
];

export default function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title={t.sections.partners} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((name, i) => (
            <div key={i} className="h-20 rounded-xl border border-neutral-200 flex items-center justify-center px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <p className="text-xs text-neutral-500 font-medium text-center">{name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

### Step 2.7 — Compose Home Page: `src/app/page.tsx`

Overwrite the placeholder:

```tsx
// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import StatsCounter from "@/components/home/StatsCounter";
import LatestNews from "@/components/home/LatestNews";
import CTABanner from "@/components/home/CTABanner";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <StatsCounter />
      <LatestNews />
      <CTABanner />
      <PartnersSection />
    </>
  );
}
```

### ✅ Gate 2 — Validate Home Page

```bash
npm run lint && npx tsc --noEmit && npm run build
```

---

## Phase 3: Content Pages (Day 3-5)

### Step 3.1 — Programs Page: `src/app/programs/page.tsx`

```tsx
// src/app/programs/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { useLanguage } from "@/components/providers/LanguageProvider";

const filters = [
  { key: "all", labelKey: "all" as const },
  { key: "korean", labelKey: "korean" as const },
  { key: "japanese", labelKey: "japanese" as const },
  { key: "exchange", labelKey: "exchange" as const },
];

export default function ProgramsPage() {
  const [active, setActive] = useState("all");
  const { locale, t } = useLanguage();
  const filtered = active === "all" ? programs : programs.filter(p => p.category === active);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={t.programs.title} />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === f.key ? "bg-primary-500 text-white shadow-lg" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
            >
              {t.programs[f.labelKey]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(program => (
              <motion.div
                key={program.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
                    <p className="text-neutral-400 text-sm">Image Placeholder</p>
                  </div>
                  <div className="p-5">
                    <Badge variant={program.category === "korean" ? "korean" : program.category === "japanese" ? "japanese" : "exchange"}>
                      {t.programs[program.category as keyof typeof t.programs] || program.category}
                    </Badge>
                    <h3 className="font-heading font-bold text-lg text-neutral-900 mt-3 mb-2">
                      {locale === "vi" ? program.title : program.titleEn}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                      {locale === "vi" ? program.description : program.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-400">{t.programs.duration}: {program.duration}</span>
                      <Button href={`/programs/${program.slug}`} variant="ghost" size="sm">{t.programs.viewDetails}</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.2 — Program Detail Page: `src/app/programs/[slug]/page.tsx`

```tsx
// src/app/programs/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { getProgramBySlug, programs } from "@/data/programs";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function generateStaticParams() {
  return programs.map(p => ({ slug: p.slug }));
}

export default function ProgramDetailPage() {
  const params = useParams();
  const { locale } = useLanguage();
  const program = getProgramBySlug(params.slug as string);

  if (!program) return <Container className="section-padding"><p>Program not found.</p></Container>;

  return (
    <section className="section-padding">
      <Container>
        <Button href="/programs" variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center mb-8">
              <p className="text-neutral-400">Image Placeholder</p>
            </div>
            <Badge variant={program.category === "korean" ? "korean" : program.category === "japanese" ? "japanese" : "exchange"}>
              {program.category}
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
              {locale === "vi" ? program.title : program.titleEn}
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              {locale === "vi" ? program.description : program.descriptionEn}
            </p>
            <div className="prose prose-neutral max-w-none">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-neutral-50 rounded-2xl p-6 sticky top-24">
              <h3 className="font-heading font-bold text-lg mb-4">Thông tin nhanh</h3>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200">
                <Clock className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-xs text-neutral-400">Thời lượng</p>
                  <p className="font-medium text-sm">{program.duration}</p>
                </div>
              </div>
              <h4 className="font-medium text-sm mb-3">Điểm nổi bật</h4>
              <ul className="space-y-2 mb-6">
                {program.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/admissions" size="lg" className="w-full">Đăng ký ngay</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.3 — News Page: `src/app/news/page.tsx`

```tsx
// src/app/news/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { newsArticles } from "@/data/news";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function NewsPage() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={t.news.title} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card>
                <div className={`aspect-[16/10] flex items-center justify-center ${article.featured ? "bg-gradient-to-br from-primary-200 to-accent-100" : "bg-gradient-to-br from-neutral-200 to-neutral-100"}`}>
                  <p className="text-neutral-400 text-sm">Image Placeholder</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{article.category}</Badge>
                    <span className="text-xs text-neutral-400">{article.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-2 line-clamp-2">
                    {locale === "vi" ? article.title : article.titleEn}
                  </h3>
                  <p className="text-neutral-600 text-sm line-clamp-3 mb-3">
                    {locale === "vi" ? article.excerpt : article.excerptEn}
                  </p>
                  <Link href={`/news/${article.slug}`} className="text-primary-500 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    {t.news.readMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.4 — News Detail: `src/app/news/[slug]/page.tsx`

```tsx
// src/app/news/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { getNewsArticleBySlug, newsArticles } from "@/data/news";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function generateStaticParams() {
  return newsArticles.map(a => ({ slug: a.slug }));
}

export default function NewsDetailPage() {
  const params = useParams();
  const { locale } = useLanguage();
  const article = getNewsArticleBySlug(params.slug as string);

  if (!article) return <Container className="section-padding"><p>Article not found.</p></Container>;

  return (
    <section className="section-padding">
      <Container className="max-w-4xl">
        <Button href="/news" variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <div className="flex items-center gap-3 mb-4">
          <Badge>{article.category}</Badge>
          <span className="text-sm text-neutral-400 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          {locale === "vi" ? article.title : article.titleEn}
        </h1>
        <div className="aspect-[2/1] rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center mb-8">
          <p className="text-neutral-400">Image Placeholder</p>
        </div>
        <div className="prose prose-neutral prose-lg max-w-none">
          <p className="lead">{locale === "vi" ? article.excerpt : article.excerptEn}</p>
          <p>{article.content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, mi eget laoreet varius, enim nunc ultricies nulla, sit amet fermentum enim lorem at felis.</p>
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.5 — Faculty Page: `src/app/faculty/page.tsx`

```tsx
// src/app/faculty/page.tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { facultyMembers } from "@/data/faculty";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function FacultyPage() {
  const { locale, t } = useLanguage();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={t.faculty.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-200 to-accent-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-neutral-900">
                {locale === "vi" ? member.name : member.nameEn}
              </h3>
              <p className="text-primary-500 text-sm font-medium mb-2">
                {locale === "vi" ? member.title : member.titleEn}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {locale === "vi" ? member.bio : member.bioEn}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.6 — About Page: `src/app/about/page.tsx`

```tsx
// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Eye, BookOpen } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={t.about.title} />

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-neutral-600 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trung Tâm Việt Hàn Nhật là đơn vị trực thuộc Trường Đại học Mở TP.HCM, chuyên về giao lưu văn hóa và hợp tác giáo dục giữa Việt Nam, Hàn Quốc và Nhật Bản.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Target, title: t.about.mission, text: "Xây dựng cầu nối văn hóa và giáo dục giữa Việt Nam, Hàn Quốc và Nhật Bản. Đào tạo nguồn nhân lực chất lượng cao, am hiểu văn hóa Đông Á." },
            { icon: Eye, title: t.about.vision, text: "Trở thành trung tâm hàng đầu khu vực về giao lưu văn hóa và hợp tác giáo dục Việt-Hàn-Nhật, góp phần phát triển quan hệ giữa ba quốc gia." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-8"
            >
              <item.icon className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <BookOpen className="w-10 h-10 text-primary-500 mb-4" />
            <h3 className="font-heading text-xl font-bold mb-3">{t.about.history}</h3>
            <p className="text-neutral-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
```

### Step 3.7 — Admissions Page: `src/app/admissions/page.tsx`

```tsx
// src/app/admissions/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { useLanguage } from "@/components/providers/LanguageProvider";

const timelineSteps = [
  { step: 1, title: "Tìm hiểu thông tin", desc: "Xem chương trình & yêu cầu" },
  { step: 2, title: "Nộp hồ sơ đăng ký", desc: "Điền form đăng ký online" },
  { step: 3, title: "Tư vấn & xét duyệt", desc: "Đội ngũ liên hệ tư vấn" },
  { step: 4, title: "Nhập học", desc: "Hoàn tất thủ tục & bắt đầu học" },
];

export default function AdmissionsPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", program: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted (UI demo only)");
  };

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={t.admissions.title} />

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-heading text-xl font-bold text-center mb-8">{t.admissions.timeline}</h3>
          <div className="grid sm:grid-cols-4 gap-4">
            {timelineSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  {s.step}
                </div>
                <h4 className="font-heading font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-neutral-500 text-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold mb-6">{t.admissions.form}</h3>
            <form onSubmit={handleSubmit}>
              <Input label={t.admissions.fullName} name="fullName" value={form.fullName} onChange={handleChange} required />
              <Input label={t.admissions.email} type="email" name="email" value={form.email} onChange={handleChange} required />
              <Input label={t.admissions.phone} type="tel" name="phone" value={form.phone} onChange={handleChange} required />

              <div className="mb-4">
                <label htmlFor="program" className="block text-sm font-medium text-neutral-700 mb-1.5">{t.admissions.program}</label>
                <select
                  id="program"
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white"
                >
                  <option value="">-- Chọn chương trình --</option>
                  {programs.map(p => <option key={p.slug} value={p.slug}>{p.title}</option>)}
                </select>
              </div>

              <Textarea label={t.admissions.message} name="message" value={form.message} onChange={handleChange} />
              <Button type="submit" size="lg" className="w-full mt-2">{t.admissions.submit}</Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.8 — Contact Page: `src/app/contact/page.tsx`

```tsx
// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent (UI demo only)");
  };

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading title={t.contact.title} />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — 3/5 */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold mb-6">{t.contact.formTitle}</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-x-4">
                  <Input label={t.contact.name} name="name" value={form.name} onChange={handleChange} required />
                  <Input label={t.contact.email} type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <Input label={t.contact.subject} name="subject" value={form.subject} onChange={handleChange} required />
                <Textarea label={t.contact.message} name="message" value={form.message} onChange={handleChange} required rows={5} />
                <Button type="submit" size="lg" className="w-full mt-2">{t.contact.send}</Button>
              </form>
            </div>
          </div>

          {/* Info — 2/5 */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-bold mb-6">{t.contact.info}</h3>
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: t.contact.address, value: siteConfig.address },
                { icon: Phone, label: t.contact.phone, value: siteConfig.phone },
                { icon: Mail, label: "Email", value: siteConfig.email },
                { icon: Clock, label: t.contact.officeHours, value: t.contact.officeHoursValue },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-neutral-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Facebook className="w-5 h-5 text-primary-500" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center hover:bg-primary-100 transition-colors">
                <Youtube className="w-5 h-5 text-primary-500" />
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4!2d106.689!3d10.775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzMwLjAiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### Step 3.9 — 404 Page: `src/app/not-found.tsx`

```tsx
// src/app/not-found.tsx
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="section-padding">
      <Container className="text-center">
        <p className="text-8xl font-heading font-extrabold text-primary-100 mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold mb-3">Trang không tồn tại</h1>
        <p className="text-neutral-500 mb-8">Trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Button href="/">Về trang chủ</Button>
      </Container>
    </section>
  );
}
```

### ✅ Gate 3 — Validate All Pages

```bash
npm run lint && npx tsc --noEmit && npm run build

# Verify all routes exist in output
ls out/index.html
ls out/about/index.html
ls out/programs/index.html
ls out/news/index.html
ls out/faculty/index.html
ls out/admissions/index.html
ls out/contact/index.html
```

---

## Phase 4: Polish (Day 5-6)

### Step 4.1 — Scroll Reveal Wrapper (optional enhancement)

Add `whileInView` props directly to motion components (already done in Phase 2-3 components). No separate wrapper needed — the approach is already embedded.

### Step 4.2 — SEO Metadata per Page

Add `metadata` exports to each **server-rendered** layout or page. For client components, use the parent layout's metadata. Since our pages are `"use client"`, add metadata in separate `layout.tsx` files or use `generateMetadata`:

#### `src/app/about/layout.tsx`
```tsx
import { Metadata } from "next";
export const metadata: Metadata = { title: "Giới thiệu", description: "Giới thiệu về Trung Tâm Việt Hàn Nhật - Trường Đại học Mở TP.HCM" };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

#### `src/app/programs/layout.tsx`
```tsx
import { Metadata } from "next";
export const metadata: Metadata = { title: "Chương trình đào tạo", description: "Các chương trình đào tạo ngôn ngữ và văn hóa Hàn Quốc, Nhật Bản" };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

#### `src/app/news/layout.tsx`
```tsx
import { Metadata } from "next";
export const metadata: Metadata = { title: "Tin tức & Sự kiện", description: "Tin tức, sự kiện và thông báo mới nhất từ Trung Tâm Việt Hàn Nhật" };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

#### `src/app/faculty/layout.tsx`
```tsx
import { Metadata } from "next";
export const metadata: Metadata = { title: "Đội ngũ giảng viên", description: "Đội ngũ giảng viên và chuyên gia tại Trung Tâm Việt Hàn Nhật" };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

#### `src/app/admissions/layout.tsx`
```tsx
import { Metadata } from "next";
export const metadata: Metadata = { title: "Tuyển sinh", description: "Thông tin tuyển sinh và đăng ký nhập học tại Trung Tâm Việt Hàn Nhật" };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

#### `src/app/contact/layout.tsx`
```tsx
import { Metadata } from "next";
export const metadata: Metadata = { title: "Liên hệ", description: "Liên hệ với Trung Tâm Việt Hàn Nhật - Trường Đại học Mở TP.HCM" };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

### ✅ Gate 4 — Validate Polish

```bash
npm run lint && npx tsc --noEmit && npm run build
```

---

## Phase 5: Final QA & Full Pipeline Validation (Day 6-7)

### ✅ Gate 5 — Full CI Simulation

```bash
# Step 1: Clean install
rm -rf node_modules .next out
npm ci --frozen-lockfile

# Step 2: Quality checks
npm run lint
npx tsc --noEmit

# Step 3: Production build
npm run build

# Step 4: Docker build + smoke test
docker build -t viethannhat-web:final .
docker images viethannhat-web:final --format "Size: {{.Size}}"

docker run -d --name smoke-test -p 8080:8080 viethannhat-web:final

# Step 5: Validate all routes respond 200
# (On Windows use PowerShell equivalent)
$routes = @("/", "/about/", "/programs/", "/news/", "/faculty/", "/admissions/", "/contact/")
foreach ($route in $routes) {
  $status = (Invoke-WebRequest -Uri "http://localhost:8080$route" -UseBasicParsing).StatusCode
  Write-Host "Route $route -> $status"
}

# Step 6: Validate response headers
Invoke-WebRequest -Uri "http://localhost:8080/" -UseBasicParsing | Select-Object -ExpandProperty Headers

# Cleanup
docker stop smoke-test; docker rm smoke-test
```

### Manual Checks

| Check | Criteria |
|---|---|
| Responsive | Test at 375px, 768px, 1024px, 1440px |
| Navigation | All links work, active states, mobile menu |
| Animations | Scroll reveals, counters, hover effects |
| Forms | Validation feedback, submit states |
| i18n | Language toggle switches all text |
| Images | Placeholders load, no layout shift |
| Performance | Lighthouse ≥ 90 all categories |
| Docker | Image < 30MB, serves on 8080 |

---

## Quick Reference: All Files

| File | Phase | Type |
|---|---|---|
| `next.config.mjs` | 1 | Config |
| `tailwind.config.ts` | 1 | Config |
| `src/app/globals.css` | 1 | Styles |
| `src/lib/utils.ts` | 1 | Utility |
| `src/data/site.ts` | 1 | Data |
| `src/data/programs.ts` | 1 | Data |
| `src/data/news.ts` | 1 | Data |
| `src/data/faculty.ts` | 1 | Data |
| `src/data/i18n.ts` | 1 | Data |
| `src/components/providers/LanguageProvider.tsx` | 1 | Provider |
| `src/components/layout/Container.tsx` | 1 | Layout |
| `src/components/layout/Header.tsx` | 1 | Layout |
| `src/components/layout/Footer.tsx` | 1 | Layout |
| `src/components/ui/Button.tsx` | 1 | UI |
| `src/components/ui/Card.tsx` | 1 | UI |
| `src/components/ui/Badge.tsx` | 1 | UI |
| `src/components/ui/SectionHeading.tsx` | 1 | UI |
| `src/components/ui/Input.tsx` | 1 | UI |
| `src/components/ui/Textarea.tsx` | 1 | UI |
| `src/app/layout.tsx` | 1 | Layout |
| `src/app/page.tsx` | 2 | Page |
| `src/components/home/HeroSection.tsx` | 2 | Component |
| `src/components/home/FeatureGrid.tsx` | 2 | Component |
| `src/components/home/StatsCounter.tsx` | 2 | Component |
| `src/components/home/LatestNews.tsx` | 2 | Component |
| `src/components/home/CTABanner.tsx` | 2 | Component |
| `src/components/home/PartnersSection.tsx` | 2 | Component |
| `src/app/about/page.tsx` | 3 | Page |
| `src/app/programs/page.tsx` | 3 | Page |
| `src/app/programs/[slug]/page.tsx` | 3 | Page |
| `src/app/news/page.tsx` | 3 | Page |
| `src/app/news/[slug]/page.tsx` | 3 | Page |
| `src/app/faculty/page.tsx` | 3 | Page |
| `src/app/admissions/page.tsx` | 3 | Page |
| `src/app/contact/page.tsx` | 3 | Page |
| `src/app/not-found.tsx` | 3 | Page |
| `src/app/about/layout.tsx` | 4 | SEO |
| `src/app/programs/layout.tsx` | 4 | SEO |
| `src/app/news/layout.tsx` | 4 | SEO |
| `src/app/faculty/layout.tsx` | 4 | SEO |
| `src/app/admissions/layout.tsx` | 4 | SEO |
| `src/app/contact/layout.tsx` | 4 | SEO |
| `Dockerfile` | 1 | Infra |
| `nginx.conf` | 1 | Infra |
| `.dockerignore` | 1 | Infra |
| `.github/workflows/deploy.yml` | 1 | Infra |
