import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookTourForm from '../pages/BookTourForm'; // Adjust the path as needed

const ExploreTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [selectedTourDetails, setSelectedTourDetails] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tours');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleViewDetails = async (tourId) => {
    try {
      const response = await fetch(`/api/tours/${tourId}`);
      const data = await response.json();
      setSelectedTourDetails(data);
      setShowDetailsModal(true);
    } catch (err) {
      console.error('Failed to fetch tour details', err);
    }
  };

  const handleBookTour = (tourId) => {
    setSelectedTourId(tourId);
    setShowBookingForm(true);
  };

  if (loading)
    return (
      <Container className="text-center p-5">
        <h2>Loading tours...</h2>
      </Container>
    );

  if (error)
    return (
      <Container className="text-center p-5">
        <h2>Error: {error}</h2>
      </Container>
    );

  return (
    <Container className="py-4">
      <h1 className="mb-4">Explore Amazing Tours</h1>
      <Row>
        {tours.map((tour) => (
          <Col key={tour.id} md={6} lg={4} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={tour.image_url || 'https://via.placeholder.com/350x200'}
                  alt={tour.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{tour.name}</Card.Title>
                  <Card.Text>{tour.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">${tour.price.adult}</span>
                  <div>
                    <Button
                      variant="info"
                      className="me-2"
                      onClick={() => handleViewDetails(tour.id)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleBookTour(tour.id)}
                    >
                      Book Now
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <BookTourForm
        show={showBookingForm}
        handleClose={() => setShowBookingForm(false)}
        tourId={selectedTourId}
      />

      {selectedTourDetails && (
        <Modal
          show={showDetailsModal}
          onHide={() => setShowDetailsModal(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedTourDetails.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedTourDetails.image_url || 'https://via.placeholder.com/350x200'}
              alt={selectedTourDetails.name}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <p>{selectedTourDetails.details}</p>
            <p>
              <strong>Price (USD):</strong> ${selectedTourDetails.price.adult} / ${selectedTourDetails.price.child}
            </p>
            <p>
              <strong>Price (KES):</strong> KES {selectedTourDetails.priceKES.adult} / KES {selectedTourDetails.priceKES.child}
            </p>
            <p>
              <strong>Duration:</strong> {selectedTourDetails.duration} Days
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleBookTour(selectedTourDetails.id)}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ExploreTours;
