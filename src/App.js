<<<<<<< HEAD
import "./App.css";
import fishy from "./img/FishyRun.gif";
import emergencyApp from "./img/EmergencyResponseApp.gif";
import profilePic from "./img/perfil.png";
import RESTAPI from "./img/REST-API.png";
import resume from "./img/Anni_Luong resume.pdf";
import resumePic from "./img/resumePic.png";
import budgetApp from "./img/budgetApp.png";
=======
import './App.css';
import fishy from './img/FishyRun.gif'
import emergencyApp from './img/EmergencyResponseApp.gif'
import profilePic from './img/perfil.png'
import RESTAPI from './img/REST-API.png'
import resume from './img/Anni_Luong resume.pdf'
import resumePic from './img/resumePic.png'
import budgetApp from './img/budgetApp.png'
>>>>>>> 6c72b6f483f24660c12631948fb9aaa59b46db4d

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
                  Resume
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu" />
          </div>
<<<<<<< HEAD
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
            <a href={resume} className="button">
              Resume
            </a>
          </div>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/anniluong/"
              className="home__social-icon"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a href="https://github.com/luonga" className="home__social-icon">
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
          <h2 className="section-title">Resume</h2>
          <div className="skills__container">
            <img src={resumePic} alt="" />
          </div>
          <div className="skills__subtitle">
            <a href={resume} className="button">
              Open resume in new window
            </a>
          </div>
        </section>
        {/*===== WORK =====*/}
        <section className="work section" id="work">
          <h2 className="section-title">Projects</h2>
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
              <img src={budgetApp} alt="" />
            </a>
            <div class="work__description">
              <h3>Budget App</h3>
              <p>
                Web app built with <b>Python (Flask, Tkinter)</b> that serves as
                a valuable tool for individuals seeking to gain insights into
                their financial habits and make informed decisions based on
                their monthly spending patterns. I utilized <b>Javascript</b>{" "}
                and <b>HTML/CSS</b> to calculate monthly income and spending and
                provide users with a graphical breakdown of their monthly
                expenses through both pie and bar graphs.{" "}
              </p>
            </div>
            <a href className="work__img">
              <img src="assets/img/work5.jpg" alt="" />
            </a>
            <a href className="work__img">
              <img src="assets/img/work6.jpg" alt="" />
            </a>
          </div>
        </section>
      </main>
      {/*===== FOOTER =====*/}
      <footer className="footer">
        <p className="footer__title">Anni Luong</p>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/anniluong/"
            className="footer__icon"
          >
            <i className="bx bxl-linkedin" />
=======
          <a href className="work__img">
            <img src={budgetApp} alt="" />
          </a>
          <div class="work__description">
          <h3>Budget App</h3>
          <p>Web app built with <b>Python (Flask, Tkinter)</b> that serves as a valuable tool for individuals seeking to gain insights into their financial habits and make informed decisions based on their monthly spending patterns.  I utilized <b>Javascript</b> and <b>HTML/CSS</b> to calculate monthly income and spending and provide users with a graphical breakdown of their monthly expenses through both pie and bar graphs. </p>
          </div>
          <a href className="work__img">
            <img src="assets/img/work5.jpg" alt="" />
>>>>>>> 6c72b6f483f24660c12631948fb9aaa59b46db4d
          </a>
          <a href="https://github.com/luonga" className="footer__icon">
            <i className="bx bxl-github" />
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
