import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Title */}
        <h1 className="text-3xl font-bold text-center mb-4">Footer</h1>

        {/* Separator */}
        <hr className="border-gray-600 mb-6" />

        {/* Link to Home Page */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-lg font-semibold text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <b>Go to Home Page</b>
          </Link>
        </div>

        {/* Footer Content */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
