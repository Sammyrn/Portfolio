import "./contact.css"
import { useFadeInOnScroll } from "./useFadeInOnScroll";

const Contact = () => {
  const [contactContainerRef, contactContainerVisible] = useFadeInOnScroll();
  const [mainTitleRef, mainTitleVisible] = useFadeInOnScroll();

  return (
  <section id="contact" className="section four contact">
    <div className={`contact-container box ${contactContainerVisible && "activate"}`} ref={contactContainerRef}>
      <div className={`main-title box ${mainTitleVisible ? "activate" : ""}`} ref={mainTitleRef}>
        <h2>
          Contact <span>me</span>
        </h2>
      </div>
      <div className="contact-content-con">
        <div className="left-contact">
          <h4>Contact me here</h4>
          <p className="contact-text">My Contact details</p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
               
                Location
              </div>
              <p>: Nigeria</p>
            </div>
            <div className="contact-item">
              <div className="icon">
                Email
              </div>
              <p>: kpunsamuel8@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="icon">
                Education
              </div>
              <p className="school">: Benson Idahosa University</p>
            </div>
            <div className="contact-item">
              <div className="icon">
                Languanges
              </div>
              <p>: Africaans, English</p>
            </div>

            <div className="contact-item">
              <div className="icon">
                Phone
              </div>
              <p>: +234-808-176-9820</p>
            </div>

            <div className="contact-icons">
              <a href="mailto:kpunsamuel8@gmail.com" target="_blank">
                kpunsamuel8@gmail.com
              </a>
              <div className="contact-icons-wrap">
                <div className="contact-icon">
                  <a href="https://instagram.com/sammy.rn" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                {/*<div className="contact-icon">
                  <a href="https://x.com/Kurowei4u" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>*/}
                <div className="contact-icon">
                  <a
                    href="https://github.com/Sammyrn?tab=repositories"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="contact-icon">
                  <a
                    href="https://www.linkedin.com/in/samuel-kpun-63a2a12bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!--<div className="right-contact box" id="right-con">
              <form
                action="https://formspree.io/f/xovqlgvz"
                method="post"
                className="contact-form"
              >
                <div className="input-control i-c-2">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="name input"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="email input"
                    required
                  />
                </div>
                <div className="input-control">
                  <input
                    name="subject"
                    type="text"
                    placeholder="Enter Subject"
                    className="subject input"
                    required
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="15"
                    rows="8"
                    className="input"
                    placeholder="Message me here..."
                  ></textarea>
                </div>

                <div className="submit-btn">
                  <div className="btn-con">
                    <a href="" className="main-btn">
                      <span className="btn-text">Send</span>
                      <span className="btn-icon"
                        ><i className="fas fa-envelope"></i
                      ></span>
                    </a>
                  </div>
                </div>
              </form>
            </div>-->*/}
      </div>
    </div>
  </section>
  );
};

export default Contact;
