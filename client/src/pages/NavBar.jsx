import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import logo from "../assets/logo-1.png";
import { locationsByRegion } from "../assets/Data/locations-sa.js"; 
import KHDropdown from "../components/Common/KHDropdown"; // ✅ unified dropdown
import "./NavBar.css";

const languages = [
  { label: "English", command: () => {} },
  { label: "Arabic", command: () => {} },
];

// Example categories (can expand later)
const categoriesModel = [
  {
    label: "Automotive",
    items: [
      { label: "Cars" },
      { label: "Motorcycles" },
      { label: "Auto Parts" },
    ],
  },
  {
    label: "Real Estate",
    items: [
      { label: "Apartments" },
      { label: "Villas" },
      { label: "Commercial" },
    ],
  },
  {
    label: "Electronics",
    items: [
      { label: "Mobiles" },
      { label: "Laptops" },
      { label: "Accessories" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Home Services" },
      { label: "Business Services" },
      { label: "Transport" },
    ],
  },
];

const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCity, setSelectedCity] = useState("Riyadh");

  // Build language model
  const languageModel = languages.map((lang) => ({
    label: lang.label,
    command: () => setSelectedLanguage(lang.label),
  }));

  // Build location model
  const locationModel = locationsByRegion.map((region) => ({
    label: region.region,
    items: region.items.map((city) => ({
      label: city.name,
      command: () => setSelectedCity(city.name),
    })),
  }));

  return (
    <nav className="navbar">
      {/* TOP ROW */}
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link" aria-label="KamHaza home">
            <img src={logo} alt="KamHaza" className="site-logo" />
          </Link>

          {/* Search bar */}
          <div className="p-inputgroup custom-input-product">
            <InputText
              className="input-height"
              placeholder="Search for anything..."
            />
            <Button
              icon="pi pi-search"
              className="search-btn"
              aria-label="Search"
            />
          </div>
        </div>

        <div style={{ paddingRight: "150px" }}></div>

        <div className="navbar-right">
          {/* Icons */}
          <div className="nav-icons">
            <div className="nav-icon" role="button" aria-label="Messages">
              <i className="pi pi-comments"></i>
              <span className="notification-badge">2</span>
            </div>
            <div className="nav-icon" role="button" aria-label="Wishlist">
              <i className="pi pi-heart"></i>
              <span className="notification-badge">5</span>
            </div>
            <div className="nav-icon" role="button" aria-label="Watchlist">
              <i className="pi pi-eye"></i>
              <span className="notification-badge">3</span>
            </div>
            <div className="nav-icon" role="button" aria-label="Notifications">
              <i className="pi pi-bell"></i>
              <span className="notification-badge">1</span>
            </div>
          </div>

          {/* Language dropdown */}
          <KHDropdown
            label={selectedLanguage}
            model={languageModel}
            variant="ghost"
            size="md"
            align="right"
            className="ml-2"
          />

          {/* Location dropdown */}
          <KHDropdown
            label={selectedCity}
            model={locationModel}
            variant="ghost"
            size="md"
            align="right"
            className="ml-2"
          />
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="navbar-links">
        <div className="navbar-links-inner">
          <div className="nav-links-left">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pill ${isActive ? "pill--primary" : "pill--ghost"} pill--lg`
              }
            >
              Home
            </NavLink>

            {/* Categories dropdown using KHDropdown */}
            <KHDropdown
              label="Categories"
              model={categoriesModel}
              variant="ghost"
              size="md"
              align="left"
              className="ml-2"
            />

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `pill ${isActive ? "pill--primary" : "pill--ghost"} pill--lg`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `pill ${isActive ? "pill--primary" : "pill--ghost"} pill--lg`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `pill ${isActive ? "pill--primary" : "pill--ghost"} pill--lg`
              }
            >
              Admin
            </NavLink>
          </div>

          <Link to="/auth" aria-label="Login or Register">
            <Button label="Login / Register" className="login-btn" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;