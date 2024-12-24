import React, { useState } from 'react';
import Home from './Home';
import About from './About Us'; // Ensure the correct import
import UserForm from './UserForm';
import Cart from './Cart';
import Booking from './Booking';
import Product from './Product';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Header() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">PawPlates</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
              <Nav.Link as={Link} to="/Userform">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/Booking">Booking</Nav.Link>
              <Nav.Link as={Link} to="/Product">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Userform" element={<UserForm />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} handleRemove={handleRemove} />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Product" element={<Product addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
