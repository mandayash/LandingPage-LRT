// components/promo/PromoCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface PromoCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  validUntil: string;
}

const PromoCard = ({ id, title, imageUrl, validUntil }: PromoCardProps) => {
  return (
    <Link href={`/promo/${id}`}>
      <div className="flex flex-col items-start w-[342px] p-4 gap-3 rounded-xl bg-[#F9F9F9] hover:shadow-md transition-shadow duration-300">
        {/* Promo Image */}
        <div className="relative w-full h-[387.5px] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Promo Title */}
        <h3 className="text-gray-500 font-poppins text-2xl font-bold leading-[150%] tracking-[0.5px] self-stretch">
          {title}
        </h3>
        
        {/* Valid Until */}
        <p className="text-gray-400 sfPro text-lg font-normal leading-[150%] tracking-[0.5px] self-stretch">
          Valid until {validUntil}
        </p>
      </div>
    </Link>
  );
};

export default PromoCard;