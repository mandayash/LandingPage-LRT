// components/informasi-rute/RouteNotice.tsx
const RouteNotice = () => {
  return (
    <div className="space-y-8">
      {/* Peringatan Layanan */}
      <div className="border border-gray-300 rounded-xl p-4 flex flex-col justify-center items-start gap-3 w-full">
        <h3 className="text-xl font-bold">Peringatan Layanan LRT kereta</h3>
        <p className="text-gray-400 text-justify">
          Lihat semua pembatalan di LRT PALEMBANG (dari Stasiun Opi), termasuk info status real-time, keterlambatan kereta, perubahan rute, perubahan lokasi perhentian, dan perubahan layanan lainnya. Dapatkan tampilan peta real-time dari LRT PALEMBANG (Bandara) dan lacak kereta saat bergerak di peta.
        </p>
      </div>

      {/* Tarif Jalur */}
      <div className="border border-gray-300 rounded-xl p-4 flex flex-col justify-center items-start gap-3 w-full">
        <h3 className="text-xl font-bold">Tarif jalur LRT PALEMBANG kereta</h3>
        <p className="text-gray-400 text-justify">
          Harga LRT PALEMBANG (Bandara) dapat berubah berdasarkan beberapa faktor. Untuk informasi lebih lanjut tentang biaya tiket LRT, silahkan hubungi kami.
        </p>
      </div>
    </div>
  );
};

export default RouteNotice;