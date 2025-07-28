// src/pages/AdditionalInfo.jsx
import React, { useState } from "react";
import "./AdditionalInfo.css";

export default function AdditionalInfo({ onNext }) {
  const [info, setInfo] = useState({
    city: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User info:", info);
    if (onNext) onNext(info);
    // otherwise send to your API or router push
  };

  return (
    <div className="info-page">
      {/* we no longer need a two‐column container */}
      <form className="info-form" onSubmit={handleSubmit}>
        <h2>Tell Us More</h2>

        <label>
          City
          <input
            type="text"
            name="city"
            value={info.city}
            onChange={handleChange}
            placeholder="e.g. Beirut"
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="+961-3-123456"
            required
          />
        </label>

        <label>
          Address / Location
          <input
            type="text"
            name="address"
            value={info.address}
            onChange={handleChange}
            placeholder="Your street & building"
            required
          />
        </label>

        <button type="submit" className="btn info-submit">
          Continue
        </button>
      </form>
    </div>
  );
}
