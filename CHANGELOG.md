# Báo cáo thay đổi dự án — Trung Tâm Việt Hàn Website

**Ngày thực hiện:** 03/10/2026  
**Người thực hiện:** _(tên bạn)_  
**Phạm vi:** Sửa lỗi đồng bộ dữ liệu từ Google Sheets lên website

---

## 🔍 Vấn đề phát hiện

Website có kết nối với **Google Sheets** để lấy dữ liệu động (chương trình, tin tức, giảng viên), nhưng **3 trong 4 trang** bị lỗi không hiển thị dữ liệu từ sheet:

| Trang | Nguyên nhân lỗi |
|---|---|
| `/programs` | ✅ Hoạt động đúng |
| `/news` | ❌ URL API sai — không gọi được Google Sheets |
| `/faculty` | ❌ Không gọi API — đọc dữ liệu cứng trong code |
| `/admissions` | ❌ Dropdown chương trình không gọi API — đọc dữ liệu cứng trong code |

**Hậu quả:** Dù cập nhật Google Sheets, website vẫn hiển thị dữ liệu cũ.

---

## ✅ Những gì đã thay đổi

---

### 1. Tạo file `.env.local` _(file mới)_

**Vị trí:** `D:\webviethan\.env.local`

**Lý do:** API URL của Google Apps Script được viết cứng lặp lại ở nhiều file. Nay tập trung về một chỗ duy nhất để dễ quản lý — khi cần đổi URL chỉ cần sửa 1 dòng.

```
NEXT_PUBLIC_API_URL=https://script.google.com/macros/s/AKfycbx.../exec
```

> ⚠️ File này đã được `.gitignore` bảo vệ, **không bị commit lên Git**.

---

### 2. Sửa file `src/app/news/page.tsx`

**Lỗi 1 — URL sai loại (dòng 31):**
```
❌ Trước:  "https://script.google.com/macros/library/d/1FjonClAk_.../3"
           (Đây là URL thư viện, không thể gọi như API)

✅ Sau:    `${process.env.NEXT_PUBLIC_API_URL}?sheet=news`
```

**Lỗi 2 — Typo query string (dòng 39):**
```
❌ Trước:  fetch("https://.../exec=news")
           ("exec=news" không phải query string hợp lệ)

✅ Sau:    fetch(`${process.env.NEXT_PUBLIC_API_URL}?sheet=news`)
           ("?sheet=news" mới là cú pháp đúng)
```

**Xóa thêm:** Đoạn kiểm tra `if (!API_URL)` thừa (dòng 32–36) — biến này luôn có giá trị nên không cần kiểm tra.

---

### 3. Viết lại file `src/app/faculty/page.tsx`

**Lỗi — Đọc file tĩnh thay vì gọi API:**
```
❌ Trước:  import { facultyMembers } from "@/data/faculty"
           (Đọc thẳng từ file .ts trong code, bỏ qua Google Sheets)

✅ Sau:    fetch(`${process.env.NEXT_PUBLIC_API_URL}?sheet=faculty`)
           (Gọi API để lấy dữ liệu mới nhất từ Google Sheets)
```

**Những dòng được thêm mới:**
- `import { useState, useEffect } from "react"` — cần thiết để fetch API
- `interface FacultyMember { ... }` — định nghĩa cấu trúc dữ liệu
- `const [facultyMembers, setFacultyMembers] = useState([])` — lưu dữ liệu từ API
- `const [isLoading, setIsLoading] = useState(true)` — trạng thái loading
- Khối `useEffect(() => { fetch(...) })` — tự động gọi API khi trang mở
- Spinner loading hiển thị trong lúc chờ dữ liệu (nhất quán với trang `/programs`)

---

### 4. Sửa file `src/app/admissions/page.tsx`

**Lỗi — Dropdown chương trình đọc file tĩnh:**
```
❌ Trước:  import { programs } from "@/data/programs"
           (Danh sách chương trình cứng trong code, không đồng bộ với sheet)

✅ Sau:    fetch(process.env.NEXT_PUBLIC_API_URL)
           (Lấy danh sách chương trình trực tiếp từ Google Sheets)
```

**Những dòng được thêm mới:**
- `import { useEffect } from "react"` — cần thiết để fetch API
- `const PROGRAMS_API_URL = process.env.NEXT_PUBLIC_API_URL` — URL từ biến môi trường
- `interface Program { slug, title, titleEn }` — định nghĩa cấu trúc
- `const [programs, setPrograms] = useState([])` — lưu danh sách chương trình
- Khối `useEffect(() => { fetch(...) })` — tự động tải danh sách khi trang mở

---

### 5. Sửa file `src/app/programs/page.tsx`

Trang này đã hoạt động đúng. Chỉ thay URL viết cứng bằng biến môi trường:

```
❌ Trước:  "https://script.google.com/macros/s/AKfycbx.../exec"
✅ Sau:    process.env.NEXT_PUBLIC_API_URL
```

---

## 📋 Danh sách file thay đổi

| File | Loại thay đổi | Tóm tắt |
|---|---|---|
| `.env.local` | ✨ Tạo mới | Lưu API URL chung toàn dự án |
| `src/app/news/page.tsx` | 🐛 Sửa lỗi | Sửa 2 lỗi URL API |
| `src/app/faculty/page.tsx` | 🔄 Viết lại | Bỏ file tĩnh, thêm fetch từ Sheets |
| `src/app/admissions/page.tsx` | 🐛 Sửa lỗi | Bỏ file tĩnh, thêm fetch từ Sheets |
| `src/app/programs/page.tsx` | ♻️ Refactor | Thay URL hardcode → biến môi trường |

---

## ⚠️ Lưu ý khi deploy / chạy lại

1. **Copy file `.env.local`** sang máy đồng nghiệp hoặc server — file này không có trên Git.
2. **Restart `next dev`** sau khi tạo `.env.local` để Next.js đọc biến môi trường mới.
3. Nếu deploy lên server/Docker: thêm biến `NEXT_PUBLIC_API_URL` vào cấu hình môi trường của server (không dùng file `.env.local` trực tiếp trên production).
