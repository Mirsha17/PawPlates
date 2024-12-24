import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} on ${form.date} for ${cartItems.length} items.`);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <Container className="booking-container my-5">
      <h1>Book Your Products</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            name="date" 
            value={form.date} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Book Now
        </Button>
      </Form>
      <div className="total-amount mt-4">
        <h3>Total Amount: Rs. {calculateTotal()}</h3>
      </div>
      <div className="cart-items mt-4">
        <h2>Cart Items</h2>
        <ListGroup>
          {cartItems.map(item => (
            <ListGroup.Item key={item.id}>
              {item.name} - Rs. {item.price.toFixed(2)}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default Booking;
