import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering React 19: What's New",
      excerpt: "Explore the latest features and optimizations in React 19, including new hooks and performance enhancements.",
      date: "Oct 24, 2026",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "A deep dive into how AI and edge computing are shaping the next generation of web applications.",
      date: "Oct 20, 2026",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Designing for Accessibility",
      excerpt: "Why inclusive design matters and how to implement WCAG guidelines effectively in modern apps.",
      date: "Oct 15, 2026",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Latest Insights</h1>
        <p>Discover our latest thoughts, tutorials, and updates.</p>
      </div>
      
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-category">Development</div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>{post.date}</span>
                <span className="dot"></span>
                <span>{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <button className="read-more">Read Article <span className="arrow">→</span></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
