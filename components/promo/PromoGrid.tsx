// components/promo/PromoGrid.tsx
'use client'
import { useState } from 'react';
import PromoCard from './PromoCard';

// Contoh data promo
const promoData = [
  {
    id: 1,
    title: "Promo Donut",
    imageUrl: "/images/promo1.png",
    validUntil: "28 Maret 2024"
  },
  {
    id: 2,
    title: "Dough Lab",
    imageUrl: "/images/promo2.png",
    validUntil: "28 Maret 2024"
  },
  {
    id: 3,
    title: "Max Ride",
    imageUrl: "/images/promo3.png",
    validUntil: "28 Maret 2024"
  },
  {
    id: 4,
    title: "Promo Kredivo",
    imageUrl: "/images/promo4.png",
    validUntil: "28 Maret 2024"
  },
  {
    id: 11,
    title: "Flash Sale",
    imageUrl: "/images/promo1.png",
    validUntil: "30 April 2024"
  },
  {
    id: 12,
    title: "Weekend Discount",
    imageUrl: "/images/promo2.png",
    validUntil: "15 Mei 2024"
  }
];

const PromoGrid = () => {
  // State untuk tracking posisi scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handler untuk scroll ke kanan
  const scrollRight = () => {
    const container = document.getElementById('promo-container');
    if (container) {
      const newPosition = scrollPosition + 366; // Card width + gap
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handler untuk scroll ke kiri
  const scrollLeft = () => {
    const container = document.getElementById('promo-container');
    if (container) {
      const newPosition = Math.max(0, scrollPosition - 366); // Card width + gap
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  // Menentukan apakah tombol scroll harus ditampilkan
  const showScrollButtons = promoData.length > 4;

  return (
    <div className="mb-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-500">
        Promo Harian
      </h2>
      
      <div className="relative">
        {/* Scroll buttons */}
        {showScrollButtons && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 z-10 bg-white rounded-full p-2 shadow-md disabled:opacity-50"
              disabled={scrollPosition <= 0}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}
        
        {/* Container dengan scroll */}
        <div 
          id="promo-container"
          className="flex items-start gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promoData.map((promo) => (
            <PromoCard
              key={promo.id}
              id={promo.id}
              title={promo.title}
              imageUrl={promo.imageUrl}
              validUntil={promo.validUntil}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoGrid;