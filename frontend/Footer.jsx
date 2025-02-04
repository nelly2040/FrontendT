import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <MapPin className="mr-2 text-blue-400" size={24} />
              <h3 className="text-xl font-bold">Tour Company</h3>
            </div>
            <p className="text-gray-300">
              Explore the world with us. Unforgettable journeys await.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="block hover:text-blue-300 transition-colors">
                Tours
              </Link>
              <Link to="/about" className="block hover:text-blue-300 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {[
                { Icon: Facebook, url: '#' },
                { Icon: Twitter, url: '#' },
                { Icon: Instagram, url: '#' }
              ].map(({ Icon, url }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-white"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 mt-6 pt-4">
          <p className="text-gray-400">
            &copy; {currentYear} Tour Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;