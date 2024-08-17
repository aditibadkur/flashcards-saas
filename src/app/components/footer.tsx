"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Product Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
