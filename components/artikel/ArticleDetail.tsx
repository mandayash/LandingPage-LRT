// components/artikel/ArtikelDetail.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ArtikelHeader from './ArticleHeader';
import ArtikelImage from './ArticleImage';
import ArtikelContent from './ArticleContent';
import RelatedArtikel from './RelatedArticle';

interface ContentSection {
  subtitle?: string;
  paragraphs: string[];
}

interface ArtikelDetailProps {
  title: string;
  date: string;
  imagePath: string;
  content: ContentSection[];
  likes?: number;
  shares?: number;
}

const ArtikelDetail = ({ 
  title, 
  date, 
  imagePath, 
  content, 
  likes = 0, 
  shares = 0 
}: ArtikelDetailProps) => {
  return (
    <>
      {/* Artikel Content */}
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center mb-8 text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Kembali ke Beranda
        </Link>

        {/* Artikel Header */}
        <ArtikelHeader 
          title={title}
          date={date}
          likes={likes}
          shares={shares}
        />
        
        {/* Artikel Main Image */}
        <ArtikelImage 
          imagePath={imagePath}
          alt={title}
        />
        
        {/* Artikel Content */}
        <ArtikelContent content={content} />
      </div>
      
      {/* Related Artikel */}
      <div className="w-full mt-16">
        <div className="max-w-4xl mx-auto mb-8">
          {/* <h3 className="text-2xl font-bold text-gray-500 font-poppins">
            Yuk Baca Artikel Lainnya!
          </h3> */}
        </div>
        <div className="w-full max-w-none">
          <RelatedArtikel />
        </div>
      </div>
    </>
  );
};

export default ArtikelDetail;