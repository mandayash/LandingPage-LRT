import Image from "next/image";
import Link from "next/link";

// Dummy data 
const newsData = [
  {
    id: 1,
    title: "Kolaborasi LRT Palembang dengan Komunitas Lokal",
    image: "/images/gambar1-lrt.png",
    content: "LRT Sumatera Selatan terus berinovasi dengan menggandeng komunitas lokal dalam berbagai kegiatan, seperti event seni, literasi, dan kampanye lingkungan untuk menciptakan transportasi yang lebih ramah lingkungan.",
    date: "2 hari lalu",
    likes: 24,
    shares: 12
  },
  {
    id: 2,
    title: "Perpanjangan Jam Operasional LRT Palembang",
    image: "/images/gambar2-lrt.png",
    content: "Demi meningkatkan pelayanan kepada masyarakat, LRT Sumatera Selatan kini memperpanjang jam operasionalnya hingga pukul 22.00 WIB. Perubahan ini bertujuan untuk memberikan fleksibilitas lebih bagi para pengguna transportasi publik.",
    date: "2 hari lalu",
    likes: 18,
    shares: 8
  },
  {
    id: 3,
    title: "Promo Akhir Tahun: Diskon Tiket LRT hingga 50%!",
    image: "/images/gambar3-lrt.png",
    content: "Dalam rangka menyambut tahun baru, LRT Sumatera Selatan menghadirkan promo spesial dengan diskon tiket hingga 50%. Promo ini berlaku selama bulan Desember dan dapat dinikmati oleh seluruh pengguna aplikasi resmi LRT.",
    date: "2 hari lalu",
    likes: 56,
    shares: 34
  },
  {
    id: 4,
    title: "Perawatan Rutin Jalur dan Armada LRT untuk Kenyamanan Penumpang",
    image: "/images/gambar4-lrt.png",
    content: "Demi menjaga keamanan dan kenyamanan perjalanan, tim teknis LRT Palembang melakukan perawatan rutin pada jalur dan armada. Pemeriksaan ini mencakup kebersihan, sistem kelistrikan, serta performa kereta.",
    date: "2 hari lalu",
    likes: 32,
    shares: 14
  }
];

const NewsSection = ({ hideHeader = false}) => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" style={{ zIndex: 0 }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Container */}
          <div className="flex flex-col gap-6">
            {/* Bagian Header */}
            {!hideHeader && (
            <div>
              <div className="mb-6">
                {/* Section Number */}
                <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">03</span>
                </div>

                <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-poppins leading-[72px]">
                  Informasi
                  <br />
                  Terkini
                </h2>
              </div>
            </div>
            )}

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsData.map((newsItem) => (
                  <div 
                    key={newsItem.id}
                    className="bg-white p-4 rounded-2xl border border-gray-300 flex flex-col justify-between h-full w-full"
                  >
                    {/* News Image */}
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* News Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins text-left">{newsItem.title}</h3>
                      <p className="text-gray-400 flex-grow text-lg text-justify">{newsItem.content}</p>
                    </div>
                    
                    {/* Likes, Share & Date */}
                    <div className="flex items-center justify-between pt-4">
                      {/* <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.2801 22.1H12.4801C11.9201 22.1 10.7001 21.93 10.0501 21.28L7.02011 18.94L7.94011 17.75L11.0401 20.15C11.2901 20.39 11.9201 20.59 12.4801 20.59H16.2801C17.1801 20.59 18.1501 19.87 18.3501 19.06L20.7701 11.71C20.9301 11.27 20.9001 10.87 20.6901 10.58C20.4701 10.27 20.0701 10.09 19.5801 10.09H15.5801C15.0601 10.09 14.5801 9.86999 14.2501 9.48999C13.9101 9.09999 13.7601 8.57999 13.8401 8.03999L14.3401 4.82999C14.4601 4.26999 14.0801 3.63999 13.5401 3.45999C13.0501 3.27999 12.4201 3.53999 12.2001 3.85999L8.10011 9.95999L6.86011 9.12999L10.9601 3.02999C11.5901 2.08999 12.9701 1.63999 14.0501 2.04999C15.3001 2.45999 16.1001 3.83999 15.8201 5.11999L15.3301 8.26999C15.3201 8.33999 15.3201 8.43999 15.3901 8.51999C15.4401 8.56999 15.5101 8.59999 15.5901 8.59999H19.5901C20.5701 8.59999 21.4201 9.00999 21.9201 9.71999C22.4101 10.41 22.5101 11.32 22.1901 12.2L19.8001 19.48C19.4301 20.93 17.8901 22.1 16.2801 22.1Z" fill="#828282"/>
                            <path d="M5.37988 20.9999H4.37988C2.52988 20.9999 1.62988 20.1299 1.62988 18.3499V8.5499C1.62988 6.7699 2.52988 5.8999 4.37988 5.8999H5.37988C7.22988 5.8999 8.12988 6.7699 8.12988 8.5499V18.3499C8.12988 20.1299 7.22988 20.9999 5.37988 20.9999ZM4.37988 7.3999C3.28988 7.3999 3.12988 7.6599 3.12988 8.5499V18.3499C3.12988 19.2399 3.28988 19.4999 4.37988 19.4999H5.37988C6.46988 19.4999 6.62988 19.2399 6.62988 18.3499V8.5499C6.62988 7.6599 6.46988 7.3999 5.37988 7.3999H4.37988Z" fill="#828282"/>
                          </svg>
                          <span className="text-gray-400">{newsItem.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.2199 21.6301C13.0399 21.6301 11.3699 20.8001 10.0499 16.8301L9.32988 14.6701L7.16988 13.9501C3.20988 12.6301 2.37988 10.9601 2.37988 9.78007C2.37988 8.61007 3.20988 6.93007 7.16988 5.60007L15.6599 2.77007C17.7799 2.06007 19.5499 2.27007 20.6399 3.35007C21.7299 4.43007 21.9399 6.21007 21.2299 8.33007L18.3999 16.8201C17.0699 20.8001 15.3999 21.6301 14.2199 21.6301ZM7.63988 7.03007C4.85988 7.96007 3.86988 9.06007 3.86988 9.78007C3.86988 10.5001 4.85988 11.6001 7.63988 12.5201L10.1599 13.3601C10.3799 13.4301 10.5599 13.6101 10.6299 13.8301L11.4699 16.3501C12.3899 19.1301 13.4999 20.1201 14.2199 20.1201C14.9399 20.1201 16.0399 19.1301 16.9699 16.3501L19.7999 7.86007C20.3099 6.32007 20.2199 5.06007 19.5699 4.41007C18.9199 3.76007 17.6599 3.68007 16.1299 4.19007L7.63988 7.03007Z" fill="#828282"/>
                            <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="#828282"/>
                          </svg>
                          <span className="text-gray-400">{newsItem.shares}</span>
                        </div>
                      </div> */}
                      
                      {/* <span className="text-gray-400 text-sm">{newsItem.date}</span> */}
                    </div>

                    {/* Read More Button */}
                    <div className="pt-4">
                      <Link 
                        href={`/artikel/${newsItem.id}`} 
                        className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;