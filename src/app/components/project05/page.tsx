// page.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="w-full py-4 bg-gray-800 fixed top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-500">BusinessName</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center h-screen bg-gray-900 pt-20">
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-5xl sm:text-7xl font-bold text-blue-500 mb-6">Empowering Modern Businesses</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience innovation with top-notch solutions designed for growth and success.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-400 text-center mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-blue-500">Innovative Technology</h4>
              <p className="text-gray-300">We bring you cutting-edge solutions to enhance efficiency.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-blue-500">Expert Support</h4>
              <p className="text-gray-300">Our team is here 24/7 to support your business needs.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-blue-500">Custom Solutions</h4>
              <p className="text-gray-300">Personalized services to match your specific goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-400 mb-12">About Us</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are a leading provider of innovative solutions, empowering businesses worldwide to reach new heights.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-400 mb-12">Contact Us</h3>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch to explore how we can support your business journey.
          </p>
          <a href="mailto:contact@business.com" className="text-lg font-semibold text-blue-400 hover:text-blue-300">
            contact@business.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-500">
        <p>&copy; 2024 BusinessName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
