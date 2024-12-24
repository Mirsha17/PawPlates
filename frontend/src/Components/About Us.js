import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About Us.css';

function About() {
  return (
    <Container className="about-container my-5">
      <Row>
        <Col md={6}>
          <Image src="/petFood.jpg" rounded fluid />
        </Col>
        <Col md={6}>
          <h1>About Us</h1>
          <br />
          <h4>
            <p>
              PawPlates was founded with a simple mission: to bring the best in
              pet nutrition to pet owners who want nothing but the best for
              their beloved companions.
              <br />
              <br />
              Our journey began when we realized that the pet food market was
              filled with options that didn’t quite meet our standards. We set
              out to create a space where quality, nutrition, and transparency
              come first.
              <br />
              <br />
              At PawPlates, we’re more than just a pet food store – we’re a
              community of pet lovers dedicated to ensuring every pet gets the
              nutrition they need. We work closely with experts in pet nutrition
              to curate a selection of foods that are not only delicious but
              also packed with the essential nutrients that pets need to thrive.
              <br />
              <br />
              From sourcing the finest ingredients to ensuring sustainable
              practices, every step of our process is guided by our commitment
              to quality. We know that your pets are part of your family, and
              we’re here to help you give them the best life possible.
              <br />
              <br />
              Thank you for choosing PawPlates – where pet health meets
              happiness.
            </p>
          </h4>
        </Col>
      </Row>

      <Row className="my-4">
        <Col md={6}>
          <Image src="/cat.jpg" rounded fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default About;

