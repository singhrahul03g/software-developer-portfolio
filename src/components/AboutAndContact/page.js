import React from "react";
import "./style.css";
import Link from "next/link";

const AboutAndContactSection = () => {
  return (
    <div className="about-contact-section">
      <div className="about-section">
        <Link href={"/about"} className="about-border">
          <p className="continue-exploring">Continue Exploring?</p>
          <h1 className="about-me-text">About Me</h1>
        </Link>
      </div>
      <div className="contact-section">
        <Link href={"/contact"} className="contact-border">
          <h1>Interested?</h1>
          <p>Contact Me</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutAndContactSection;
