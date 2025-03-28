const TableFromDjka = () => {
    const scheduleData = [
      { station: 'DJKA', departureTime: '05.06 WIB', arrivalTime: '19.01 WIB' },
      { station: 'Jakabaring', departureTime: '05.08 WIB', arrivalTime: '19.03 WIB' },
      { station: 'Polresta', departureTime: '05.12 WIB', arrivalTime: '19.07 WIB' },
      { station: 'Ampera', departureTime: '05.16 WIB', arrivalTime: '19.11 WIB' },
      { station: 'Cinde', departureTime: '05.20 WIB', arrivalTime: '19.15 WIB' },
      { station: 'Dishub', departureTime: '05.23 WIB', arrivalTime: '19.18 WIB' },
      { station: 'Bumi Sriwijaya', departureTime: '05.26 WIB', arrivalTime: '19.20 WIB' },
      { station: 'Garuda Dempo', departureTime: '05.30 WIB', arrivalTime: '19.25 WIB' },
      { station: 'RSUD', departureTime: '05.34 WIB', arrivalTime: '19.28 WIB' },
      { station: 'Punti Kayu', departureTime: '05.36 WIB', arrivalTime: '19.31 WIB' },
      { station: 'Demang', departureTime: '05.38 WIB', arrivalTime: '19.34 WIB' },
      { station: 'Asrama Haji', departureTime: '05.45 WIB', arrivalTime: '19.40 WIB' },
      { station: 'Bandara', departureTime: '05.55 WIB', arrivalTime: '19.50 WIB' },
    ];
  
    return (
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 border-b text-center">Stasiun</th>
              <th className="py-3 px-4 border-b text-center">Jam Keberangkatan Awal</th>
              <th className="py-3 px-4 border-b text-center">Jam Keberangkatan Akhir</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((schedule, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-3 px-4 border-b text-center">{schedule.station}</td>
                <td className="py-3 px-4 border-b text-center">{schedule.departureTime}</td>
                <td className="py-3 px-4 border-b text-center">{schedule.arrivalTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableFromDjka;