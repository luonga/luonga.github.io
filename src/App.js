import "./App.css";
import fishy from "./img/FishyRun.gif";
import emergencyApp from "./img/EmergencyResponseApp.gif";
import profilePic from "./img/perfil.png";
import RESTAPI from "./img/REST-API.png";

function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* =====BOX ICONS===== */}
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
        rel="stylesheet"
      />
      <title>Portfolio website complete</title>
      {/*===== HEADER =====*/}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="/#" className="nav__logo">
              Anni Luong
            </a>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu" />
          </div>
        </nav>
      </header>
      <main className="l-main">
        {/*===== HOME =====*/}
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi,
              <br />I am <span className="home__title-color">Anni,</span>
              <br /> Software Engineer
            </h1>
            <a href="/#" className="button">
              Contact
            </a>
          </div>
          <div className="home__social">
            <a href className="home__social-icon">
              <i className="bx bxl-linkedin" />
            </a>
            <a href className="home__social-icon">
              <i className="bx bxl-behance" />
            </a>
            <a href className="home__social-icon">
              <i className="bx bxl-github" />
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image
                  className="home__blob-img"
                  x="50"
                  y="60"
                  href={profilePic}
                />
              </g>
            </svg>
          </div>
        </section>
        {/*===== ABOUT =====*/}
        <section className="about section " id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src="assets/img/about.jpg" alt="" />
            </div>
            <div>
              <h2 className="about__subtitle">Welcome to my Portfolio!</h2>
              <p className="about__text">
                I'm a passionate software engineer based in Denver, CO, with
                expertise in full stack development. With a strong foundation in
                computer science and a dedication to writing clean and efficient
                code, I strive to deliver high-quality software solutions that
                meet and exceed client expectations. Explore my projects and
                experience to get a glimpse into my technical skills and
                commitment to innovation. Let's connect and discuss how I can
                contribute to your next exciting venture!
              </p>
            </div>
          </div>
        </section>
        {/*===== SKILLS =====*/}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Profesional Skills</h2>
              <p className="skills__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                optio id vero amet, alias architecto consectetur error eum eaque
                sit.
              </p>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-html5 skills__icon" />
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html"></div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-css3 skills__icon" />
                  <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css"></div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-javascript skills__icon" />
                  <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js"></div>
                <div>
                  <span className="skills__percentage">65%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxs-paint skills__icon" />
                  <span className="skills__name">UX/UI</span>
                </div>
                <div className="skills__bar skills__ux"></div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
            </div>
            <div>
              <img src="assets/img/work3.jpg" alt="" className="skills__img" />
            </div>
          </div>
        </section>
        {/*===== WORK =====*/}
        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>
          <div className="work__container bd-grid">
            <a href className="work__img">
              <img src={emergencyApp} alt="" />
            </a>
            <div class="work__description">
              <h3>Emergency Response App</h3>
              <p>
                Android app developed for the National Fire District of the
                Dominican Republic, a comprehensive and user-friendly app for
                efficient emergency response data tracking. Working with a
                partner, I collaborated closely with stakeholders to establish
                project requirements and key functionalities. Using <b>Figma</b>
                , I created screen mockups and wireframes to aid in design and
                planning. Leveraging <b>Android Studio, Kotlin,</b> and the{" "}
                <b>Google Maps API</b>, I implemented a dynamic list and map
                functionality to display real-time emergency incidents and their
                locations. Additional tools and technologies used were{" "}
                <b>Jetpack Compose</b> and <b>Git</b>.
              </p>
            </div>
            <a href className="work__img">
              <img src={fishy} alt="" />
            </a>
            <div class="work__description">
              <h3>Fishy Run</h3>
              <p>
                Pygames Hackathon Project (Winner) hosted and judged by
                Microsoft. 2D game built with <b>Python</b> and <b>Pygames</b>.
                More details in the hackathon website below:{" "}
              </p>
              <br></br>
              <a href="https://devpost.com/software/fishy-run">
                Link to Hackathon Site
              </a>
            </div>
            <a href className="work__img">
              <img src={RESTAPI} alt="" />
            </a>
            <div class="work__description">
              <h3>REST API</h3>
              <p>
                I used <b>Node.js</b> to implement a robust REST API that
                adheres to best practices, utilizing proper resource-based URLs,
                pagination, and appropriate status codes. The API was deployed
                on <b>Google Cloud Platform (GCP)</b>, and I integrated it with{" "}
                <b>Auth0</b> for user creation, authorization, and management on
                the site. To ensure clear documentation, I created a
                comprehensive API specification that outlines all endpoints,
                status codes, and provides sample requests and responses.
                Additionally, I developed a <b>Postman</b> Collection and
                Environment, including a test suite that showcases all the
                features of the application. Link to the Github below:{" "}
              </p>
              <br></br>
              <a href="https://github.com/luonga/REST-API">
                Link to Source Code
              </a>
            </div>
            <a href className="work__img">
              <img src="assets/img/work4.jpg" alt="" />
            </a>
            <a href className="work__img">
              <img src="assets/img/work5.jpg" alt="" />
            </a>
            <a href className="work__img">
              <img src="assets/img/work6.jpg" alt="" />
            </a>
          </div>
        </section>
        {/*===== CONTACT =====*/}
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form action className="contact__form">
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
              />
              <input
                type="mail"
                placeholder="Email"
                className="contact__input"
              />
              <textarea
                name
                id
                cols={0}
                rows={10}
                className="contact__input"
                defaultValue={""}
              />
              <input
                type="button"
                defaultValue="Enviar"
                className="contact__button button"
              />
            </form>
          </div>
        </section>
      </main>
      {/*===== FOOTER =====*/}
      <footer className="footer">
        <p className="footer__title">Anni Luong</p>
        <div className="footer__social">
          <a href="/#" className="footer__icon">
            <i className="bx bxl-facebook" />
          </a>
          <a href="/#" className="footer__icon">
            <i className="bx bxl-instagram" />
          </a>
          <a href="/#" className="footer__icon">
            <i className="bx bxl-twitter" />
          </a>
        </div>
        <p className="footer__copy"></p>
      </footer>
      {/*===== SCROLL REVEAL =====*/}
      <script src="https://unpkg.com/scrollreveal"></script>
      {/*===== MAIN JS =====*/}
    </div>
  );
}

export default App;
