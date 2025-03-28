import React from 'react';

interface ContentSection {
  subtitle?: string;
  paragraphs: string[];
}

interface ArticleContentProps {
  content: ContentSection[];
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <div className="w-full mb-12">
      {content.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          {/* Sub judul */}
          {section.subtitle && (
            <h2 className="text-gray-500 font-poppins text-xl font-bold leading-[150%] tracking-[0.5px] mb-4 text-justify">
              {section.subtitle}
            </h2>
          )}
          
          {/* Paragraf */}
          <div className="space-y-6">
            {section.paragraphs.map((paragraph, paraIndex) => (
              <p 
                key={paraIndex} 
                className="text-gray-500 sfPro text-lg font-normal leading-[150%] tracking-[0.5px] text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;