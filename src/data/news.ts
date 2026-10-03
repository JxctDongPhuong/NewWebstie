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
    title: "Thông báo tuyển sinh các khóa học tiếng Hàn năm 2026",
    titleEn: "New Korean Language Course Enrollment 2026 Announcement",
    excerpt: "Trung tâm Việt - Hàn thông báo mở đăng ký các khóa tiếng Hàn sơ cấp, trung cấp và luyện thi TOPIK năm 2026 với nhiều ưu đãi hấp dẫn.",
    excerptEn: "The Vietnam - Korea Center announces registration for beginner, intermediate, and TOPIK preparation courses in 2026.",
    content: "Trung tâm Việt - Hàn, Trường Đại học Mở TP.HCM chính thức thông báo tuyển sinh các khóa đào tạo tiếng Hàn chuẩn quốc tế cho năm học 2026. Chương trình được thiết kế đa dạng từ trình độ vỡ lòng đến cao cấp, kết hợp ôn luyện chứng chỉ TOPIK và giao tiếp thương mại thực chiến. Học viên đăng ký sớm được hưởng chính sách ưu đãi học phí đặc biệt cùng cơ hội tham gia các hội thảo văn hóa miễn phí.",
    category: "announcement",
    date: "2026-08-20",
    image: "/images/placeholder/news-1.jpg",
    featured: true,
  },
  {
    slug: "le-hoi-van-hoa-viet-han-2026",
    title: "Ngày hội giao lưu văn hóa Việt - Hàn 2026",
    titleEn: "Vietnam - Korea Cultural Festival 2026",
    excerpt: "Sự kiện văn hóa thường niên quy tụ hàng nghìn sinh viên với các hoạt động trải nghiệm Hanbok, ẩm thực K-Food và biểu diễn nghệ thuật.",
    excerptEn: "Annual cultural event featuring Hanbok experience, K-Food cuisine, and traditional & modern arts performances.",
    content: "Ngày hội giao lưu văn hóa Việt - Hàn 2026 là ngày hội thường niên nhằm tôn vinh nét đẹp văn hóa truyền thống và hiện đại của hai quốc gia. Sự kiện mang đến không gian trải nghiệm trang phục Hanbok truyền thống, gian hàng ẩm thực K-Food, thi đấu K-Pop Dance Cover và các buổi tọa đàm về học tập và làm việc tại Hàn Quốc.",
    category: "event",
    date: "2026-08-15",
    image: "/images/placeholder/news-2.jpg",
    featured: false,
  },
  {
    slug: "hoc-bong-du-hoc-han-quoc",
    title: "Học bổng du học Hàn Quốc kỳ Xuân 2027",
    titleEn: "Korea Study Abroad Scholarship Spring 2027",
    excerpt: "Cơ hội nhận học bổng toàn phần du học Hàn Quốc tại các trường đại học đối tác danh tiếng. Hạn nộp hồ sơ: 30/11/2026.",
    excerptEn: "Full scholarship opportunities to study in South Korea at prestigious partner universities. Application deadline: November 30, 2026.",
    content: "Trung tâm Việt - Hàn kết hợp cùng các trường đại học đối tác tại Hàn Quốc công bố chương trình học bổng trao đổi và du học kỳ Xuân 2027. Học bổng hỗ trợ từ 50% đến 100% học phí dành cho sinh viên có thành tích học tập tốt và năng lực tiếng Hàn xuất sắc.",
    category: "scholarship",
    date: "2026-08-10",
    image: "/images/placeholder/news-3.jpg",
    featured: false,
  },
  {
    slug: "huong-dan-thi-topik-2026",
    title: "Hướng dẫn đăng ký kỳ thi TOPIK kỳ 97 năm 2026",
    titleEn: "TOPIK Exam 97 Registration & Preparation Guide 2026",
    excerpt: "Thông tin chi tiết về lịch thi, hồ sơ và kinh nghiệm làm bài thi đánh giá năng lực tiếng Hàn TOPIK I & II.",
    excerptEn: "Comprehensive information on exam schedules, application procedures, and tips for the TOPIK I & II tests.",
    content: "Kỳ thi đánh giá năng lực tiếng Hàn (TOPIK) kỳ 97 chuẩn bị mở cổng đăng ký trực tuyến. Trung tâm Việt - Hàn cung cấp hướng dẫn chi tiết quy trình chuẩn bị hồ sơ, các mốc thời gian quan trọng cũng như tổ chức các lớp thi thử miễn phí giúp thí sinh làm quen với cấu trúc đề thi mới nhất.",
    category: "announcement",
    date: "2026-08-05",
    image: "/images/placeholder/news-4.jpg",
    featured: false,
  },
  {
    slug: "hoc-bong-chinh-phu-gks-2027",
    title: "Học bổng Chính phủ Hàn Quốc (GKS) năm 2027",
    titleEn: "Global Korea Scholarship (GKS) 2027",
    excerpt: "Chương trình học bổng toàn phần danh giá do Chính phủ Hàn Quốc tài trợ 100% học phí, sinh hoạt phí và vé máy bay.",
    excerptEn: "Prestigious full scholarship sponsored by the Korean Government covering 100% tuition, living stipend, and airfare.",
    content: "Học bổng Chính phủ Hàn Quốc (Global Korea Scholarship - GKS) là học bổng danh giá bậc nhất dành cho sinh viên quốc tế theo học chương trình đại học và sau đại học tại Hàn Quốc. Trung tâm Việt - Hàn tổ chức chuỗi workshop hướng dẫn viết bài luận, thư giới thiệu và phỏng vấn cùng các cựu học viên đã đạt học bổng GKS các năm trước.",
    category: "scholarship",
    date: "2026-07-28",
    image: "/images/placeholder/news-5.jpg",
    featured: false,
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
