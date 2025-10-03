import React from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and Vite",
      excerpt:
        "Learn how to set up a modern React application using Vite for faster development.",
      author: "John Doe",
      date: "March 15, 2025",
      category: "Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Bootstrap 5 Best Practices",
      excerpt:
        "Discover the best practices for using Bootstrap 5 in your web projects.",
      author: "Jane Smith",
      date: "March 10, 2025",
      category: "Design",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building Responsive Web Applications",
      excerpt:
        "Tips and tricks for creating web applications that work great on all devices.",
      author: "Mike Brown",
      date: "March 5, 2025",
      category: "Development",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging trends and technologies shaping the future of web development.",
      author: "Sarah Johnson",
      date: "February 28, 2025",
      category: "Technology",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "UX Design Principles That Matter",
      excerpt:
        "Essential UX design principles every developer and designer should know.",
      author: "Alex Wilson",
      date: "February 25, 2025",
      category: "Design",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Optimizing Website Performance",
      excerpt:
        "Techniques to improve your website's loading speed and overall performance.",
      author: "Chris Davis",
      date: "February 20, 2025",
      category: "Performance",
      readTime: "9 min read",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Design",
    "Technology",
    "Performance",
  ];

  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">Our Blog</h1>
            <p className="lead text-muted">
              Stay updated with the latest insights, tips, and industry news
            </p>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn ${
                    index === 0 ? "btn-primary" : "btn-outline-primary"
                  } mb-2`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-primary">{post.category}</span>
                    <small className="text-muted">{post.readTime}</small>
                  </div>

                  <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                  <p className="card-text text-muted mb-4">{post.excerpt}</p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted d-block">
                        By {post.author}
                      </small>
                      <small className="text-muted">{post.date}</small>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row mt-5">
          <div className="col-12">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item active">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-primary text-white rounded p-5 text-center">
              <h3 className="fw-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="mb-4">
                Get the latest blog posts and updates delivered to your inbox.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button className="btn btn-light" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
