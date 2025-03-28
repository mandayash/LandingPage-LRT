'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";


interface Station {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

// Data stasiun dengan koordinat lokasi
const stationsData: Station[] = [
  { id: 1, name: "Stasiun OPI", lat: -3.0258, lng: 104.7791 },
  { id: 2, name: "Stasiun Stadion Jakabaring", lat: -3.0175, lng: 104.7641 },
  { id: 3, name: "Stasiun Gubernur Bestari - Polresta", lat: -2.9898, lng: 104.7596 },
  { id: 4, name: "Stasiun Terpadu Jembatan Ampera", lat: -2.9719, lng: 104.7631 },
  { id: 5, name: "Stasiun Pasar Cinde", lat: -2.9634, lng: 104.7489 },
  { id: 6, name: "Stasiun Dishub Kominfo Prov. Sumsel", lat: -2.9528, lng: 104.7412 },
  { id: 7, name: "Stasiun Palembang Icon", lat: -2.9456, lng: 104.7361 },
  { id: 8, name: "Stasiun SMK 2", lat: -2.9374, lng: 104.7308 },
  { id: 9, name: "Stasiun Polda", lat: -2.9300, lng: 104.7254 },
  { id: 10, name: "Stasiun RSUD", lat: -2.9227, lng: 104.7197 },
  { id: 11, name: "Stasiun Asrama Haji", lat: -2.9025, lng: 104.7046 },
  { id: 12, name: "Stasiun Bandara", lat: -2.8976, lng: 104.6993 },
];

interface RouteMapProps {
  selectedStationId?: number;
}

const RouteMap = ({ selectedStationId }: RouteMapProps) => {
  const [activeStation, setActiveStation] = useState(stationsData[0]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (selectedStationId) {
      const station = stationsData.find(s => s.id === selectedStationId);
      if (station) {
        setActiveStation(station);
      }
    }
  }, [selectedStationId]);


  const getMapEmbedUrl = (station: Station): string => {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(station.name)}&center=${station.lat},${station.lng}&zoom=17`;
  };


  const getGoogleMapsUrl = (station: Station): string => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.name)}&query_place_id=${station.lat},${station.lng}`;
  };

  // Handler untuk zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width * 100,
        y: (e.clientY - rect.top) / rect.height * 100
      });
    }
  };

  // Handler untuk tombol zoom
  const handleZoom = (type: 'in' | 'out') => {
    if (type === 'in' && zoomLevel < 2) {
      setZoomLevel(prev => prev + 0.5);
    } else if (type === 'out' && zoomLevel > 1) {
      setZoomLevel(prev => prev - 0.5);
    }
  };

  // Reset zoom
  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      
      {/* Peta Jaringan dengan Zoom */}
      <div className="relative w-full h-[500px] mb-6 overflow-hidden">
        <div 
          ref={imageRef}
          onMouseMove={handleMouseMove}
          className="relative w-full h-full cursor-zoom-in"
        >
          <div 
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              transition: 'transform 0.3s ease-out'
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/lrt-map.png"
              alt="Peta Jaringan LRT Palembang"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Tombol Zoom untuk Mobile/Tablet */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <button 
            onClick={() => handleZoom('in')}
            className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          >
            +
          </button>
          <button 
            onClick={() => handleZoom('out')}
            className="bg-primary text-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          >
            -
          </button>
          {zoomLevel !== 1 && (
            <button 
              onClick={resetZoom}
              className="bg-gray-200 text-gray-700 p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              ↺
            </button>
          )}
        </div>
      </div>
      
      {/* Station Selector */}
      <div className="mb-4">
        <label htmlFor="station-select" className="block text-sm font-medium text-gray-700 mb-2">
          Pilih Stasiun:
        </label>
        <select
          id="station-select"
          value={activeStation.id}
          onChange={(e) => {
            const station = stationsData.find(s => s.id === parseInt(e.target.value));
            if (station) setActiveStation(station);
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {stationsData.map(station => (
            <option key={station.id} value={station.id}>
              {station.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Google Maps (Embedded) */}
      <h3 className="text-lg font-semibold mb-4">Lokasi {activeStation.name}</h3>
      <div className="w-full h-[350px] rounded-lg border border-gray-300 overflow-hidden relative">
        <iframe 
          src={getMapEmbedUrl(activeStation)}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Tombol lihat di Google Maps pada tab baru */}
        <a 
          href={getGoogleMapsUrl(activeStation)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-primary hover:bg-gray-100 transition-colors z-10"
        >
          Buka di Google Maps
        </a>
      </div>
    </div>
  );
};

export default RouteMap;