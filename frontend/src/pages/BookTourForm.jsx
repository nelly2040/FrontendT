import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookTourForm = ({ show, handleClose, tourId }) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [safariStartDate, setSafariStartDate] = useState('');
  const [safariEndDate, setSafariEndDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [modalTitle, setModalTitle] = useState("Book Your Tour");

  const navigate = useNavigate();

  const resetForm = () => {
    setFullName('');
    setAge('');
    setPhoneNumber('');
    setEmail('');
    setNumberOfParticipants(1);
    setSpecialRequests('');
    setSafariStartDate('');
    setSafariEndDate('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalTitle("Booking Your Tour");

    const bookingData = {
      tour_id: tourId,
      full_name: fullName,
      age: Number(age),
      phone_number: phoneNumber,
      email,
      number_of_participants: Number(numberOfParticipants),
      special_requests: specialRequests,
      safari_start_date: safariStartDate,
      safari_end_date: safariEndDate
    };

    console.log("Booking data:", bookingData);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      console.log("Response:", response);

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || 'Failed to book tour');
      }

      setSuccess(true);
      setError('');

      setTimeout(() => {
        setSuccess(false);
        handleClose();
        navigate('/dashboard');
      }, 3000);

      resetForm();
    } catch (err) {
      console.error("Booking error:", err);
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success ? (
          <Alert variant="success" className="text-center">
            🎉 Congratulations! Your tour has been successfully booked!<br />
            Redirecting to dashboard...
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="participants">
              <Form.Label>Number of Participants</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={numberOfParticipants}
                onChange={(e) => setNumberOfParticipants(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="safariStartDate">
              <Form.Label>Safari Start Date</Form.Label>
              <Form.Control
                type="date"
                value={safariStartDate}
                onChange={(e) => setSafariStartDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="safariEndDate">
              <Form.Label>Safari End Date</Form.Label>
              <Form.Control
                type="date"
                value={safariEndDate}
                onChange={(e) => setSafariEndDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="specialRequests">
              <Form.Label>Special Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any special requests (optional)"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit Booking
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookTourForm;
