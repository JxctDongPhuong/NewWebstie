export interface Program {
  slug: string;
  title: string;
  titleEn: string;
  category: "korean" | "topik" | "exchange";
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
    description: "Chương trình đào tạo tiếng Hàn toàn diện từ sơ cấp đến cao cấp, kết hợp trải nghiệm văn hóa K-Culture sống động cùng giảng viên bản ngữ.",
    descriptionEn: "Comprehensive Korean language training from beginner to advanced, combined with authentic K-Culture immersion and native lecturers.",
    duration: "12 tháng",
    image: "/images/placeholder/program-korean-1.jpg",
    features: ["Giảng viên bản ngữ", "Cam kết chuẩn đầu ra", "Trải nghiệm K-Culture", "Học bổng giao lưu"],
  },
  {
    slug: "korean-business",
    title: "Tiếng Hàn thương mại & Biên phiên dịch",
    titleEn: "Business Korean & Translation",
    category: "korean",
    description: "Khóa học chuyên sâu về giao tiếp doanh nghiệp, đàm phán hợp đồng, biên phiên dịch kinh tế - thương mại Việt - Hàn.",
    descriptionEn: "Intensive course focusing on corporate communication, business negotiations, and Vietnam-Korea economic translation.",
    duration: "6 tháng",
    image: "/images/placeholder/program-korean-2.jpg",
    features: ["Thương mại quốc tế", "Kỹ năng biên phiên dịch", "Thực tập doanh nghiệp Hàn", "Cơ hội việc làm"],
  },
  {
    slug: "korean-topik-prep",
    title: "Luyện thi TOPIK I & II cấp tốc",
    titleEn: "Intensive TOPIK I & II Preparation",
    category: "topik",
    description: "Khóa luyện thi chuyên sâu các cấp độ TOPIK 3 - 6 với phương pháp giải đề độc quyền, cam kết đầu ra chứng chỉ quốc tế.",
    descriptionEn: "Specialized preparation for TOPIK Levels 3 to 6 with proprietary test-taking techniques and guaranteed outcomes.",
    duration: "4 tháng",
    image: "/images/placeholder/program-korean-3.jpg",
    features: ["Cam kết chuẩn đầu ra", "Thi thử hàng tuần", "Tài liệu đề thi cập nhật", "Giảng viên chuyên môn cao"],
  },
  {
    slug: "korean-communication",
    title: "Tiếng Hàn giao tiếp thực hành & K-Life",
    titleEn: "Practical Conversational Korean & K-Life",
    category: "topik",
    description: "Tập trung phản xạ giao tiếp 100% trong đời sống thực tế, văn hóa ứng xử công sở và đời sống thường nhật tại Hàn Quốc.",
    descriptionEn: "Focus on 100% real-life conversational reflexes, workplace etiquette, and daily living in South Korea.",
    duration: "3 tháng",
    image: "/images/placeholder/program-korean-4.jpg",
    features: ["Phản xạ giao tiếp 1:1", "Ứng dụng thực tế", "Giao lưu sinh viên Hàn", "Câu lạc bộ tiếng Hàn"],
  },
  {
    slug: "exchange-program-korea",
    title: "Chương trình trao đổi sinh viên Hàn Quốc",
    titleEn: "Korea Student Exchange Program",
    category: "exchange",
    description: "Chương trình trao đổi học kỳ quốc tế với các trường đại học hàng đầu tại Seoul, Busan. Công nhận tín chỉ tương đương.",
    descriptionEn: "International semester exchange program with top universities in Seoul and Busan. Full credit recognition.",
    duration: "1-2 học kỳ",
    image: "/images/placeholder/program-exchange-1.jpg",
    features: ["Miễn 100% học phí đối ứng", "Công nhận tín chỉ", "Hỗ trợ thủ tục visa", "Ký túc xá đại học"],
  },
  {
    slug: "scholarship-korea-gks",
    title: "Học bổng Chính phủ & Du học Hàn Quốc",
    titleEn: "GKS Scholarship & Korea Study Abroad",
    category: "exchange",
    description: "Chương trình cố vấn và hỗ trợ ứng tuyển học bổng Chính phủ Hàn Quốc (GKS), học bổng giáo sư và chuyển tiếp đại học 2+2, 3+1.",
    descriptionEn: "Mentorship and application support for Global Korea Scholarship (GKS), professor grants, and 2+2, 3+1 university transfers.",
    duration: "Dài hạn / Chuyển tiếp",
    image: "/images/placeholder/program-exchange-2.jpg",
    features: ["Học bổng toàn phần GKS", "Cố vấn hồ sơ 1:1", "Chuyển tiếp tín chỉ 2+2", "Định hướng nghề nghiệp"],
  },
];

export function getProgramsByCategory(category?: string): Program[] {
  if (!category || category === "all") return programs;
  return programs.filter((p) => p.category === category);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
