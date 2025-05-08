import React from "react";
import Footer from "./Footer";
import Navcomponent from "./Navcomponent";
import AboutCarousel from "./AboutCarousel";

const steps = [
  {
    number: "01",
    title: "Research & Analyze",
    text: "At FurniSphere, we begin by understanding interior trends, customer needs, and market gaps. Our team conducts in-depth research to identify what modern homes truly need.",
    image: "static/images/research.jpg",
  },
  {
    number: "02",
    title: "Concept & Sketch",
    text: "From minimalist concepts to bold ideas, we sketch every piece with intention. Our designers blend form and function, ensuring each product fits effortlessly into your space.",
    image: "static/images/concept.jpg",
  },
  {
    number: "03",
    title: "Design & Brand",
    text: "Each furniture piece reflects our brand—modern, durable, and timeless. We focus on clean lines, sustainable materials, and the aesthetic harmony your home deserves.",
    image: "static/images/design.png",
  },
  {
    number: "04",
    title: "Market & Advertise",
    text: "We connect with customers through digital storytelling, visuals, and community-driven campaigns. Our goal is to make stylish living accessible and inspiring",
    image: "static/images/marketing.jpg",
  },
];

const AboutUs = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    fontFamily: "Helvetica, sans-serif",
  };

  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "120px",
    flexWrap: "wrap",
  };

  const textColumnStyle = {
    flex: 1,
    minWidth: "300px",
  };

  const numberColumnStyle = {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#ff7a00",
  };

  const paragraphStyle = {
    fontSize: "15px",
    color: "#000",
    lineHeight: "1.6",
  };

  const numberWrapperStyle = {
    position: "relative",
    width: "300px",
    height: "240px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const numberStyle = (image) => ({
    fontSize: "220px",
    fontWeight: "900",
    lineHeight: "1",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textAlign: "center",
    fontFamily: "'ITC Stone Sans II', sans-serif",
  });

  const dividerStyle = {
    height: "1px",
    backgroundColor: "#e0e0e0",
    margin: "60px 0",
  };

  return (
    <div>
      {/* Inline @font-face declaration */}
      <style>
        {`
          @font-face {
            font-family: 'ITC Stone Sans II';
            src: url('/fonts/ITCStoneSansII-Regular.woff2') format('woff2'),
                 url('/fonts/ITCStoneSansII-Regular.woff') format('woff');
            font-weight: 900;
            font-style: normal;
          }
        `}
      </style>

      <Navcomponent />
      <AboutCarousel />
      <div style={containerStyle}>
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  ...sectionStyle,
                  flexDirection: isEven ? "row-reverse" : "row",
                }}
              >
                <div style={textColumnStyle}>
                  <h3 style={headingStyle}>{step.title}</h3>
                  <p style={paragraphStyle}>{step.text}</p>
                </div>
                <div style={numberColumnStyle}>
                  <div style={numberWrapperStyle}>
                    <div style={numberStyle(step.image)}>{step.number}</div>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && <div style={dividerStyle}></div>}
            </React.Fragment>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
