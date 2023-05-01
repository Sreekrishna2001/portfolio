import React from "react";
import { useSpring, animated } from "react-spring";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: "ABC Company",
      position: "Software Engineer",
      startDate: "June 2018",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      company: "XYZ Inc.",
      position: "Front-end Developer",
      startDate: "May 2017",
      endDate: "June 2018",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="experience-container">
      <h1>Experience</h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className="job-card">
          <h2>{experience.position}</h2>
          <h3>{experience.company}</h3>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <p>{experience.description}</p>
        </div>
      ))}
    </animated.div>
  );
};

export default Experience;
