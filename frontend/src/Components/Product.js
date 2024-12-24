import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Product.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';

const products = [
  {
    id: 1,
    name: 'Premium Dog Food',
    description: 'High-quality dog food with all essential nutrients.',
    price: 919,
    image: `${product1}`,
  },
  {
    id: 2,
    name: 'Catnip Treats',
    description: 'Delicious treats for your feline friend.',
    price: 1031,
    image: `${product2}`,
  },
  {
    id: 3,
    name: 'Boltz Premium Bird Food for Finches',
    description: 'A Nutrient Packed Feast.',
    price: 1230,
    image: `${product3}`,
  },
  {
    id: 4,
    name: 'Dog Treats Pressed Chew Bones',
    description: 'Love served naturally with our tasty dog treats.',
    price: 546,
    image: `${product4}`,
  },
  {
    id: 5,
    name: 'Interactive Cat Toys',
    description: 'Keep your cat entertained for hours with the toys.',
    price: 599,
    image: `${product5}`,
  },
  {
    id: 6,
    name: 'DRILLY Premium Fur Washable Dog Bed',
    description: 'Calming Dog bed.',
    price: 2999,
    image: `${product6}`,
  },
];

function Product({ addToCart }) {
  return (
    <Container className="my-4">
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="price">Rs. {product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
