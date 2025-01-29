import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/home.scss";
import SvgSubtitle from "../components/SvgSubtitle";
import Button from "../components/Button";
import AnimatedSection from "../components/AnimatedSection";
import wcu1 from "../assets/images/hero2.jpg";
import wcu2 from "../assets/images/hero3.jpg";
import wcu3 from "../assets/images/hero4.jpg";
import wcu4 from "../assets/images/hero9.jpg";
import { PiArmchairLight, PiLampLight, PiOfficeChairLight } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <Hero />
      <Container fluid className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="about-images">
              <div className="image-wrapper">
                <div className="main-image-wrapper shine-hover">
                  <img
                    src="src/assets/images/hero7.jpg"
                    alt="Living Room 1"
                    className="main-image"
                  />
                </div>
                <div className="overlay-image-wrapper shine-hover">
                  <img
                    src="src/assets/images/hero5.jpg"
                    alt="Living Room 2"
                    className="overlay-image"
                  />
                </div>
                <span className="rotated-text d-none d-xl-block">Laughing Wood</span>
              </div>
            </Col>
            <Col lg={6} className="about-content">
              <SvgSubtitle text="About Us" color="primary" />
              <AnimatedSection
                title="Our passion for design, your vision realized."
                description="Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail. Whether it’s transforming a single room or an entire home."
                styles={{
                  title: { color: "var(--color-black)" },
                  description: { color: "var(--color-black)" },
                }}
              />
              <ul className="features">
                <li>
                  <FaCheckCircle className="icon" />
                  <span>Creative expertise</span>
                </li>
                <li>
                  <FaCheckCircle className="icon" />
                  <span>Client-centered approach</span>
                </li>
              </ul>
              <Button text="Read More" variant="primary" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="px-0 py-5 whychooseus-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <SvgSubtitle text="Why Choose Us" color="primary" />
              <AnimatedSection
                title="A behind-the-scenes look at our agency"
                description="From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert craftsmanship."
                styles={{
                  title: { color: "var(--color-black)" },
                  description: { color: "var(--color-black)" },
                }}
              />
              <div className="features-list ms-lg-2 me-lg-4">
                <div className="feature-item d-flex gap-3 border-bottom">
                  <div className="icon-circle rounded-circle">
                    <PiLampLight size={25} />
                  </div>
                  <div className="whychooseus-content">
                    <h5>Tailored Design Solutions</h5>
                    <p className="mb-0">We provide personalized interior design services that reflect your unique vision and lifestyle.</p>
                  </div>
                </div>
                <div className="feature-item d-flex border-bottom gap-3">
                  <div className="icon-circle rounded-circle">
                    <PiArmchairLight size={25} />
                  </div>
                  <div className="whychooseus-content">
                    <h5>Seamless Project Management</h5>
                    <p className="mb-0">We handle the entire design process, from concept to completion, with flawless execution.</p>
                  </div>
                </div>
                <div className="feature-item d-flex gap-3">
                  <div className="icon-circle rounded-circle">
                    <PiOfficeChairLight size={25} />
                  </div>
                  <div className="whychooseus-content">
                    <h5>Client-Centered Collaboration</h5>
                    <p className="mb-0">Your input is valued throughout the entire process, ensuring your vision is fully realized.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image-grid d-flex flex-column pt-lg-0 pt-3">
                <div className="row">
                  <div className="image image1 pe-0 shine-hover">
                    <img src={wcu1} alt="Interior Design 1" />
                  </div>
                  <div className="image image2 shine-hover">
                    <img src={wcu2} alt="Interior Design 2" />
                  </div>
                </div>
                <div className="row">
                  <div className="image image3 pe-0 shine-hover">
                    <img src={wcu3} alt="Interior Design 3" />
                  </div>
                  <div className="image image4 shine-hover">
                    <img src={wcu4} alt="Interior Design 4" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
