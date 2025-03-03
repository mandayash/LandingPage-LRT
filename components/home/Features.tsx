import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: "/icons/Train.png",
      title: "Layanan Transportasi Harian",
      description: "Nikmati perjalanan bebas macet dengan LRT Sumsel. Akses cepat ke pusat kota, bandara, dan kawasan strategis lainnya."
    },
    {
      icon: "/icons/Ticket Purchase.png",
      title: "Pembelian Tiket Mudah",
      description: "Beli tiket secara online atau offline di loket stasiun. Dukung pembayaran digital untuk pengalaman yang lebih praktis."
    },
    {
      icon: "/icons/Timesheet.png",
      title: "Rute dan Jadwal Real-time",
      description: "Cek jadwal keberangkatan & kedatangan langsung melalui aplikasi atau di setiap stasiun. Selalu tepat waktu!"
    },
    {
      icon: "/icons/MySpace.png",
      title: "Fasilitas Lengkap, Ramah Disabilitas",
      description: "Kereta ber-AC, ruang tunggu nyaman, Wi-Fi, akses lift, dan kursi prioritas untuk kenyamanan semua penumpang."
    },
    {
      icon: "/icons/Recycling.png",
      title: "Transportasi Ramah Lingkungan",
      description: "LRT berbasis listrik membantu mengurangi polusi udara & mendukung transportasi berkelanjutan di Palembang."
    },
    {
      icon: "/icons/Last 24 Hours.png",
      title: "Layanan Pelanggan 24/7 Siap bantu",
      description: "Hubungi kami untuk informasi perjalanan, pengaduan, atau bantuan barang hilang di hotline & stasiun terdekat."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden" style={{ zIndex: 0 }}>
      {/* Decoration Circles - Top Right */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-0 md:block opacity-50 pointer-events-none">
        <svg 
          width="288" 
          height="288" 
          viewBox="0 0 288 288" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="62.75" cy="62.75" r="62.75" fill="white" fillOpacity="0.3"/>
          <circle cx="188.25" cy="62.75" r="62.75" fill="white" fillOpacity="0.3"/>
          <circle cx="62.75" cy="188.25" r="62.75" fill="white" fillOpacity="0.3"/>
          <circle cx="188.25" cy="188.25" r="62.75" fill="white" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Decoration Circles - Bottom Right */}
      <div className="absolute right-0 bottom-0 z-0 md:block opacity-50 pointer-events-none">
        <svg 
          width="288" 
          height="288" 
          viewBox="0 0 288 288" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="62.75" cy="62.75" r="62.75" fill="white" fillOpacity="0.3"/>
          <circle cx="188.25" cy="62.75" r="62.75" fill="white" fillOpacity="0.3"/>
          <circle cx="62.75" cy="188.25" r="62.75" fill="white" fillOpacity="0.3"/>
          <circle cx="188.25" cy="188.25" r="62.75" fill="white" fillOpacity="0.3"/>
        </svg>
      </div>
  
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bagian kiri - Header */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                {/* Section Number */}
                <div className="bg-white text-gray-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">02</span>
                </div>

                <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-white font-poppins leading-[72px]">
                  Kenapa Harus
                  <br />
                  Naik LRT?
                </h2>
              </div>
            </div>

            {/* Bagian kanan - Cards atas */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Layanan Transportasi Harian */}
              <div 
                className="bg-white p-6 rounded-lg group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer w-full"
              >
                <div className="mb-4">
                  <Image 
                    src={features[0].icon}
                    alt={features[0].title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary font-poppins text-gray-500">
                    {features[0].title}
                  </h3>
                  <p className="text-gray-400 text-lg font-normal">
                    {features[0].description}
                  </p>
                </div>
              </div>

              {/* Pembelian Tiket Mudah */}
              <div 
                className="bg-white p-6 rounded-lg group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer w-full"
              >
                <div className="mb-4">
                  <Image 
                    src={features[1].icon}
                    alt={features[1].title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary font-poppins text-gray-500">
                    {features[1].title}
                  </h3>
                  <p className="text-gray-400 text-lg font-normal">
                    {features[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card bawah */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(2).map((feature, index) => (
              <div 
                key={index + 2}
                className="bg-white p-6 rounded-lg group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer w-full"
              >
                <div className="mb-4">
                  <Image 
                    src={feature.icon}
                    alt={feature.title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary font-poppins text-gray-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;