import React from 'react';
import { testimonials } from '@/constants';

const Testimonials: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
          Testimonials
        </h1>
        <div className="relative">
          {/* Optional: Vertical line for timeline effect */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-8 border-gray-700"></div> */}
          <div className="mx-auto mt-8 overflow-x-auto">
            <div className="flex gap-8 pb-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  className="flex-shrink-0 w-80 bg-gray-800 rounded-lg p-4 shadow-lg"
                  style={{ minWidth: '320px' }} // Adjust min-width to prevent collapsing on smaller screens
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.fullName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <div className="text-lg font-semibold text-white">
                        {testimonial.fullName}
                      </div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.testimonial}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
