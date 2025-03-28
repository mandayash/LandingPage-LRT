// components/promo/EventGrid.tsx
'use client'
import { useState } from 'react';
import EventCard from './EventCard';

// Contoh data event
const eventData = [
  {
    id: 5,
    title: "Cosplay Adventure",
    imageUrl: "/images/event1.png",
    eventDate: "2 Agustus 2025"
  },
  {
    id: 6,
    title: "Dough Lab",
    imageUrl: "/images/event2.png",
    eventDate: "20 Februari 2027"
  },
  {
    id: 7,
    title: "Max Ride",
    imageUrl: "/images/event3.png",
    eventDate: "10 Desember 2025"
  },
  {
    id: 8,
    title: "Promo Kredivo",
    imageUrl: "/images/event4.png",
    eventDate: "13 Maret 2030"
  },
  {
    id: 9,
    title: "Tech Conference",
    imageUrl: "/images/event2.png",
    eventDate: "5 April 2025"
  },
  {
    id: 10,
    title: "Musik Festival",
    imageUrl: "/images/event1.png",
    eventDate: "22 Juni 2026"
  }
];

const EventGrid = () => {
  // State untuk tracking posisi scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handler untuk scroll ke kanan
  const scrollRight = () => {
    const container = document.getElementById('event-container');
    if (container) {
      const newPosition = scrollPosition + 366; 
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handler untuk scroll ke kiri
  const scrollLeft = () => {
    const container = document.getElementById('event-container');
    if (container) {
      const newPosition = Math.max(0, scrollPosition - 366); 
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };


  const showScrollButtons = eventData.length > 4;

  return (
    <div className="mb-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-500">
        Event LRT Sumatera Selatan
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
          id="event-container"
          className="flex items-start gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {eventData.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              imageUrl={event.imageUrl}
              eventDate={event.eventDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGrid;