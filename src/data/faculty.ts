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
    bio: "Hơn 20 năm kinh nghiệm trong lĩnh vực giáo dục quốc tế và hợp tác đào tạo Việt - Hàn.",
    bioEn: "Over 20 years of experience in international education and Vietnam - Korea academic collaboration.",
    image: "/images/placeholder/faculty-1.jpg",
    specialization: "Quản lý giáo dục quốc tế",
  },
  {
    name: "TS. Kim Min-ji",
    nameEn: "Dr. Kim Min-ji",
    title: "Phó Giám đốc / Trưởng bộ phận Hàn Quốc học",
    titleEn: "Vice Director / Head of Korean Studies",
    bio: "Tiến sĩ ngôn ngữ học từ Đại học Quốc gia Seoul, chuyên gia đào tạo tiếng Hàn cho người Việt.",
    bioEn: "PhD in Linguistics from Seoul National University, expert in Korean language pedagogy for Vietnamese learners.",
    image: "/images/placeholder/faculty-2.jpg",
    specialization: "Ngôn ngữ & Ngữ pháp tiếng Hàn",
  },
  {
    name: "TS. Lee Jun-ho",
    nameEn: "Dr. Lee Jun-ho",
    title: "Trưởng bộ môn Văn hóa & Biên phiên dịch",
    titleEn: "Head of Culture & Translation Department",
    bio: "Tiến sĩ Đại học Yonsei, hơn 15 năm giảng dạy ngôn ngữ và nghiên cứu văn hóa truyền thống & hiện đại Hàn Quốc.",
    bioEn: "PhD from Yonsei University, over 15 years of teaching Korean language and modern cultural studies.",
    image: "/images/placeholder/faculty-3.jpg",
    specialization: "Văn hóa Hàn Quốc & Biên phiên dịch",
  },
  {
    name: "ThS. Trần Thị B",
    nameEn: "MA. Tran Thi B",
    title: "Giảng viên tiếng Hàn thương mại",
    titleEn: "Business Korean Instructor",
    bio: "Thạc sĩ Hàn Quốc học, TOPIK cấp 6, chuyên gia đào tạo tiếng Hàn giao tiếp doanh nghiệp và đàm phán thương mại.",
    bioEn: "Master's in Korean Studies, TOPIK Level 6, specialist in corporate communication and business negotiations.",
    image: "/images/placeholder/faculty-4.jpg",
    specialization: "Tiếng Hàn thương mại",
  },
  {
    name: "ThS. Kang Da-hye",
    nameEn: "MA. Kang Da-hye",
    title: "Giảng viên cao cấp & Luyện thi TOPIK",
    titleEn: "Senior Lecturer & TOPIK Specialist",
    bio: "Thạc sĩ Giáo dục tiếng Hàn từ Đại học Korea, 10 năm kinh nghiệm luyện thi TOPIK các cấp độ đạt tỉ lệ đỗ cao.",
    bioEn: "Master in Korean Education from Korea University, 10 years of experience with top TOPIK pass rates.",
    image: "/images/placeholder/faculty-5.jpg",
    specialization: "Luyện thi TOPIK I & II",
  },
  {
    name: "ThS. Park Soo-yeon",
    nameEn: "MA. Park Soo-yeon",
    title: "Điều phối viên chương trình trao đổi Việt - Hàn",
    titleEn: "Exchange Program Coordinator",
    bio: "Chuyên gia điều phối chương trình học bổng, chuyển tiếp và trao đổi sinh viên quốc tế Việt - Hàn.",
    bioEn: "Coordinator for international student exchange and scholarship programs between Vietnam and South Korea.",
    image: "/images/placeholder/faculty-6.jpg",
    specialization: "Trao đổi & Hợp tác quốc tế",
  },
];
