// components/promo/EventCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  eventDate: string;
}

const EventCard = ({ id, title, imageUrl, eventDate }: EventCardProps) => {
  return (
    <Link href={`/promo/${id}`}>
      <div className="flex flex-col items-start w-[342px] p-4 gap-3 rounded-xl bg-[#F9F9F9] hover:shadow-md transition-shadow duration-300">
        {/* Event Image */}
        <div className="relative w-full h-[387.5px] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Event Title */}
        <h3 className="text-gray-500 font-poppins text-2xl font-bold leading-[150%] tracking-[0.5px] self-stretch">
          {title}
        </h3>
        
        {/* Event Date */}
        <p className="text-gray-400 sfPro text-lg font-normal leading-[150%] tracking-[0.5px] self-stretch">
          {eventDate}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;