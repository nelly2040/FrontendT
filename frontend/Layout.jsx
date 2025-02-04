import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 Tour Company. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Layout;