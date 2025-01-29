import React, { useEffect } from "react";
import "../styles/svg.scss";
import anime from "animejs";

const SvgSubtitle = ({ text, color = "var(--color-white)" }) => {
  useEffect(() => {
    anime({
      targets: ".subtitle-wrapper",
      opacity: [0, 1],
      translateX: [-50, 0],
      easing: "easeOutExpo",
      duration: 1000,
    });
  }, []);

  const subtitleClass = color === "var(--color-white)" ? "white" : "primary";

  return (
    <div
      className={`subtitle-wrapper d-flex align-items-center gap-2 ${subtitleClass}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="6"
        viewBox="0 0 27 6"
        className="subtitle-icon"
      >
        <path d="M26.8868 3L24 0.113249L21.1132 3L24 5.88675L26.8868 3ZM0 3.5H24V2.5H0V3.5Z" />
      </svg>
      <p className="subtitle mb-0">{text}</p>
    </div>
  );
};

export default SvgSubtitle;
