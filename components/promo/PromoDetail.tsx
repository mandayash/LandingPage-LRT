// components/promo/PromoDetail.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PromoImages from './PromoImages';

interface PromoDetailProps {
  title: string;
  description: string;
  images: string[];
  hashtags?: string[];
}

const PromoDetail = ({ title, description, images, hashtags = [] }: PromoDetailProps) => {
  // Format deskripsi menjadi paragraf
  const paragraphs = description.split('\n').filter(p => p.trim() !== '');
  const formattedHashtags = hashtags.map(tag => `#${tag}`).join(' ');

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <Link 
        href="/promo" 
        className="inline-flex items-center mb-6 text-gray-500 hover:text-primary transition-colors"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Kembali ke Promo
      </Link>

      {/* Promo Title */}
      <h1 className="text-gray-500 font-poppins text-3xl md:text-4xl font-bold leading-[150%] tracking-[0.5px] mb-6">
        {title}
      </h1>

      {/* Promo Description */}
      <div className="mb-8">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="text-gray-500 sfPro text-lg font-normal leading-[150%] tracking-[0.5px] mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Hashtags */}
      {hashtags.length > 0 && (
        <div className="text-primary sfPro text-lg font-medium mb-8">
          {formattedHashtags}
        </div>
      )}
      
      {/* Promo Images */}
      <PromoImages images={images} title={title} />
    </div>
  );
};

export default PromoDetail;