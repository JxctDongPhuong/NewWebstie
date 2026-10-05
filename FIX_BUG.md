# Nhật Ký Sửa Lỗi (Fix Bug Log) - CI/CD & Build Pipeline

Tài liệu ghi lại các lỗi đã gặp trong quá trình chạy GitHub Actions CI/CD và giải pháp xử lý.

---

## 1. Lỗi `npm ci` - Không đồng bộ Lockfile (EUSAGE)

### Mô tả lỗi
Khi chạy bước `npm ci` trên GitHub Actions:
```text
npm error code EUSAGE
npm error `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync.
npm error Missing: bcrypt@6.0.0 from lock file
npm error Missing: node-addon-api@8.9.2 from lock file
npm error Missing: node-gyp-build@4.8.4 from lock file
Error: Process completed with exit code 1.
```

### Nguyên nhân
- Gói `bcrypt` được thêm vào `package.json` nhưng file `package-lock.json` chưa được cập nhật và commit lên Git.
- `npm ci` yêu cầu độ chính xác tuyệt đối giữa `package.json` và `package-lock.json`. Nếu có bất kỳ package nào lệch phiên bản hoặc thiếu trong lockfile, lệnh sẽ dừng với mã lỗi `EUSAGE`.

### Cách khắc phục
1. Chạy `npm install` ở máy local để cập nhật lại `package-lock.json`:
   ```bash
   npm install
   ```
2. Commit và đẩy lockfile mới lên repository:
   ```bash
   git add package-lock.json
   git commit -m "fix: update package-lock.json"
   git push origin main
   ```

---

## 2. Lỗi ESLint `@typescript-eslint/no-explicit-any`

### Mô tả lỗi
Khi chạy bước `Run Linter` (`npm run lint` / `eslint`):
```text
/home/runner/work/NewWebstie/NewWebstie/src/app/news/page.tsx
Error: 37:47 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

✖ 1 problem (1 error, 0 warnings)
```

### Nguyên nhân
Tại file `src/app/news/page.tsx`, hàm map dữ liệu từ Google Sheets API sử dụng kiểu `any` (`item: any`), vi phạm quy tắc nghiêm ngặt của TypeScript ESLint:
```typescript
// ❌ Mã gây lỗi:
const formattedData = data.map((item: any) => ({
  ...item,
  featured: item.featured === true || item.featured === "TRUE" || item.featured === "true"
}));
```

### Cách khắc phục
Định nghĩa interface `RawNewsItem` tường minh kế thừa từ `NewsArticle` thay cho `any`:
```typescript
// ✅ Mã đã sửa:
interface RawNewsItem extends Omit<NewsArticle, "featured"> {
  featured?: boolean | string;
}

// ...
fetch(API_URL)
  .then((res) => res.json())
  .then((data: RawNewsItem[]) => {
    const formattedData = data.map((item: RawNewsItem) => ({
      ...item,
      featured: item.featured === true || item.featured === "TRUE" || item.featured === "true"
    }));
    setNews(formattedData);
    setIsLoading(false);
  })
```

---

## 3. Quy trình kiểm tra trước khi Push (Checklist)

Để đảm bảo GitHub Actions luôn chạy thành công (xanh 100%), hãy chạy các lệnh sau ở local trước khi commit:

1. **Kiểm tra cú pháp & Lint:**
   ```bash
   npm run lint
   ```
2. **Kiểm tra biên dịch & Build Next.js:**
   ```bash
   npm run build
   ```
3. **Commit đầy đủ mã nguồn và lockfile:**
   ```bash
   git add .
   git commit -m "feat/fix: mô tả thay đổi"
   git push origin main
   ```
