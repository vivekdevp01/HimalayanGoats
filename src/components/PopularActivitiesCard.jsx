import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PopularActivitiesCard = ({ id, name, category, image }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      // Hover animation for a premium feel
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      // Navigation logic
      onClick={() => navigate(`/destination/${id}`)}
      className="relative w-full max-w-[300px] aspect-[4/5] rounded-[24px] overflow-hidden cursor-pointer shadow-xl group"
    >
      {/* Background Image */}
      <img
        src={image || "/fallback-destination.jpg"}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="text-2xl font-bold tracking-tight mb-1">
          {name}
        </h3>
        <p className="text-sm font-medium opacity-90">
          {category} Packages
        </p>
      </div>
    </motion.div>
  );
};

export default PopularActivitiesCard ;