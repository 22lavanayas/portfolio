import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "PROJECT :",
      description: "Python",
      imgUrl: projImg1,
      link: "https://github.com/22lavanayas/flappy-bird"
    },
    {
      title: "PROJECT :",
      description: "Portfolio",
      imgUrl: projImg2,
      link: "https://lavanyasharma.netlify.app/"
    },
    {
      title: "PROJECT :",
      description: "Python",
      imgUrl: projImg3,
      link: "https://github.com/22lavanayas/search-app"
    },
    {
      title: "PROJECT :",
      description: "UI Design + Python",
      imgUrl: projImg4,
      link: "https://lavanyasharma.netlify.app/"
    },
    // {
    //   title: "PROJECT :",
    //   description: "UI Design + Python",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "PROJECT :",
    //   description: "Python",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>projects are based on HTML, CSS, JavaScript, python to showcase my work experience.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>.............................</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>.............................</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}