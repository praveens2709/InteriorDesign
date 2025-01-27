import React, { useEffect } from "react";
import "../styles/hero.scss";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import anime from "animejs";

const Hero = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".animated-heading");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({ loop: false })
        .add({
          targets: ".animated-heading .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 500,
          delay: (el, i) => 30 * (i + 1),
        })
        .add({
          targets: ".subtitle, .description, .buttons",
          opacity: [0, 1],
          translateY: [30, 0],
          easing: "easeInOutQuad",
          duration: 1000,
        });
    }
  }, []);

  return (
    <section className="hero d-flex flex-column">
      <Header />
      <Container>
        <div className="hero-content d-flex flex-column gap-4">
          <p className="subtitle mb-0">Where Nature Meets Design</p>
          <h1 className="title mb-0 animated-heading">
            Designing nature-inspired spaces, for you.
          </h1>
          <p className="description">
            At Laughing Wood Interiors, we bring your vision to life with a touch of nature,
            a dash of creativity, and a whole lot of heart.
          </p>
          <div className="buttons d-flex gap-3">
            <button className="btn-1">
              Explore More <FiArrowRight />
            </button>
            <button className="btn-2">
              View Projects <FiArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
