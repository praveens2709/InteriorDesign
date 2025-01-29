import React from "react";
import "../styles/hero.scss";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Button from "./Button";
import SvgSubtitle from "./SvgSubtitle";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="hero d-flex flex-column">
      <Header />
      <Container>
        <div className="hero-content d-flex flex-column gap-4">
          <SvgSubtitle text="Where Nature Meets Design" color="var(--color-white)" />
          <AnimatedSection
            title="Designing nature-inspired spaces, for you."
            description="At Laughing Wood Interiors, we bring your vision to life with a touch of nature, a dash of creativity, and a whole lot of heart."
            styles={{
              title: { color: "var(--color-white)" },
              description: { color: "var(--color-white)" },
            }}
          />
          <div className="buttons d-flex gap-3">
            <Button text="Explore More" variant="primary" />
            <Button text="View Projects" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
