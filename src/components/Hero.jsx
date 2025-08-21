import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src="/pp.jpg" alt="Profile" />
      <h1>Hi, aku Achmad Iqbal</h1>
      <p>Student | Portfolio</p>
      <a
        href="#contact"
        style={{ color: "#fff", fontWeight: "bold" }}
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;
