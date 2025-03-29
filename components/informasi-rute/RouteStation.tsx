interface RouteStationProps {
  id: number;
  name: string;
  isFirst?: boolean;
  isLast?: boolean;
  isActive?: boolean;
  onSelect: (id: number) => void;
}

const RouteStation = ({ id, name, isFirst = false, isLast = false, isActive = false, onSelect }: RouteStationProps) => {
  return (
    <div className={`flex items-start gap-6 relative ${isActive ? 'bg-gray-100 p-2 rounded-lg -mx-2' : ''}`}>
      {/* Station dot and line */}
      <div className="flex flex-col items-center relative">
        {/* Vertical line that connects dots */}
        {!isFirst && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 w-1 bg-gray-300 h-12"></div>
        )}
        
        {/* Station dot */}
        <div className="relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle 
              cx="12" cy="12" r="9" 
              fill={isActive ? "#CF0000" : "white"} 
              stroke="#CF0000" 
              strokeWidth={isActive ? "3" : "6"}
            />
          </svg>
        </div>
        
        {/* Line*/}
        {!isLast && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-24"></div>
        )}
      </div>

      {/* Station info */}
      <div className="flex flex-col justify-start">
        <h3 className={`text-lg font-medium mb-1 ${isActive ? 'text-primary' : ''}`}>{name}</h3>
        <button 
          onClick={() => onSelect(id)} 
          className="text-[#008ED1] text-left text-sm font-semibold hover:underline p-0 w-full"
        >
          Lihat lokasi map
        </button>
      </div>
    </div>
  );
};

export default RouteStation;