'use client'
import { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface OpenItemsState {
  [key: number]: boolean;
}

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<OpenItemsState>({});

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Apa itu LRT Sumatera Selatan?",
      answer: "LRT Sumsel adalah sistem transportasi berbasis rel yang menghubungkan Bandara Sultan Mahmud Badaruddin II dengan Jakabaring, melewati berbagai titik penting di Palembang."
    },
    {
      id: 2,
      question: "Berapa tarif untuk naik LRT?",
      answer: "Tarif bervariasi tergantung jarak tempuh, mulai dari Rp5.000 hingga Rp10.000 per perjalanan."
    },
    {
      id: 3,
      question: "Bagaimana cara membeli tiket LRT?",
      answer: "Tiket bisa dibeli secara langsung di loket stasiun atau menggunakan kartu uang elektronik (e-money) dari berbagai bank yang bekerja sama."
    },
    {
      id: 4,
      question: "Bagaimana jadwal keberangkatan LRT?",
      answer: "LRT Sumsel beroperasi setiap hari dari pukul 05.00 hingga 19.00 WIB, dengan frekuensi keberangkatan setiap 17 menit sekali."
    },
    {
      id: 5,
      question: "Apakah LRT mendukung akses disabilitas?",
      answer: "Ya, semua stasiun LRT dilengkapi dengan lift, jalur landai, dan kursi prioritas untuk kenyamanan penumpang disabilitas."
    },
    {
      id: 6,
      question: "Apakah LRT Sumsel menerima pembayaran dengan QRIS atau aplikasi dompet digital?",
      answer: "Saat ini, tiket dapat dibeli dengan uang tunai atau kartu e-money. Pembayaran dengan QRIS dan dompet digital sedang dalam tahap pengembangan."
    },
    {
      id: 7,
      question: "Apakah boleh membawa sepeda atau barang besar ke dalam LRT?",
      answer: "Sepeda lipat diperbolehkan dengan kondisi tertentu, namun barang besar yang mengganggu kenyamanan penumpang tidak diperbolehkan."
    },
    {
      id: 8,
      question: "Bagaimana jika barang saya tertinggal di dalam LRT?",
      answer: "Segera hubungi petugas di stasiun terdekat atau layanan pelanggan LRT Sumsel untuk bantuan lebih lanjut."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden bg-[#FFF9F6]" style={{ zIndex: 0 }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="mb-6">
            {/* Section Number */}
            <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="font-bold">04</span>
            </div>

            <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-poppins leading-[72px]">
              FAQ
            </h2>
          </div>

          {/* FAQ Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqItems.map((item) => (
              <div 
                key={item.id} 
                className="rounded-lg p-6 w-full max-w-[708px]"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-2xl font-bold text-gray-800 font-poppins">{item.question}</h3>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className={`transition-transform duration-300 ${openItems[item.id] ? 'rotate-180' : ''}`}
                    >
                      <path d="M12 15.375L6 9.375L7.4 7.975L12 12.575L16.6 7.975L18 9.375L12 15.375Z" fill="#303030"/>
                    </svg>
                  </button>
                </div>

                <div className="border-b border-gray-300 mt-4"></div>
                {openItems[item.id] && (
                  <div className="mt-4 text-gray-500 text-lg">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;