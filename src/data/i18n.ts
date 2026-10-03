export type Locale = "vi" | "en";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    programs: string;
    news: string;
    faculty: string;
    admissions: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  sections: {
    features: string;
    latestNews: string;
    stats: string;
    partners: string;
    cta: string;
    ctaSub: string;
    ctaButton: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    history: string;
  };
  programs: {
    title: string;
    all: string;
    korean: string;
    topik: string;
    exchange: string;
    duration: string;
    viewDetails: string;
  };
  news: {
    title: string;
    readMore: string;
    viewAll: string;
  };
  faculty: {
    title: string;
  };
  admissions: {
    title: string;
    timeline: string;
    form: string;
    fullName: string;
    email: string;
    phone: string;
    program: string;
    message: string;
    submit: string;
  };
  contact: {
    title: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    info: string;
    address: string;
    phone: string;
    officeHours: string;
    officeHoursValue: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    programs: string;
    contactInfo: string;
    copyright: string;
  };
  stats: {
    students: string;
    programs: string;
    partners: string;
    years: string;
  };
}

export const translations: Record<Locale, TranslationSchema> = {
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
      title: "Trung Tâm Việt - Hàn",
      subtitle: "Cầu nối văn hóa & giáo dục Việt Nam • Hàn Quốc",
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
      korean: "Tiếng Hàn",
      topik: "Luyện thi TOPIK",
      exchange: "Trao đổi sinh viên",
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
      description: "Trung tâm giao lưu văn hóa và hợp tác giáo dục Việt Nam - Hàn Quốc, trực thuộc Trường Đại học Mở TP.HCM",
      quickLinks: "Liên kết nhanh",
      programs: "Chương trình",
      contactInfo: "Liên hệ",
      copyright: "© 2026 Trung Tâm Việt - Hàn - Trường Đại học Mở TP.HCM",
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
      title: "Vietnam - Korea Center",
      subtitle: "Bridging Cultures: Vietnam • Korea",
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
      korean: "Korean Language",
      topik: "TOPIK Preparation",
      exchange: "Student Exchange",
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
      description: "Vietnam - Korea Cultural & Educational Exchange Center under Ho Chi Minh City Open University",
      quickLinks: "Quick Links",
      programs: "Programs",
      contactInfo: "Contact",
      copyright: "© 2026 Vietnam - Korea Center - HCMC Open University",
    },
    stats: {
      students: "Students",
      programs: "Programs",
      partners: "Partners",
      years: "Years Active",
    },
  },
};

export type TranslationKeys = TranslationSchema;
