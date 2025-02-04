import React, { useState, useEffect } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Modal, 
  Accordion, 
  Spinner, 
  Alert, 
  Navbar, 
  Nav 
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { TOURS } from "../data/tours";
import BookTourForm from "../pages/BookTourForm";

const defaultImages = {
  "Lake Malawi & Victoria Falls Expedition II": "https://cdn.pixabay.com/photo/2019/06/08/11/17/waterfall-4259935_640.jpg",  
  "Masai Mara Luxury Safari": "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
  "Inferno Expedition - Suguta II": "https://media.istockphoto.com/id/1095994958/photo/electric-power.jpg?s=612x612&w=0&k=20&c=wjEQg4RaIgL5CtT0ULqjhzgdwPcWA_otbjpI0mXzMOQ=",
  "Kapedo & Silale Crater Expedition": "https://media.istockphoto.com/id/1189920127/photo/meteor-crater-natural-landmark-near-winslow-az.jpg?s=612x612&w=0&k=20&c=pNNBcydn9Y0T95sE_4fXbKBfQk19mdTR9EcSV8qLUGI=",
  "2000kms Coast Expedition": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  "Cliffhanger Overland Truck Expedition II - Overland Truck": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgktHtEdGUP1Z62dYfh7OTiNjTVGNTm4Z5Yw&s",
  "Samburu Safari Adventure": "https://media.istockphoto.com/id/2137108146/photo/reticulated-giraffe-samburu.jpg?s=612x612&w=0&k=20&c=UBHybdftSvTFEzYLd5Crnko2SJzLIAMYe4UmD89O8bQ=",
  "Salt Lick Safari in Taita Hills": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ae/90/e4/salt-lick-safari-lodge.jpg?w=700&h=-1&s=1",
  "Nakuru & Naivasha Explorer": "https://ecoadventuresafaris.com/wp-content/uploads/2021/09/Lake-Nakuru-National-Park1.jpg",
  "Tsavo East & West Safari": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6260TV4eEp6azz6imqCarYDWs0mfQRPGqQ&s",
  "Gede Ruins & Malindi Coastal Tour": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NWNze_5XPOxsVPlSMc2GRsfFUwwsf1539Q&s",
  "Nairobi National Park & Museum Day Trip": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4EcyTVfa9Wgq84QMEeZ23dj6QwXPLnSXEg&s",
  "Naivasha & Hell's Gate National Park Adventure": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pklOT8q8twcnvmYqYwCtB_blvtzQiy0B0w&s",
  "Amboseli & Chyulu Hills Safari": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIZZYqHSuLt1vpOmsvjEIi9-QM_4Gvge8Vw&s"
};

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [showTourModal, setShowTourModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log("TOURS from import:", TOURS);
      if (TOURS && TOURS.length > 0) {
        setTours(TOURS);
      } else {
        setError("No tours found");
      }
    } catch (err) {
      console.error("Error loading tours:", err);
      setError(err.message);
    }
  }, []);

  const handleShowTourDetails = (tour) => {
    setSelectedTour(tour);
    setShowTourModal(true);
  };

  const handleBookTour = (tourId) => {
    setSelectedTourId(tourId);
    setShowBookingModal(true);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Error Loading Tours</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  if (tours.length === 0) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading tours...</p>
      </Container>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            Tour Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container 
        fluid 
        className="p-4" 
        style={{ 
          backgroundImage: "url('https://media.istockphoto.com/id/649180312/photo/africa-sunset-over-acacia-tree-and-elephant.jpg?s=612x612&w=0&k=20&c=B6XYE6LmgrgrRYkKsJft86ou9GYXseYalaXbgyIM4Fw=", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        <Row className="mb-4 text-center text-white">
          <Col>
            <h2 className="fw-bold">Welcome, {user?.name || "Traveler"}!</h2>
            <p className="text-muted">Discover unforgettable safari experiences.</p>
          </Col>
        </Row>

        <div className="text-center mb-3 text-white">
          <p>Number of Tours: {tours.length}</p>
        </div>

        <Row>
          {tours.map((tour) => (
            <Col key={tour.id} md={4} className="mb-4">
              <Card className="h-100 shadow border-0">
                <Card.Img
                  variant="top"
                  src={tour.image ? tour.image : (defaultImages[tour.name] || "https://via.placeholder.com/300x200")}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{tour.name}</Card.Title>
                  <Card.Text>
                    {tour.shortDescription || tour.description.substring(0, 100) + "..."}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleShowTourDetails(tour)}>
                      View Details
                    </Button>
                    <Button variant="success" className="ms-2" onClick={() => handleBookTour(tour.id)}>
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showTourModal} onHide={() => setShowTourModal(false)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedTour?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Tour Information</h5>
            <ul className="list-unstyled">
              <li><strong>ID:</strong> {selectedTour?.id}</li>
              <li><strong>Location:</strong> {selectedTour?.location}</li>
              <li><strong>Start Date:</strong> {selectedTour?.startDate || "TBD"}</li>
              <li><strong>End Date:</strong> {selectedTour?.endDate || "TBD"}</li>
              <li><strong>Price:</strong> ${selectedTour?.price}</li>
            </ul>
            <h5>Description</h5>
            <p>{selectedTour?.description}</p>

            <h5 className="mt-4">Itinerary</h5>
            <Accordion defaultActiveKey="0">
              {selectedTour?.itinerary?.map((day, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>Day {index + 1}: {day.title}</Accordion.Header>
                  <Accordion.Body>
                    <p>{day.details}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowTourModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleBookTour(selectedTour?.id)}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal>

        <BookTourForm 
          show={showBookingModal} 
          handleClose={() => setShowBookingModal(false)} 
          tourId={selectedTourId} 
        />
      </Container>
    </>
  );
}

export default Dashboard;
