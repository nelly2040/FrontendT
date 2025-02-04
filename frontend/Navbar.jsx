import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { User, LogOut, Home, MapPin, Menu as MenuIcon, X } from 'lucide-react';

function Navigation() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    setUser(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <MapPin className="mr-2" /> Tour Company
          </Link>

          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-200 flex items-center">
              <Home className="mr-1" /> Home
            </Link>
            <Link to="/dashboard" className="hover:text-blue-200 flex items-center">
              <MapPin className="mr-1" /> Tours
            </Link>

            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center hover:text-blue-200">
                  <User className="mr-1" /> {user.name}
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <button 
                        onClick={logout}
                        className={`${active ? 'bg-blue-100' : ''} flex items-center w-full p-2`}
                      >
                        <LogOut className="mr-2" /> Logout
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-200">Login</Link>
                <Link to="/register" className="hover:text-blue-200">Register</Link>
              </>
            )}
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-blue-600 z-50">
              <div className="flex flex-col items-center space-y-4 py-4">
                <Link to="/" className="hover:text-blue-200 flex items-center" onClick={toggleMenu}>
                  <Home className="mr-1" /> Home
                </Link>
                <Link to="/dashboard" className="hover:text-blue-200 flex items-center" onClick={toggleMenu}>
                  <MapPin className="mr-1" /> Tours
                </Link>

                {user ? (
                  <>
                    <div className="flex items-center">
                      <User className="mr-1" /> {user.name}
                    </div>
                    <button 
                      onClick={() => {
                        logout();
                        toggleMenu();
                      }}
                      className="hover:text-blue-200 flex items-center"
                    >
                      <LogOut className="mr-1" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="hover:text-blue-200" onClick={toggleMenu}>Login</Link>
                    <Link to="/register" className="hover:text-blue-200" onClick={toggleMenu}>Register</Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;