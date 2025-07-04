import "./portfolio.css";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

const Portfolio = () => {
  const [mainTitleRef, mainTitleVisible] = useFadeInOnScroll();
  const [portfolioContainerRef, portfolioContainerVisible] = useFadeInOnScroll();
  const [portfolioItemRef, portfolioItemVisible] = useFadeInOnScroll();

  const projects = [
    {
      id: 1,
      name: "A Event Tracker Mobile App",
      image: "images/eventCover.PNG",
      desc: "This is a mobile app that allows you to track your events and activities. It is a React Native app that uses the Expo framework and the Expo Router library. It also allows you to view your events and activities in a list view. Test only available on android",
      source: "https://github.com/Sammyrn/Tribe-Event-App",
      live: "https://expo.dev/accounts/sammy.rn/projects/Tribe/builds/34a69e22-1362-45ed-804b-6465e6ed1232",
    },
    {
      id: 1,
      name: "A Weather App",
      image: "images/weatherCapture.PNG",
      desc: "This React weather app fetches real-time weather data from the OpenWeatherMap API, displaying current conditions and a multi-day forecast. It features a user-friendly interface, efficient API handling, and a smooth loading experience",
      source: "https://github.com/Sammyrn/Weatherly/",
      live: "https://sammyrn.github.io/Weatherly/",
    },
  ];
  return (
    <section id="portfolio" className="section three">
      <div className={`main-title box ${mainTitleVisible ? "activate" : ""}`} ref={mainTitleRef}>
        <h2>
          My <span>Portfolio</span>
        </h2>
      </div>

      <div className={`portfolio-container ${portfolioContainerVisible ? "activate" : ""}`} ref={portfolioContainerRef}>
        <div className="title">
          <h4>Here are some projects</h4>
        </div>
        <div className="portfolios">
          { projects.map((project) => ( <div key={project.id} className={`portfolio-item box ${portfolioItemVisible ? "activate" : ""}`} ref={portfolioItemRef}>
            <div className="image">
              <img src={project.image} alt="" />
            </div>
            <p className="title">{project.name}</p>
            <p className="descri">
              {project.desc}
            </p>
            <div className="hover-item">
              <h3>Project Source</h3>
              <div className="icons">
                <a href={project.source} target="_blank" className="icon">
                  <i className="fab fa-github"></i>
                </a>

                  <a href={project.live} target="_blank" className="icon">
                  <i className="fa fa-cloud"></i>
                </a>
              </div>
            </div>
          </div>))}
          
          
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
