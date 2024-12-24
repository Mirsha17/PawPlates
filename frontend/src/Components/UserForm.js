import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css'; // Import your custom CSS file for additional styles

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('address.')) {
      const [_, addressField] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        address: { ...prevState.address, [addressField]: value }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:5000/api/users', formData);
      console.log('User created:', response.data);
      alert('User created successfully!');
      

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: {
          street: '',
          city: '',
          state: '',
          country: '',
          postalCode: '',
        },
        gender: ''
      });
      
    } catch (error) {
      console.error('There was an error creating the user:', error);
      alert('Failed to create user.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="container p-4">
      <h2 className="text-center mb-4">User Registration Form</h2>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
      </div>

      <h3 className="mt-4">Address</h3>
      <div className="form-group">
        <label>Street</label>
        <input type="text" className="form-control" name="address.street" placeholder="Street" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" className="form-control" name="address.city" placeholder="City" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>State</label>
        <input type="text" className="form-control" name="address.state" placeholder="State" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input type="text" className="form-control" name="address.country" placeholder="Country" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Postal Code</label>
        <input type="text" className="form-control" name="address.postalCode" placeholder="Postal Code" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <select className="form-control" name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
};

export default UserForm;
