import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  FaCubes,
  FaCode,
  FaRegFileVideo,
  FaNewspaper,
  FaCertificate,
  FaImage,
} from "react-icons/fa";

const WhatSection = () => {
  return (
    <section className="whatSection my-5 text-center">
      <Container>
        <h2>What is iNeuron?</h2>
        <Button className="main-btn mt-3">Watch the Video</Button>
        <Row className="my-3">
          <Col className="my-3" md={4} sm={6} xs={12}>
            <Card>
              <CardBody>
                <FaCertificate />
                <h3>Recruiting Profile & Certificate</h3>
                <p>
                  Landing technical interviews can be harder than passing them.
                  Once you earn the AlgoExpert Certificate, we refer you to tech
                  companies so you can directly start their interview process.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="my-3" md={4} sm={6} xs={12}>
            <Card>
              <CardBody>
                <FaRegFileVideo />
                <h3>100+ Hours Of Video Explanations</h3>
                <p>
                  Algorithms are tough to learn on paper. Each of our questions
                  is accompanied by a two-part video explanation to maximize
                  learning. That's over 100 hours of content, all at your
                  fingertips.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="my-3" md={4} sm={6} xs={12}>
            <Card>
              <CardBody>
                <FaCubes />
                <h3>160 Hand-Picked Questions</h3>
                <p>
                  Coding interview prep is a numbers game that many candidates
                  lose. We've hand-picked 160 of the best coding interview
                  questions to prepare you for every interview you could
                  encounter.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="my-3" md={4} sm={6} xs={12}>
            <Card>
              <CardBody>
                <FaCode />
                <h3>Mock Coding Interviews</h3>
                <p>
                  Nothing compares to doing a real coding interview with a real
                  human being. We let you do mock coding interviews with other
                  users on a shared workspace, right here on AlgoExpert.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="my-3" md={4} sm={6} xs={12}>
            <Card>
              <CardBody>
                <FaNewspaper />
                <h3>Become an affiliate</h3>
                <p>
                  Explore affiliate marketing opportunities with iNeuron and
                  attain financial frredom.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="my-3" md={4} sm={6} xs={12}>
            <Card>
              <CardBody>
                <FaImage />
                <h3>Highest in quality</h3>
                <p>
                  Here at iNeuron, we take quality very seriously. Every
                  video is produced with highest quality in audio, video and
                  content. We are benchmark in quality standard.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatSection;
