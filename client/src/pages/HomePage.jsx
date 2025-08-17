import React, { useEffect, useRef, useState } from "react";
import { mockProducts } from "../assets/data/MockData.js";
import { TieredMenu } from "primereact/tieredmenu";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const menu = useRef(null);
  const navigate = useNavigate();

  // Category structure with subcategories (edit as needed)
  const categoryFilters = {
    electronics: ["Mobile", "Laptop", "Camera"],
    vehicles: ["Cars", "Motorcycles", "Trucks"],
    fashion: ["Men", "Women", "Accessories"],
    "real-estate": ["Rent", "Buy", "Commercial"],
    "home-garden": ["Furniture", "Decor", "Gardening"],
  };

  const categories = [
    { key: "electronics", label: "Electronics" },
    { key: "vehicles", label: "Vehicles" },
    { key: "real-estate", label: "Real Estate" },
    { key: "fashion", label: "Fashion" },
    { key: "home-garden", label: "Home & Garden" },
  ];

  // Convert to TieredMenu model
  const menuItems = categories.map((cat) => ({
    label: cat.label,
    items: (categoryFilters[cat.key] || []).map((sub) => ({
      label: sub,
      command: () =>
        navigate(
          `/category/${cat.key}/${sub.toLowerCase().replace(/\s+/g, "-")}`
        ),
    })),
  }));

  useEffect(() => {
    // Load featured items (your original behavior)
    setFeaturedProducts(mockProducts.filter((p) => p.featured));
  }, []);

  return (
    <>
      {/* Page wrapper */}
      <div className="page" id="homePage">
        {/* Categories pill directly under navbar (aligned left) */}
        <div className="categories-under-nav">
          <TieredMenu model={menuItems} popup ref={menu} className="custom-tiered" />
          <Button
            label="Categories"
            className="pill pill--primary pill--md"
            onClick={(e) => menu.current.toggle(e)}
            onMouseEnter={(e) => {
              // if not already open, show on hover
              if (!menu.current.container.offsetParent) menu.current.show(e);
            }}
          />
        </div>

        {/* Hero Section (unchanged) */}
        <section className="hero">
          <div className="hero-content">
            <h1>Find Everything You Need</h1>
            <p>Buy and sell with confidence on KamHaza</p>
            <button className="btn-primary btn-lg" id="postAdBtn">
              Post Free Ad
            </button>
          </div>
        </section>

        {/* Featured Listings (unchanged) */}
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2>Featured Listings</h2>
              <a href="/listings" className="btn-outline">
                View All
              </a>
            </div>

            <div className="products-grid">
              {featuredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.images[0]} alt={product.title} />
                    <button className="wishlist-btn">
                      <i className="fa fa-heart"></i>
                    </button>
                    {product.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>

                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <div className="product-price">
                      <span className="current-price">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="original-price">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="product-meta">
                      <span className="location">
                        <i className="fa fa-map-marker"></i>
                        {product.location.area}, {product.location.city}
                      </span>
                      <span className="date">
                        {new Date(product.postedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* How it Works (unchanged) */}
      <section className="how-it-works">
        <div className="container">
          <h2>How KamHaza Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">🔍</div>
              <h3>Browse & Search</h3>
              <p>
                Find exactly what you're looking for with our powerful search
                and filters
              </p>
            </div>
            <div className="step">
              <div className="step-icon">💬</div>
              <h3>Connect & Chat</h3>
              <p>Message sellers directly through our secure chat system</p>
            </div>
            <div className="step">
              <div className="step-icon">🤝</div>
              <h3>Meet & Deal</h3>
              <p>
                Meet in person, inspect the item, and complete your purchase
                safely
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;