import { useState } from "react";
import "./about.css";
import { useFadeInOnScroll } from "./useFadeInOnScroll";
import CV from "../SAMMY.RN.CV.pdf";


const About = () => {
  const [showExperience, setShowExperience] = useState(true);

  const skills = [
    {
      id: 1,
      name: "HTML5",
      value: "95%",
    },
    {
      id: 2,
      name: "CSS",
      value: "90%",
    },
    {
      id: 3,
      name: "JAVASRIPT",
      value: "90%",
    },
    {
      id: 4,
      name: "REACT",
      value: "80%",
    },
    {
      id: 5,
      name: "REACT NATIVE / EXPO",
      value: "70%",
    },
    {
      id: 6,
      name: "NODE",
      value: "70%",
    },
    {
      id: 7,
      name: "EXPRESS",
      value: "85%",
    },
    {
      id: 8,
      name: "MYSQL2",
      value: "88%",
    },
  ];

  const experiences = {
    professional: [
      {
        title: "Front End Developer",
        organization: "Freelance",
        date: "Feb 2024 - till Date",
        description: "Developed user friendly interfaces for companies.",
      },
    ],
    extracurricular: [
      {
        title: "Secretary",
        organization: "Industrial Training Fund Yenagoa",
        date: "March 2023 - August 2024",
        description: "Worked as an intern/assistant",
      },
    ],
  };

  const [mainTitleRef, mainTitleVisible] = useFadeInOnScroll();
  const [leftAboutRef, leftAboutVisible] = useFadeInOnScroll();
  const [rightAboutRef, rightAboutVisible] = useFadeInOnScroll();
  const [statsRef, statsVisible] = useFadeInOnScroll();
  const [timelineBtnRef, timelineBtnVisible] = useFadeInOnScroll();
  const [timelineRef, timelineVisible] = useFadeInOnScroll();

  return (
    <section id="about" className="section two">
      <div className={`main-title box ${mainTitleVisible ? "activate" : ""}`} ref={mainTitleRef}>
        <h2>
          About <span>me</span>
        </h2>
      </div>
      <div className="about-container">
        <div className={`left-about box ${leftAboutVisible ? "activate" : ""}`} ref={leftAboutRef}>
          <h4>Get to know more</h4>
          <p className="about-text">
            Hi, I’m <span> Samuel Kpun — a passionate full-stack developer </span> with a
            strong focus on building responsive, user-driven applications from
            the ground up. I work mainly with <span>React, React Native, Node.js, and
            MySQL, </span> and I enjoy turning complex ideas into practical, working
            products. I have worked on a few projects with
            <span> custom authentication, relational database, and fully integrate API's </span> — all
            without relying on third-party platforms like Firebase. I prefer
            full control over both frontend and backend, and I love working with
            tools like Zustand, Express, and JWT to create smooth, secure user
            experiences. Whether it's designing scalable backend logic or
            crafting intuitive mobile interfaces, I’m always learning,
            iterating, and pushing projects to the next level.
          </p>
          <div className="btns-container">
            <div className="btn-con">
              <a href={CV} target="_blank" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={`right-about box ${rightAboutVisible ? "activate" : ""}`} ref={rightAboutRef}>
          <div className="about-item">
            <div className="about-text">
              <i className="fas fa-university"></i>
              <h4 className="large-text">Experience</h4>
              <p className="small-text">
                2+ years <br />
                Front-end Development
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <i className="fas fa-medal"></i>
              <h4 className="large-text">Education</h4>
              <p className="small-text">
                Bachelors degree <br />
                Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"about-stats"} ref={statsRef}>
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {skills.map((skill) => (
            <div className={`progress-bar box ${statsVisible ? "activate" : ""}`} key={skill.id}>
              <p className="prog-title">{skill.name}</p>
              <div className="progress-con">
                <p className="prog-text">{skill.value}</p>
                <div className="progress">
                  <span style={{ width: `${skill.value}` }}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4 className="stat-title">My Timeline</h4>
      <div className={`timeline-btn-wrap box ${timelineBtnVisible ? "activate" : ""}`} ref={timelineBtnRef}>
        <button
          className={showExperience === true ? "active" : null}
          onClick={() => setShowExperience(true)}
        >
          Professional
        </button>
        <button
          className={showExperience === false ? "active" : null}
          onClick={() => setShowExperience(false)}
        >
          Extracurricular
        </button>
      </div>
      <div className={`timeline ${timelineVisible ? "activate" : ""}`} ref={timelineRef}>
        {showExperience
          ? experiences.professional.map((exp) => (
              <div class="timeline-item">
                <div class="tl-icon">
                  <i class="fas fa-briefcase"></i>
                </div>
                <p class="tl-duration">{exp.date}</p>
                <h5>
                  {exp.title} - <span>{exp.organization}</span>
                </h5>
                <p>{exp.description}</p>
              </div>
            ))
          : experiences.extracurricular.map((exp) => (
              <div class="timeline-item">
                <div class="tl-icon">
                  <i class="fas fa-briefcase"></i>
                </div>
                <p class="tl-duration">{exp.date}</p>
                <h5>
                  {exp.title} - <span>{exp.organization}</span>
                </h5>
                <p>{exp.description}</p>
              </div>
            ))}
      </div>
    </section>
  );
};

export default About;
