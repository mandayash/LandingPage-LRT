import NewsSection from "@/components/home/NewsSection";

const RelatedArticles = () => {
  return (
    <div className="my-2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">
        Yuk Baca Artikel Berikut!
      </h2>
      
      {/* News Section*/}
      <div className="w-full max-w-none overflow-visible">
        <NewsSection hideHeader={true} />
      </div>
    </div>
  );
};

export default RelatedArticles;