import React, { useEffect } from "react";
import anime from "animejs";

const AnimatedSection = ({
  title,
  description,
  animationDelay = 500,
  styles = {},
}) => {
  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".animated-section .title .letter",
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 50 * i,
        offset: `+=${animationDelay}`,
      })
      .add({
        targets: ".animated-section .description",
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeInOutQuad",
        duration: 800,
        offset: `+=${animationDelay}`,
      });
  }, [animationDelay]);

  return (
    <div className="animated-section d-flex flex-column gap-3">
      {title && (
        <h1 className="title animated-heading" style={{ ...styles.title, color: styles.title?.color || "var(--color-white)" }}>
          {title.split("").map((char, i) => (
            <span key={i} className="letter">
              {char}
            </span>
          ))}
        </h1>
      )}
      {description && (
        <p className="description" style={{ ...styles.description, color: styles.description?.color || "var(--color-white)" }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default AnimatedSection;
