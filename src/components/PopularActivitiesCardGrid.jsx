import React from 'react';
import PopularActivitiesCard from './PopularActivitiesCard';

const PopularActivitiesCardGrid = () => {
  // Example data based on your image
  const destinations = [
    { 
      id: "igatpuri", 
      name: "Igatpuri", 
      category: "Trekking", 
      image: "/src/assets/1.jpg" 
    },
    { 
      id: "himachal", 
      name: "Himachal Pradesh", 
      category: "Trekking", 
      image: "/src/assets/1.jpg"  
    },
    { 
      id: "uttarakhand", 
      name: "Uttarakhand", 
      category: "Trekking", 
      image: "/src/assets/1.jpg"  
    },
    { 
      id: "coorg", 
      name: "Coorg", 
      category: "Trekking", 
      image: "/src/assets/1.jpg" 
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 tracking-tight">
        Best Trekking Destinations
      </h2>
      
      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <PopularActivitiesCard
            key={dest.id} 
            id={dest.id}
            name={dest.name} 
            category={dest.category} 
            image={dest.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default PopularActivitiesCardGrid;