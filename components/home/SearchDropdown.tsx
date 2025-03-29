'use client'

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const stations = [
  { id: 1, name: "Stasiun OPI" },
  { id: 2, name: "Stasiun Stadion Jakabaring" },
  { id: 3, name: "Stasiun Gubernur Bestari - Polresta" },
  { id: 4, name: "Stasiun Terpadu Jembatan Ampera" },
  { id: 5, name: "Stasiun Pasar Cinde" },
  { id: 6, name: "Stasiun Dishub Kominfo Prov. Sumsel" },
  { id: 7, name: "Stasiun Palembang Icon" },
  { id: 8, name: "Stasiun SMK 2" },
  { id: 9, name: "Stasiun Polda" },
  { id: 10, name: "Stasiun RSUD" },
  { id: 11, name: "Stasiun Asrama Haji" },
  { id: 12, name: "Stasiun Bandara" },
];

const SearchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();


  const filteredStations = stations.filter(station => 
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleStationSelect = (stationId: number) => {
    setSearchTerm('');
    setIsOpen(false);
    
    router.push(`/informasi-rute?station=${stationId}`);
  };

  return (
    <div className="relative w-full max-w-md" ref={dropdownRef}>
      <div className="relative flex items-center">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Cari stasiun terdekat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="
            pl-4 pr-12
            py-6
            bg-white/90 
            backdrop-blur-sm
            text-gray-800
            placeholder:text-gray-500
            w-full
            rounded-full
            focus:ring-2 focus:ring-primary
            md:block
          "
        />
        <button 
          className="
            absolute right-4
            p-2
            bg-transparent
            text-gray-600
            hover:text-primary
            transition-colors
          "
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) {
              inputRef.current?.focus();
            }
          }}
        >
          <Search className="w-6 h-6" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {filteredStations.length > 0 ? (
            <ul className="py-2 divide-y divide-gray-300">
              {filteredStations.map((station, index) => (
                <li key={station.id}>
                  <button
                    className="px-4 py-3 w-full text-left hover:bg-gray-200 transition-colors duration-150 text-gray-700"
                    onClick={() => handleStationSelect(station.id)}
                  >
                    <span>{station.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-gray-500">Tidak ada stasiun yang ditemukan</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;