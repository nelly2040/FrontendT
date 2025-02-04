import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const backgroundImages = [
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (email && password) {
      setIsLoggedIn(true);
      setUsername(email.split('@')[0]);
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <div className="bg-light">
      <div 
        className="position-relative vh-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${backgroundImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container text-center text-white">
          <h1 
            className="display-3 mb-4 fw-bold"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              color: 'dark'
            }}
          >
            Discover Incredible Journeys
          </h1>
          <p 
            className="lead mb-5 text-dark-50 mx-auto"
            style={{ maxWidth: '700px' }}
          >
            Embark on extraordinary adventures that create lifelong memories across breathtaking landscapes and unique destinations.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              to="/tours" 
              className="btn btn-primary btn-lg px-4 py-2 shadow-lg"
            >
              Explore Tours
            </Link>
            <Link 
              to="/register" 
              className="btn btn-outline-dark btn-lg px-4 py-2 shadow-lg"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Our Travel Categories</h2>
            <div className="d-flex justify-content-center gap-4">
              {[
                { emoji: '🏔️', title: 'Adventure Tours' },
                { emoji: '🏖️', title: 'Beach Escapes' },
                { emoji: '🏛️', title: 'Cultural Trips' }
              ].map((category, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary rounded-circle p-3 mb-2 d-inline-block">
                    <span className="display-6">{category.emoji}</span>
                  </div>
                  <h4>{category.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 bg-light">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Popular Destinations</h2>
            <div className="row">
              {[
                { name: 'Maasai Mara', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhE8PBCZiRFGuM2vwUQJK_5CcQ3rU3gADow&s' },
                { name: 'Samburu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIunLbbsm9PGBMnVhT00qkWbZSjlUeGfEIMw&s' },
                { name: 'Watamu', image: 'https://www.kenyasafari.com/images/hemingways-watamu-aerial-786x500.jpg' }
              ].map((destination, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="card-img-top" 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{destination.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                  >
                    Log In
                  </button>
                  <div className="text-center mt-3">
                    <Link to="/register" className="text-decoration-none">
                      Create an Account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">&copy; 2025 Travel Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;