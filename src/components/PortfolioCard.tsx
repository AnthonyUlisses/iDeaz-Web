import React from 'react';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200">{category}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;