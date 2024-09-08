import React, { useState } from 'react';
import './OrderOnline.css';

const OrderOnline = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setMessage('Thank you for your order!');
    setName('');
    setEmail('');
    setOrder('');
  };

  return (
    <div className="order-online">
      <h1>Order Online</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="order">Order Details</label>
          <textarea
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="order-btn">Submit Order</button>
        {message && <p className="confirmation-message">{message}</p>}
      </form>
    </div>
  );
};

export default OrderOnline;
