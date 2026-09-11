import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <a href="#">Nguyễn Văn Tý</a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#about">BT1: Giới thiệu</a></li>
            <li><a href="#skills">Kỹ năng</a></li>
            <li><a href="#pricing">BT2: Bảng giá (BEM)</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* ==================== BÀI TẬP 1: HTML NGỮ NGHĨA ==================== */}
        {/* Hero / Intro */}
        <section id="hero" className="hero-section">
          <h1>Xin chào, tôi là Nguyễn Văn Tý</h1>
          <p className="subtitle">Junior Frontend Developer</p>
          <p>
            Tôi đang học tập và phát triển kỹ năng lập trình web với HTML5, CSS3, JavaScript và React.
            Mục tiêu của tôi là tạo ra các trang web chuẩn SEO, tối ưu trải nghiệm người dùng và dễ bảo trì.
          </p>
        </section>

        {/* Về tôi */}
        <section id="about" className="about-section">
          <h2>Về tôi</h2>
          <div className="about-content">
            <article className="bio-article">
              <h3>Mục tiêu phát triển</h3>
              <p>
                Nắm vững nền tảng HTML/CSS và JavaScript thuần trước khi đi sâu vào các thư viện và framework.
                Tôi chú trọng viết code ngữ nghĩa (Semantic HTML) và tuân thủ các chuẩn giao diện cơ bản.
              </p>
            </article>
            <aside className="info-aside">
              <h3>Thông tin cá nhân</h3>
              <ul>
                <li><strong>Họ tên:</strong> Nguyễn Văn Tý</li>
                <li><strong>Vị trí:</strong> Junior Frontend</li>
                <li><strong>Trạng thái:</strong> Đang học tập & Tìm kiếm cơ hội</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Kỹ năng */}
        <section id="skills" className="skills-section">
          <h2>Kỹ năng chuyên môn</h2>
          <div className="skills-group">
            <article className="skill-item">
              <h3>HTML & CSS</h3>
              <p>Thẻ ngữ nghĩa (Semantic tags), Flexbox, CSS Grid, Responsive Web Design.</p>
            </article>
            <article className="skill-item">
              <h3>JavaScript</h3>
              <p>ES6+, DOM Manipulation, Event Handling, Async/Await.</p>
            </article>
            <article className="skill-item">
              <h3>Công cụ</h3>
              <p>Git, GitHub, VS Code, Chrome DevTools.</p>
            </article>
          </div>
        </section>

        {/* ==================== BÀI TẬP 2: FLEXBOX, GRID, RESPONSIVE & BEM ==================== */}
        <section id="pricing" className="pricing-section">
          <div className="pricing-section__header">
            <h2 className="pricing-section__title">Gói Dịch Vụ Lập Trình Web (BT2 - BEM & Responsive)</h2>
            <p className="pricing-section__subtitle">Dựng giao diện Pricing Section Responsive với Flexbox/Grid và chuẩn BEM</p>
          </div>

          <div className="pricing-container">
            {/* Card 1: Gói Landing Page */}
            <article className="pricing-card">
              <div className="pricing-card__header">
                <h3 className="pricing-card__title">Thiết Kế Landing Page</h3>
                <p className="pricing-card__price">1.500.000đ<span className="pricing-card__period">/trang</span></p>
              </div>
              <ul className="pricing-card__features">
                <li className="pricing-card__feature-item">✔ Giao diện Responsive chuẩn Mobile</li>
                <li className="pricing-card__feature-item">✔ Mã nguồn HTML5 Ngữ nghĩa chuẩn SEO</li>
                <li className="pricing-card__feature-item">✔ Tối ưu tốc độ tải trang</li>
              </ul>
              <button className="pricing-card__button">Liên Hệ Tư Vấn</button>
            </article>

            {/* Card 2: Gói React Web App (BEM Modifier: pricing-card--popular) */}
            <article className="pricing-card pricing-card--popular">
              <div className="pricing-card__badge">Được chọn nhiều nhất</div>
              <div className="pricing-card__header">
                <h3 className="pricing-card__title">Ứng Dụng Web React</h3>
                <p className="pricing-card__price">3.500.000đ<span className="pricing-card__period">/dự án</span></p>
              </div>
              <ul className="pricing-card__features">
                <li className="pricing-card__feature-item">✔ Giao diện React SPA mượt mà</li>
                <li className="pricing-card__feature-item">✔ Tích hợp RESTful API & State</li>
                <li className="pricing-card__feature-item">✔ Đặt tên Class chuẩn BEM dễ bảo trì</li>
              </ul>
              <button className="pricing-card__button pricing-card__button--primary">Đăng Ký Ngay</button>
            </article>

            {/* Card 3: Gói Tối Ưu & Sửa Lỗi UI */}
            <article className="pricing-card">
              <div className="pricing-card__header">
                <h3 className="pricing-card__title">Tối Ưu & Sửa Lỗi UI</h3>
                <p className="pricing-card__price">1.000.000đ<span className="pricing-card__period">/lần</span></p>
              </div>
              <ul className="pricing-card__features">
                <li className="pricing-card__feature-item">✔ Sửa lỗi vỡ khung Layout Responsive</li>
                <li className="pricing-card__feature-item">✔ Refactor CSS theo chuẩn BEM</li>
                <li className="pricing-card__feature-item">✔ Tăng điểm Accessibility (a11y)</li>
              </ul>
              <button className="pricing-card__button">Liên Hệ Tư Vấn</button>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Nguyễn Văn Tý. Bài tập DEV-FE-001 (BT1 & BT2).</p>
      </footer>
    </div>
  );
}

export default App;




