import React from "react";
import "./Home.css";
import myImage from "../../images/Self.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Typewriter from "../../Typewriter";

function Home() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <>
      <div className="containers">
        <div className="col1 mb-5">
          <img
            className="myImage mx-auto mt-5"
            src={myImage}
            alt="Hi, this is me!"
          />
        </div>
        <div className="col2 mb-5">
          {/* <p className='hello'>HELLO WORLD! <br/> My name is Preyansh Jain <br/> and I'm a web developer</p> */}
          <h1 className="hello">
            {/* {setInterval(() => { */}
              <Typewriter text="HELLO WORLD!" delay={100} />
            {/* }, 1000)} */}
          </h1>
          <h2 className="name">
            <Typewriter text="My name is Preyansh Jain" delay={100} />
          </h2>
          <h2 className="web">
            <Typewriter text="and I'm a web developer" delay={100} />
          </h2>

          <div className="socials">
            <a
              href="mailto:preyansh.jain13@gmail.com"
              target="_blank"
              rel="noreferrer"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              className="mailto"
            >
              <FontAwesomeIcon
                className="mail"
                icon={faEnvelope}
                size="3x"
                color="white"
                title="Mail"
              />

              {/* {isHovered && <span className="text">Mail</span>} */}
            </a>
            <a
              href="https://www.linkedin.com/in/preyansh-jain-a4b929a1/"
              target="_blank"
              rel="noreferrer"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon
                className="linkedin"
                icon={faLinkedin}
                size="3x"
                color="white"
                title="LinkedIn"
              />
              {/* {isHovered && <span className="text">LinkedIn</span>} */}
            </a>
            <a
              href="https://github.com/preyanshj13"
              target="_blank"
              rel="noreferrer"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon
                className="github"
                icon={faGithub}
                size="3x"
                color="white"
                title="Github"
              />
              {/* {isHovered && <span className="text">Github</span>} */}
            </a>
            <a
              href="https://www.hackerrank.com/profile/preyansh_jain13"
              target="_blank"
              rel="noreferrer"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon
                className="hackerrank"
                icon={faHackerrank}
                size="3x"
                color="white"
                title="HackerRank"
              />
              {/* {isHovered && <span className="text">Hackerrank</span>} */}
            </a>
            {/* <p className='hello'>hi</p> */}
          </div>
        </div>
      </div>
      <div className="heading">About Me</div>
      <div className="container aboutMe">
        <p>
          Welcome to my corner of the web! I'm a passionate front-end web
          developer on a mission to craft engaging digital experiences. With
          around 2 years of dedicated experience in the ever-evolving landscape
          of web development, I thrive on the intersection of creativity and
          technology.
        </p>
        <p>
          My journey began with an insatiable curiosity for coding, leading me
          to explore the intricate world of web development. Over time, I've
          honed my skills in HTML, CSS, and JavaScript, sculpting visually
          stunning and seamlessly functional interfaces that captivate users.
        </p>
        <p>
          Beyond front-end wizardry, I am delving into the realms of MongoDB,
          NodeJS, and Redux, in order to enrich my toolkit to deliver
          comprehensive solutions. Whether it's building responsive websites,
          dynamic web applications, or integrating cutting-edge technologies. I
          embrace challenges with gusto, leveraging each project as an
          opportunity for growth.
        </p>
        <p>
          Driven by a relentless pursuit of excellence, I prioritize clean code,
          intuitive design, and optimized performance to ensure every project
          exceeds expectations. Collaborative by nature, I thrive in team
          environments, fostering synergy to transform ideas into reality.
        </p>
        <p>
          As technology continues to evolve, I remain committed to staying at
          the forefront of innovation, eagerly embracing new technologies and
          methodologies to deliver forward-thinking solutions.
        </p>
        <p>
          Let's embark on a journey of innovation together. Reach out, and let's
          bring your vision to life!
        </p>
      </div>
    </>
  );
}

export default Home;
