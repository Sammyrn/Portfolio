import "./Hero.css";
import { useFadeInOnScroll } from "./useFadeInOnScroll";
import CV from "../SAMMY.RN.CV.pdf";

const Hero = () => {
  const [imageRef, imageVisible] = useFadeInOnScroll();
  const [textRef, textVisible] = useFadeInOnScroll();

  return (
    <section id="home" className="section one">
      <div id="text" className={`box ${textVisible ? "activate" : ""}`} ref={textRef}>
        <h1>
          Hi, I am <span>Sammy..</span>
        </h1>
        <div className="description">
          <p>A Full Stack Developer</p>
        </div>

        <div className="btns-container">
          <div className="btn-con">
            <a href={CV} target="_blank" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
          <div className="btn-con">
            <a href="#contact" className="main-btn">
              <span className="btn-text">Contact Me</span>
              <span className="btn-icon">
                <i className="fas fa-envelope"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className={`image box ${imageVisible ? "activate" : ""}`} ref={imageRef}>
        <img
          src="./images/pfpme.png"
          alt="pfp"
        />
      </div>
    </section>
  );
};

export default Hero;
