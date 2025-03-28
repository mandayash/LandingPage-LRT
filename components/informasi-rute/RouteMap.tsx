// components/informasi-rute/RouteMap.tsx

'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const RouteMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inisialisasi Google Maps
    const initializeMap = () => {
      // Koordinat Palembang
      const palembang = { lat: -2.9761, lng: 104.7754 };
      
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: palembang,
          zoom: 12,
          mapTypeControl: true,
          streetViewControl: false,
        });

        // Menambahkan marker untuk stasiun LRT
        // Koordinat ini adalah contoh, sesuaikan dengan koordinat yang tepat
        const stations = [
          { position: { lat: -2.9761, lng: 104.7754 }, title: "Stasiun OPI" },
          { position: { lat: -2.9661, lng: 104.7554 }, title: "Stasiun Stadion Jakabaring" },
          // Tambahkan koordinat untuk stasiun lainnya
        ];

        stations.forEach((station) => {
          const marker = new window.google.maps.Marker({
            position: station.position,
            map,
            title: station.title,
            icon: {
              url: '/images/lrt-station-marker.png',  //Perlu dibuat atau tidak ya?
              scaledSize: new window.google.maps.Size(24, 24),
            }
          });
        });
      }
    };

    // Memuat Google Maps API
    if (!window.google) {
      window.initMap = initializeMap;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }

    // Cleanup
    return () => {
      window.initMap = () => {};
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-4">
        Peta Jaringan Transportasi Umum Massal Kota Palembang
      </h2>
      <p className="text-gray-400 mb-4">
        Palembang Mass Transit Network Map
      </p>
      
      {/* Peta Jaringan (Static Image) */}
      <div className="relative w-full h-[300px] mb-6">
        <Image
          src="/images/lrt-map.png"
          alt="Peta Jaringan LRT Palembang"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Google Maps (Interactive) */}
      <h3 className="text-lg font-semibold mb-4">Lokasi Stasiun LRT</h3>
      <div 
        ref={mapRef} 
        className="w-full h-[350px] rounded-lg border border-gray-300"
      ></div>
    </div>
  );
};

export default RouteMap;