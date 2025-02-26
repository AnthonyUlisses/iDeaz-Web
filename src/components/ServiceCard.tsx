import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-[#c7173b]/10 rounded-full flex items-center justify-center mb-6">
        <div className="text-[#c7173b] w-8 h-8">
          {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-[#c7173b]" })}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;