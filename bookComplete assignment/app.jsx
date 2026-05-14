import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-wrapper">

      {/* Left Side */}
      <div className="left-side">
        <div className="overlay">
          <h1>Create Account</h1>
          <p>
            Join our modern platform and manage your profile with a clean
            dashboard experience.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side">

        <form className="form-box">

          <h2 className="form-title">Sign Up</h2>

          <div className="row g-3">

            <div className="col-md-6">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="First Name"
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Last Name"
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                className="form-control custom-input"
                placeholder="Phone Number"
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                className="form-control custom-input"
                placeholder="Age"
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Nationality"
              />
            </div>

            <div className="col-md-6 d-flex align-items-center gap-4 gender-box">

              <label className="d-flex align-items-center gap-2">
                <input type="radio" name="gender" />
                Male
              </label>

              <label className="d-flex align-items-center gap-2">
                <input type="radio" name="gender" />
                Female
              </label>

            </div>

            <div className="col-12">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="Email Address"
              />
            </div>

            <div className="col-12">
              <input
                type="password"
                className="form-control custom-input"
                placeholder="Password"
              />
            </div>

            <div className="col-12">
              <textarea
                className="form-control custom-textarea"
                placeholder="Write About Yourself..."
              ></textarea>
            </div>

            <div className="col-12">
              <button className="submit-btn">
                Create Account
              </button>
            </div>

          </div>

        </form>

      </div>

    </div>
  );
}

export default App;