# LHF - Website

Website chính thức của Công ty TNHH LHF (株式会社 LHF), chuyên về dịch vụ nail, bán lẻ và tuyển dụng.

## Tính năng

- Đa ngôn ngữ (Tiếng Việt, Tiếng Nhật)
- Thiết kế responsive
- Tối ưu SEO
- Các trang chính:
  - Trang chủ
  - Dịch vụ nail
  - Bán lẻ
  - Tuyển dụng
  - Giới thiệu công ty

## Công nghệ sử dụng

- Next.js 15.2.4
- TypeScript
- Tailwind CSS
- Radix UI
- Next-intl (đa ngôn ngữ)

## Cài đặt

```bash
# Cài đặt các dependencies
npm install

# Chạy môi trường phát triển
npm run dev

# Build cho môi trường production
npm run build

# Chạy bản build
npm start
```

## Cấu trúc dự án

```
src/
  ├── app/                  # Các trang và components theo route
  │   ├── about/            # Trang giới thiệu
  │   ├── nail/             # Trang dịch vụ nail
  │   ├── recruitment/      # Trang tuyển dụng
  │   ├── retail/           # Trang bán lẻ
  │   └── components/       # Components dùng cho trang chủ
  ├── components/           # Components dùng chung
  │   ├── animation/        # Components liên quan đến animation
  │   ├── carousel/         # Components carousel
  │   ├── loader/           # Loading components
  │   ├── seo/              # SEO components
  │   ├── theme/            # Header, footer và theme components
  │   ├── ui/               # UI components cơ bản
  │   └── LanguageSwitcher  # Component chuyển đổi ngôn ngữ
  ├── i18n/                 # Cấu hình và file ngôn ngữ
  │   └── locales/          # File ngôn ngữ (vi.json, ja.json)
  ├── styles/               # CSS và assets
  │   └── images/           # Hình ảnh
  ├── hooks/                # Custom hooks
  └── lib/                  # Utilities và helpers
```

## Đa ngôn ngữ

Website hỗ trợ hai ngôn ngữ:

- Tiếng Việt (vi)
- Tiếng Nhật (ja)

File ngôn ngữ được lưu tại `src/i18n/locales/`.

## Liên hệ

Công ty TNHH LHF (株式会社 LHF)
Website: \***\*\*\*\*\*\*\***
