import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "../../styles/auth.css"; // light card styles (new)
// import "./Login.css";        // <- comment out if this forces dark background

export default function LoginPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="auth-page" id="authPage">
      <div className="auth-card">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          className="auth-tab-header"
        >
          <TabPanel header="Login">
            <div className="auth-form" id="loginForm">
              <h2 className="mb-3">Welcome Back</h2>
              <form id="loginFormEl">
                <div className="form-group">
                  <label className="form-label">Email or Phone</label>
                  <input type="text" className="form-control" id="loginEmail" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" required />
                </div>
                <button type="submit" className="btn-primary btn-full-width">Login</button>
              </form>

              <div className="auth-divider"><span>or</span></div>

              <button className="btn-outline btn-full-width google-btn">
                <i className="fab fa-google"></i> Continue with Google
              </button>

              <div className="auth-links">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </TabPanel>

          <TabPanel header="Register">
            <div className="auth-form" id="registerForm">
              <h2 className="mb-3">Create Account</h2>
              <form id="registerFormEl">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="registerName" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" id="registerEmail" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="registerPhone" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <select className="form-control" id="registerLocation" required>
                    <option value="">Select Location</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="registerPassword" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="registerConfirmPassword" required />
                </div>
                <button type="submit" className="btn-primary btn-full-width">Create Account</button>
              </form>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}