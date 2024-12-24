import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

function Cart({ cartItems, handleRemove }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePurchase = () => {
    navigate('/booking', { state: { cartItems } }); // Navigate with state
  };

  return (
    <Container className="my-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <Card className="cart-card">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text className="price">Rs. {item.price}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemove(item.id)}>
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="total-price">
            <h3>Total Price: Rs. {calculateTotal()}</h3>
          </div>
          <Button variant="success" onClick={handlePurchase}>
            Purchase
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
