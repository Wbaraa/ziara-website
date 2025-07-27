// src/pages/Signup.jsx
import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    Business_name: "",
    email: "",
    password: "",
    confirm: "",
    services: [],     // track which services are checked
  });

  const servicesList = [
    { id: "shop",       label: "Shop",       img: "/image/shop.png" },
    { id: "restaurant", label: "Restaurant", img: "/image/pizza.png" },
    { id: "hotel",      label: "Hotel",      img: "/image/hotel.png" },
    { id: "activity",   label: "Activity",   img: "/image/activity-place.png" },
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "services") {
      setForm((f) => {
        const next = checked
          ? [...f.services, value]
          : f.services.filter((s) => s !== value);
        return { ...f, services: next };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: client‑side validation & API call
    console.log("Signing up with:", form);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left side: illustration */}
        <div className="signup-image">
          <img src="/image/intro.png" alt="Sign up illustration" />
        </div>

        {/* Right side: form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <label>
            Business_name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </label>

          {/* — Service selection boxes */}
          <div className="service-selection">
            <p className="service-selection__title">Select your services:</p>
            {servicesList.map((svc) => (
         <label
    key={svc.id}
    className={`service-box service-${svc.id}`}
  >
    <input
      type="checkbox"
      name="services"
      value={svc.id}
      checked={form.services.includes(svc.id)}
      onChange={handleChange}
    />
    <img
      src={svc.img}
      alt={svc.label}
      className="service-icon"
    />
    <span>{svc.label}</span>
  </label>
))}

          </div>

          <button type="submit" className="btn signup-submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
