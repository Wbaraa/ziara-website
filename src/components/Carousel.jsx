// src/components/Carousel.jsx
import React, { useState } from "react";
import "./Carousel.css";

const slides = [
  {
    title: "ziara",
    image: "/image/intro.png",
    bgColor: "#faf0e6",            // light ivory
    fontFamily: "'Rampart One', cursive",  // example custom font
    
  },
  {
    title: "Discover Lebanon Like Never Before",
    description:
      "Explore hidden gems, cultural wonders, and local experiences—all in one app.",
    image: "/image/map.png",
    bgColor: "#FAC75C",           // pale cyan
  },
  {
    title: "From Ancient Ruins to Sacred Spaces",
    description: "Visit Lebanon’s rich history and diverse spiritual landmarks.",
    image: "/image/window.png",
    bgColor: "#fff5e6",           // pale peach
  },
  {
    title: "Ask the Locals, Get Insider Tips",
    description: "Chat, ask questions, or discover new places—all through AI chat.",
    image: "/image/Car.png",
    bgColor: "#FAC75C",           // pale cyan      
  },
  {
    title: "Dine Like a Local",
    description: "Discover traditional Lebanese restaurants and street‑food favorites.",
    image: "/image/Hummus.png",
    bgColor: "#fff5e6",           // pale peach
  },
  {
    title: "Support Local & Take Home a Memory",
    description:
      "Browse souvenirs and handcrafted treasures from small Lebanese businesses.",
    image: "/image/tarbushPackage.png",
    bgColor: "#FAC75C",           // pale cyan  
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const { title, description, image, bgColor, fontFamily } = slides[index];

  return (
    <div className="carousel">
      <div className="slide" style={{ backgroundColor: bgColor }}>
        {/* arrows now inside the slide */}
        <button className="arrow arrow-left" onClick={prevSlide}>
          ‹
        </button>

        <img src={image} alt={title} />

        <div
          className="slide-content"
          style={{
            ...(fontFamily ? { fontFamily } : {}),
          }}
        >
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <button className="arrow arrow-right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
}
