import React from "react";
import { useSpring, animated } from "react-spring";
import "./Intro.css";

const Intro = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <animated.div style={fadeIn} id = 'intro' className="introduction-container">
      <h1>Hi, I'm Sree Krishna</h1>
      <h2>A Software Engineer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
        ultricies arcu. Nam ullamcorper, elit ac pellentesque ultrices, nibh
        felis sodales arcu, id gravida magna dolor id massa.
      </p>
      <button className="view-projects-btn" onClick={scrollToProjects}>
        View Projects
      </button>
    </animated.div>
  );
};

export default Intro;
