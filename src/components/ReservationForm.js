// ReservationForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Reservations.css'; // Make sure to create this CSS file for styling

const ReservationForm = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [persons, setPersons] = useState(1);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handlePersonsChange = (event) => {
    setPersons(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Reservation made for ${persons} persons on ${date.toDateString()} at ${time}`);
    // Handle form submission logic here
  };

  return (
    <div className="reserve-container">
     <div className="reservation-form">
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Select Date:</label>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="persons">Number of Persons:</label>
          <input
            type="number"
            id="persons"
            value={persons}
            onChange={handlePersonsChange}
            min="1"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Make Reservation</button>
      </form>
    </div>
    
    </div>
   
  );
};

export default ReservationForm;
