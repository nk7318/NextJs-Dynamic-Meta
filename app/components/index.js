"use client"



import Link from 'next/link';
import React, { useState } from 'react';




const Card = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-110"
          src={product.thumbnail}
          alt={product.title}
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="px-4 py-2 bg-white rounded-lg hover:bg-red-50 transform transition-transform hover:scale-110"
          >
            {isLiked ? '❤️' : '🤍'}
          </button>
          <button 
            className="px-4 py-2 bg-white rounded-lg hover:bg-blue-50 transform transition-transform hover:scale-110"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <Link href={`/product/${product.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg transform transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;