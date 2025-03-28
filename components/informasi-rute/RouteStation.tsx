// components/informasi-rute/RouteStation.tsx
import Link from "next/link";

interface RouteStationProps {
  name: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const RouteStation = ({ name, isFirst = false, isLast = false }: RouteStationProps) => {
  return (
    <div className="flex items-start gap-6">
      {/* Station dot */}
      <div className="relative z-10 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" fill="white" stroke="#CF0000" strokeWidth="6"/>
        </svg>
      </div>

      {/* Station info */}
      <div className="flex flex-col py-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <Link href="#" className="text-[#008ED1] mt-1 hover:underline">
          Lihat lokasi map
        </Link>
      </div>
    </div>
  );
};

export default RouteStation;