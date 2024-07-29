"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/constants';

interface Testimonial {
  photo: string;
  fullName: string;
  role: string;
  testimonial: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Convert newlines to <br /> tags for rendering
  const formatTestimonial = (text: string) => {
    return text.replace(/\n/g, '<br />');
  };

  return (
    <div className="py-0">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
        >
          Testimonials
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Image
              src={testimonials[currentIndex]?.photo || '/placeholder.jpg'}
              alt={testimonials[currentIndex]?.fullName || 'Testimonial'}
              width={64} // Adjust width as needed
              height={64} // Adjust height as needed
              className="rounded-full object-cover"
            />
            <div className="ml-4">
              <div className="text-xl font-semibold text-white">
                {testimonials[currentIndex]?.fullName || 'Name'}
              </div>
              <div className="text-gray-400 text-sm">{testimonials[currentIndex]?.role || 'Role'}</div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg"
            dangerouslySetInnerHTML={{ __html: formatTestimonial(testimonials[currentIndex]?.testimonial || 'Testimonial text') }}
          />
          <div className="flex justify-between mt-6 relative z-20">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Previous testimonial"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                  currentIndex === index ? 'bg-purple-500' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Testimonial ${index + 1}`}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
