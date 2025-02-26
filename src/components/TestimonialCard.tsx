import React from 'react';

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, image, testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;