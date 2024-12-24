import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Home.css';
import pet from '../assets/pet.jpg';
import catFood from '../assets/catFood.jpg';
import petFood from '../assets/petFood.jpg';
import dog from '../assets/dog.jpg';

export default function Home() {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pet}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to PawPlates</h3>
            <p>Delicious, Nutritious, and Wholesome Pet Food.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dog}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Fresh Ingredients</h3>
            <p>Only the best for your furry friends.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={catFood}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Pet Approved</h3>
            <p>Tail-wagging goodness in every bite.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      {/* Introduction Section */}
      <Container className="intro-container text-center my-5">
        <h1>Welcome to PawPlates</h1>
        <p>
          At PawPlates, we believe that your pets deserve the best. That’s why
          we create high-quality, nutritious meals that cater to the specific
          needs of your furry friends. From puppies to seniors, our range of pet
          food is designed to keep your pets healthy and happy.
        </p>
        <p>
          Explore our wide variety of products and find the perfect meal for
          your pet today!
        </p>
      </Container>
    </div>
  );
}
