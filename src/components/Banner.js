import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, TypeH1 } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End-Developer", "UI designer","DevOps engineer","AWS Cloud Solution Engineer", "Computer Science Engineering Student"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Lavanya Sharma`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-End-Developer", "UI Designer","DevOps engineer","AWS Cloud Solution Engineer", "Computer Science Engineering Student" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  As a DevOps enthusiast and AWS Cloud Engineer, I am passionate about automating and scaling software systems. Proficient in Python and C++, I'm eager to join a growth-oriented company with a diverse team to make a meaningful impact</p>
                  <br />
                  <p>
                    <h1>EDUCATION</h1>
                    <h2>SWAMI KESHWANAND INSTITUTE OF TECHNOLOGY MANAGEMENT AND GRAMOTHAN , JAIPUR </h2>
                    <h2>B.TECH(HONS) : 2020-present</h2>
                  </p>
                  <button onClick={() => console.log('connect')}><a href='#connect' style={{ textDecoration: 'none', color: 'inherit' }}> Let’s Connect <ArrowRightCircle size={25} /></a></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}