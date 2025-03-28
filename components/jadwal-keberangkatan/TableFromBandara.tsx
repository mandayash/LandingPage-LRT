const TableFromBandara = () => {
    const scheduleData = [
      { station: 'Bandara', departureTime: '06.00 WIB', arrivalTime: '19.55 WIB' },
      { station: 'Asrama Haji', departureTime: '06.08 WIB', arrivalTime: '20.04 WIB' },
      { station: 'Punti Kayu', departureTime: '06.15 WIB', arrivalTime: '20.10 WIB' },
      { station: 'RSUD', departureTime: '06.18 WIB', arrivalTime: '20.13 WIB' },
      { station: 'Garuda Dempo', departureTime: '06.21 WIB', arrivalTime: '20.16 WIB' },
      { station: 'Demang', departureTime: '06.24 WIB', arrivalTime: '20.19 WIB' },
      { station: 'Bumi Sriwijaya', departureTime: '06.28 WIB', arrivalTime: '20.23 WIB' },
      { station: 'Dishub', departureTime: '06.31 WIB', arrivalTime: '20.26 WIB' },
      { station: 'Cinde', departureTime: '06.34 WIB', arrivalTime: '20.28 WIB' },
      { station: 'Ampera', departureTime: '06.36 WIB', arrivalTime: '20.31 WIB' },
      { station: 'Polresta', departureTime: '06.41 WIB', arrivalTime: '20.36 WIB' },
      { station: 'Jakabaring', departureTime: '06.46 WIB', arrivalTime: '20.41 WIB' },
      { station: 'DJKA', departureTime: '06.48 WIB', arrivalTime: '20.43 WIB' },
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
  
  export default TableFromBandara;