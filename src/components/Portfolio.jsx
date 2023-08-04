import '../styles/portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="pattern-rings" />
      <div className="pattern-circle" />
      <div className="first-section-container">
        <h5>adamkeyes</h5>
        <div className="icon-wrapper">
          <img
            src="/images/icon-github.svg"
            alt="github icon"
            className="icon"
          />
          <img
            src="/images/icon-frontend-mentor.svg"
            alt="frontend mentor icon"
            className="icon"
          />
          <img
            src="/images/icon-linkedin.svg"
            alt="linkedin icon"
            className="icon"
          />
          <img
            src="/images/icon-twitter.svg"
            alt="twitter icon"
            className="icon"
          />
        </div>
        {/* <img
          src="/images/image-profile-mobile.webp"
          className="profile-image-mobile profile-image-desktop"
          alt="adam keyes image profile"
        /> */}
      </div>
      <div
        className="profile-image-mobile profile-image-desktop"
        alt="adam keyes image profile"
      />

      <h1 className="main-title">Nice to meet you! I&#39;m Adam Keyes. </h1>
      <div className="green-line" />
      <p className="about">
        Based in the UK, I&#39;m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <h4 className="contact-me">contact me</h4>
      <div className="second-green-line" />
      <div className="white-line" />
      <div className="second-section-container">
        <div className="first">
          <div className="stack-experience-wrapper">
            <h2 className="stack html">HTML</h2>
            <p className="experience">4 Years Experience</p>
          </div>
          <div className="stack-experience-wrapper">
            <h2 className="stack">CSS</h2>
            <p className="experience">4 Years Experience</p>
          </div>
        </div>
        <div className="second">
          <div className="stack-experience-wrapper">
            <h2 className="stack">Javascript</h2>
            <p className="experience">4 Years Experience</p>
          </div>
          <div className="stack-experience-wrapper">
            <h2 className="stack">Accessibility</h2>
            <p className="experience">3 Years Experience</p>
          </div>
        </div>
        <div className="third">
          <div className="stack-experience-wrapper">
            <h2 className="stack">React</h2>
            <p className="experience">3 Years Experience</p>
          </div>
          <div className="stack-experience-wrapper">
            <h2 className="stack">Sass</h2>
            <p className="experience">3 Years Experience</p>
          </div>
        </div>
      </div>
      <div className="white-line second-white-line" />
      <div className="pattern-rings second-pattern-rings" />

      {/* project section */}
      <div className="third-section-container">
        <div className="projects-title-wrapper">
          <h1 className="projects-title">Projects</h1>
          <div className="contact-me-wrapper">
            <h4 className="contact-me second-contact-me">contact me</h4>
            <div className="third-green-line" />
          </div>
        </div>
        <div className="projects-wrapper">
          <div>
            <div className="project-one" />
            <h3 className="project-heading">design portfolio</h3>
            <div className="stack-wrapper">
              <p className="stack-project">HTML</p>
              <p className="stack-project">CSS</p>
            </div>
            <div className="view-container">
              <div className="view-wrapper">
                <p className="view">view project</p>
                <div className="third-green-line" />
              </div>
              <div className="view-wrapper">
                <p className="view">view code</p>
                <div className="third-green-line" />
              </div>
            </div>
          </div>
          <div>
            <div className="project-two" />
            <h3 className="project-heading">e-learning landing page</h3>
            <div className="stack-wrapper">
              <p className="stack-project">HTML</p>
              <p className="stack-project">CSS</p>
            </div>
            <div className="view-container">
              <div className="view-wrapper">
                <p className="view">view project</p>
                <div className="third-green-line" />
              </div>
              <div className="view-wrapper">
                <p className="view">view code</p>
                <div className="third-green-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="projects-wrapper">
          <div>
            <div className="project-three" />
            <h3 className="project-heading">todo web app</h3>
            <div className="stack-wrapper">
              <p className="stack-project">HTML</p>
              <p className="stack-project">CSS</p>
              <p className="stack-project javascript">Javascript</p>
            </div>
            <div className="view-container">
              <div className="view-wrapper">
                <p className="view">view project</p>
                <div className="third-green-line" />
              </div>
              <div className="view-wrapper">
                <p className="view">view code</p>
                <div className="third-green-line" />
              </div>
            </div>
          </div>
          <div>
            <div className="project-four" />
            <h3 className="project-heading">entertainment web app</h3>
            <div className="stack-wrapper">
              <p className="stack-project">HTML</p>
              <p className="stack-project">CSS</p>
              <p className="stack-project javascript">Javascript</p>
            </div>
            <div className="view-container">
              <div className="view-wrapper">
                <p className="view">view project</p>
                <div className="third-green-line" />
              </div>
              <div className="view-wrapper">
                <p className="view">view code</p>
                <div className="third-green-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="projects-wrapper">
          <div>
            <div className="project-five" />
            <h3 className="project-heading">memory game</h3>
            <div className="stack-wrapper">
              <p className="stack-project">HTML</p>
              <p className="stack-project">CSS</p>
              <p className="stack-project javascript">Javascript</p>
            </div>
            <div className="view-container">
              <div className="view-wrapper">
                <p className="view">view project</p>
                <div className="third-green-line" />
              </div>
              <div className="view-wrapper">
                <p className="view">view code</p>
                <div className="third-green-line" />
              </div>
            </div>
          </div>

          <div>
            <div className="project-six" />
            <h3 className="project-heading">art gallery showcase</h3>
            <div className="stack-wrapper">
              <p className="stack-project">HTML</p>
              <p className="stack-project">CSS</p>
              <p className="stack-project javascript">Javascript</p>
            </div>
            <div className="view-container">
              <div className="view-wrapper">
                <p className="view">view project</p>
                <div className="third-green-line" />
              </div>
              <div className="view-wrapper">
                <p className="view">view code</p>
                <div className="third-green-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
