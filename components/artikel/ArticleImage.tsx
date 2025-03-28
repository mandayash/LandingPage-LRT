import Image from 'next/image';

interface ArticleImageProps {
  imagePath: string;
  alt: string;
}

const ArticleImage = ({ imagePath, alt }: ArticleImageProps) => {
  return (
    <div className="w-full relative mb-8">
      <div className="relative w-full h-[233px] md:h-[350px] lg:h-[466px] rounded-lg overflow-hidden">
        <Image
          src={imagePath || '/images/gambar1-lrt.png'}
          alt={alt || 'Artikel gambar'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
        />
      </div>
    </div>
  );
};

export default ArticleImage;