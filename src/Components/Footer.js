import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm">Discover, ride, and connect with fellow enthusiasts for an unforgettable biking experience.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-black hover:underline">Home</a></li>
              <li><a href="http://localhost:3000/products" className="text-black hover:underline">Products</a></li>
              <li><a href="http://localhost:3000/contact" className="text-black hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm">123 Street Name</p>
            <p className="text-sm">City, State, Postal Code</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

