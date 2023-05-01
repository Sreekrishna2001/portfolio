import React from "react";
import { useSpring, animated } from "react-spring";
import "./Education.css";

const Education = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} id= "education" className="education-container">
      <h1>Education</h1>
      <div className="education-section">
        <h2>10th Grade</h2>
        <p>Board: XYZ Board</p>
        <p>Year of Passing: 20XX</p>
        <p>Percentage: XX%</p>
      </div>
      <div className="education-section">
        <h2>+2</h2>
        <p>Board: XYZ Board</p>
        <p>Year of Passing: 20XX</p>
        <p>Percentage: XX%</p>
      </div>
      <div className="education-section">
        <h2>B.Tech</h2>
        <p>College: XYZ College</p>
        <p>Branch: Computer Science and Engineering</p>
        <p>Year of Passing: 20XX</p>
        <p>CGPA: X.XX</p>
      </div>
    </animated.div>
  );
};

export default Education;
