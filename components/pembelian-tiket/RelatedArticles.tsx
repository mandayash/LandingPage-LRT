// components/beli-tiket/RelatedArticles.tsx
import NewsSection from "@/components/home/NewsSection";

const RelatedArticles = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 font-poppins">
        Yuk Baca Artikel Berikut!
      </h2>
      
      {/* Menggunakan komponen NewsSection yang sudah ada */}
      <div className="-mt-24">
        <NewsSection hideHeader={true} />
      </div>
    </div>
  );
};

export default RelatedArticles;