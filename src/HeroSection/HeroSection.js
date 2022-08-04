import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const HeroSection = () => {
  return (
    <section className="hero py-5">
      <Container>
        <Row>
          <Col className="align-self" md={6} sm={12}>
            <div >
              <h2>iNeuron</h2>
              <p className="mw500">
                The ultimate resource to prepare for coding . Everything you
                need, in one streamlined platform,Trusted by 300,000 Student and Professionals.

              </p>
             
            </div>
            <Button className="main-btn">View Courses</Button>
          </Col>
          <Col className="d-flex justify-content-center pt-5" md={6} sm={12}>
            <img cl className="hero-image" src="https://web.learncodeonline.in/_next/image?url=%2FAssets%2FHome%2Freason-lco.svg&w=640&q=75" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
