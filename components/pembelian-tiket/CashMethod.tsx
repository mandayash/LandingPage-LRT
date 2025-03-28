// components/beli-tiket/CashMethod.tsx
const CashMethod = () => {
    const steps = [
      "Datangi loket stasiun.",
      "Tanyakan stasiun terdekat dari lokasi yang ingin dituju. Jika sudah mengenal stasiun LRT, dapat sebutkan stasiun tujuan.",
      "Bayar tiket sesuai stasiun tujuan. Dari dan menuju stasiun non bandara harganya Rp 5.000 sementara ke bandara Rp 10.000.",
      "Jika punya kartu e-money yang ada saldonya bisa langsung melakukan tap di pintu masuk.",
      "Untuk yang pakai tiket manual, harus mengambil karcis yang diberikan oleh petugas.",
      "Tap karcis di pintu masuk. Tunggu kereta tiba.",
      "Simpan karcis hingga tiba di stasiun tujuan karena diperlukan saat akan keluar. Karcis hanya sekali pakai."
    ];
  
    return (
      <div className="mb-8">
        {/* Card judul */}
        <div className="bg-gray-200 rounded-lg p-3 mb-4">
          <h3 className="text-gray-500 sfPro text-lg font-medium leading-[150%] tracking-[0.5px]">
            Metode Pembelian Menggunakan Cash
          </h3>
        </div>
  
        {/* Langkah-langkah */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 font-medium text-gray-500">{index + 1}.</span>
              <p className="text-gray-500 sfPro text-base font-medium leading-[150%] tracking-[0.5px]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CashMethod;