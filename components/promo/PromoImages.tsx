// components/promo/PromoImages.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';

interface PromoImagesProps {
  images: string[];
  title: string;
}

const PromoImages = ({ images, title }: PromoImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showSlider = images.length > 2;

  // Handler untuk slide selanjutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= images.length - 2 ? 0 : prevIndex + 1
    );
  };

  // Handler untuk slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 2 : prevIndex - 1
    );
  };

  if (showSlider) {
    return (
      <div className="relative w-full mb-8">
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-1/2 p-2"
              >
                <div className="relative w-full h-[581px] md:w-[464px] mx-auto rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} - gambar ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: images.length - 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative w-full h-[581px] md:h-[581px] md:max-w-[464px] mx-auto rounded-xl overflow-hidden"
        >
          <Image
            src={image}
            alt={`${title} - gambar ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PromoImages;