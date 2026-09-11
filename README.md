# Bài tập về nhà Git - bt-dev-002-01

Dự án này là bài tập thực hành về Git và Frontend Fundamentals.

## Thực hành tại lớp
- Clone repo mẫu của team.
- Tạo thay đổi nhỏ -> add -> commit -> push.
- Đọc lịch sử bằng `git log --oneline`.
- Viết một file `.gitignore` hợp lý.

## Bài tập về nhà Git
- Tạo 1 repo cá nhân.
- Thực hiện ≥ 5 commit với message rõ ràng.
- Đảm bảo lịch sử commit sạch, mỗi commit một việc.
- Push lên remote và gửi link cho mentor.

---

# DEV-FE-001 · HTML & Modern CSS Fundamentals

## Bài tập 1: HTML ngữ nghĩa & Box / Layout
- Viết khung HTML ngữ nghĩa trang giới thiệu bản thân.
- Hạn chế dùng `<div>` khi có thẻ phù hợp.
- Liệt kê 5 thẻ ngữ nghĩa và khi nào dùng.

---

### 1. Khung HTML ngữ nghĩa trang giới thiệu bản thân (Semantic HTML Structure)

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giới thiệu bản thân - Frontend Developer</title>
</head>
<body>

  <!-- Header & Navigation -->
  <header>
    <a href="#" class="logo">DevPortfolio</a>
    <nav>
      <ul>
        <li><a href="#about">Giới thiệu</a></li>
        <li><a href="#skills">Kỹ năng</a></li>
      </ul>
    </nav>
  </header>

  <!-- Nội dung chính của trang -->
  <main>
    <!-- Section: Hero / Intro -->
    <section id="hero">
      <figure>
        <img src="avatar.jpg" alt="Ảnh chân dung Lập trình viên">
        <figcaption>Lập trình viên Frontend</figcaption>
      </figure>
      <h1>Xin chào, tôi là Nguyễn Văn Tý</h1>
      <p>Lập trình viên Frontend đam mê tạo ra các giao diện web đẹp, tối ưu hiệu năng và chuẩn SEO.</p>
    </section>

    <!-- Section: Giới thiệu bản thân -->
    <section id="about">
      <h2>Về tôi</h2>
      <article>
        <h3>Hành trình sự nghiệp</h3>
        <p>Tôi có niềm yêu thích đặc biệt với việc xây dựng các sản phẩm web hiện đại...</p>
      </article>
      <aside>
        <h3>Thông tin nhanh</h3>
        <ul>
          <li>Vị trí: Junior Frontend Developer</li>
          <li>Kinh nghiệm: 1 năm</li>
          <li>Trạng thái: Sẵn sàng nhận công việc mới</li>
        </ul>
      </aside>
    </section>

    <!-- Section: Kỹ năng -->
    <section id="skills">
      <h2>Kỹ năng chuyên môn</h2>
      <article>
        <h3>Frontend Technologies</h3>
        <p>HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS</p>
      </article>
    </section>
  </main>

  <!-- Chân trang -->
  <footer>
    <p>&copy; 2026 Nguyễn Văn Tý. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

### 2. Nguyên tắc hạn chế sử dụng thẻ `<div>`

Thẻ `<div>` là một **Non-semantic Element** (thẻ phi ngữ nghĩa), chỉ đóng vai trò là một khối chứa rỗng mà trình duyệt hay công cụ tìm kiếm không hiểu được ý nghĩa nội dung bên trong. 

Việc hạn chế sử dụng `<div>` mang lại các lợi ích lớn:
- **Tăng tính truy cập (Accessibility - a11y):** Các công cụ đọc màn hình (Screen Readers) cho người khiếm thị có thể điều hướng trang dễ dàng dựa vào thẻ ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<article>`).
- **Tối ưu SEO:** Google Search Engine ưu tiên và hiểu rõ cấu trúc bài viết, thông tin liên hệ hay tiêu đề của trang hơn.
- **Mã nguồn sạch & dễ bảo trì:** Giúp các lập trình viên khác trong team nhanh chóng nắm bắt cấu trúc layout thay vì bị "loạn" bởi hàng chập thẻ `<div>` lồng nhau (`div soup`).

---

### 3. Liệt kê 5 thẻ ngữ nghĩa (Semantic HTML Tags) & Khi nào dùng

| STT | Thẻ HTML Ngữ Nghĩa | Khi nào nên dùng? (Use Cases) |
|---|---|---|
| **1** | `<header>` | **Khi nào dùng:** Dùng cho phần đầu của trang web hoặc phần mở đầu của một khu vực nội dung (`<section>` / `<article>`). Thường chứa logo, tên thương hiệu, tiêu đề trang hoặc thanh điều hướng (`<nav>`). |
| **2** | `<nav>` | **Khi nào dùng:** Dùng để bao bọc các liên kết điều hướng chính của trang web (như Menu header, Sidebar navigation, Footer links). Giúp trình duyệt và trình đọc màn hình nhận biết đây là khu vực điều hướng. |
| **3** | `<main>` | **Khi nào dùng:** Dùng chứa nội dung chính, độc nhất của trang web. Mỗi trang HTML **chỉ được phép có duy nhất 1 thẻ `<main>`** và không chứa các nội dung lặp lại như Header, Footer, hay Sidebar dùng chung. |
| **4** | `<section>` | **Khi nào dùng:** Dùng để nhóm các nội dung có cùng chủ đề/ngữ cảnh lại với nhau trong một trang (ví dụ: Section "Giới thiệu", Section "Kỹ năng", Section "Dự án", Section "Bảng giá"). Thường chứa một thẻ tiêu đề (`<h2>` - `<h6>`). |
| **5** | `<article>` | **Khi nào dùng:** Dùng cho một khối nội dung độc lập, tự hoàn chỉnh và có thể tái sử dụng hoặc trích xuất để đăng ở nơi khác (ví dụ: Bài viết blog, tin tức, 1 thẻ sản phẩm, 1 bình luận của người dùng). |

*(Ngoài ra còn có các thẻ ngữ nghĩa hữu ích khác như `<aside>` dùng cho sidebar/nội dung phụ, `<footer>` cho chân trang, `<figure>` & `<figcaption>` cho hình ảnh kèm chú thích, `<time>` cho ngày tháng, và `<address>` cho thông tin liên hệ).*

---

## Bài tập 2: Flexbox, Grid, Responsive & BEM

### 📋 Yêu cầu bài tập
- Dựng **Pricing section** (Bảng giá dịch vụ) hỗ trợ Responsive (sử dụng Flexbox hoặc CSS Grid).
- Đặt tên class chuẩn theo phương pháp **BEM** (Block - Element - Modifier).
- Thêm hiệu ứng hover mượt mà (`transition`, `transform`, `box-shadow`) cho từng card.

---

### 1. Cấu trúc HTML (Chuẩn BEM & Semantic HTML)

```html
<section class="pricing-section">
  <div class="pricing-section__header">
    <h2 class="pricing-section__title">Gói Dịch Vụ Lập Trình Web</h2>
    <p class="pricing-section__subtitle">Bảng giá các dịch vụ thiết kế và phát triển giao diện Frontend</p>
  </div>

  <div class="pricing-container">
    <!-- Card 1: Gói Landing Page -->
    <article class="pricing-card">
      <div class="pricing-card__header">
        <h3 class="pricing-card__title">Thiết Kế Landing Page</h3>
        <p class="pricing-card__price">1.500.000đ<span class="pricing-card__period">/trang</span></p>
      </div>
      <ul class="pricing-card__features">
        <li class="pricing-card__feature-item">✔ Giao diện Responsive chuẩn Mobile</li>
        <li class="pricing-card__feature-item">✔ Mã nguồn HTML5 Ngữ nghĩa chuẩn SEO</li>
        <li class="pricing-card__feature-item">✔ Tối ưu tốc độ tải trang</li>
      </ul>
      <button class="pricing-card__button">Liên Hệ Tư Vấn</button>
    </article>

    <!-- Card 2: Gói React Web App (Modifier: pricing-card--popular) -->
    <article class="pricing-card pricing-card--popular">
      <div class="pricing-card__badge">Được chọn nhiều nhất</div>
      <div class="pricing-card__header">
        <h3 class="pricing-card__title">Ứng Dụng Web React</h3>
        <p class="pricing-card__price">3.500.000đ<span class="pricing-card__period">/dự án</span></p>
      </div>
      <ul class="pricing-card__features">
        <li class="pricing-card__feature-item">✔ Giao diện React SPA mượt mà</li>
        <li class="pricing-card__feature-item">✔ Tích hợp RESTful API & State</li>
        <li class="pricing-card__feature-item">✔ Đặt tên Class chuẩn BEM dễ bảo trì</li>
      </ul>
      <button class="pricing-card__button pricing-card__button--primary">Đăng Ký Ngay</button>
    </article>

    <!-- Card 3: Gói Tối Ưu & Refactor UI -->
    <article class="pricing-card">
      <div class="pricing-card__header">
        <h3 class="pricing-card__title">Tối Ưu & Sửa Lỗi UI</h3>
        <p class="pricing-card__price">1.000.000đ<span class="pricing-card__period">/lần</span></p>
      </div>
      <ul class="pricing-card__features">
        <li class="pricing-card__feature-item">✔ Sửa lỗi vỡ khung Layout Responsive</li>
        <li class="pricing-card__feature-item">✔ Refactor CSS theo chuẩn BEM</li>
        <li class="pricing-card__feature-item">✔ Tăng điểm Accessibility (a11y)</li>
      </ul>
      <button class="pricing-card__button">Liên Hệ Tư Vấn</button>
    </article>
  </div>
</section>
```

---

### 2. Quy tắc đặt tên Class BEM (Block - Element - Modifier)

- **Block (Khối độc lập):** `.pricing-section`, `.pricing-card`
- **Element (Phần tử thuộc Block):**
  - `.pricing-card__title` (Tiêu đề card)
  - `.pricing-card__price` (Giá tiền)
  - `.pricing-card__features` (Danh sách tính năng)
  - `.pricing-card__button` (Nút đăng ký)
- **Modifier (Biến thể của Block/Element):**
  - `.pricing-card--popular` (Đánh dấu card nổi bật)
  - `.pricing-card__button--primary` (Đánh dấu nút nổi bật)

