import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleCtaClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">My App</div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <h1>Welcome to My Awesome App</h1>
          <p>
            Build stunning and modern user interfaces with React and Vite. 
            Experience blazing fast load times and an optimized development workflow.
          </p>
          <button className="cta-button" onClick={handleCtaClick}>
            Get Started {clickCount > 0 && `(${clickCount})`}
          </button>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Blazing Fast</h3>
            <p>Powered by Vite for an incredibly fast development server and optimized build.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h3>React Enabled</h3>
            <p>Build component-based, reusable, and dynamic user interfaces effortlessly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Clean and beautiful UI inspired by the latest modern web design practices.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
