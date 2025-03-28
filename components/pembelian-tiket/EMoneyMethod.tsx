// components/beli-tiket/EMoneyMethod.tsx
const EMoneyMethod = () => {
    const steps = [
      "Membeli Kartu Uang Elektronik (KUE), dapat dilakukan di bank yang bekerjasama dengan PT Kereta Api Indonesia (Persero), seperti Flazz (Bank BCA), TapCash (Bank BNI), BRIZZI (Bank BRI), e-Money (Bank Mandiri), dan BSB Cash (Bank Sumsel Babel) atau di beberapa stasiun LRT Palembang.",
      "Setelah membeli kartu dan mengisi cukup saldo, Anda harus mengaktivasi kartu tersebut di loket stasiun–stasiun LRT supaya bisa terbaca di sistem gate. Untuk naik kereta, Anda tinggal menempelkan kartu pada mesin tiket dan memperoleh barcode. Anda tak perlu menentukan stasiun tujuan seperti halnya tiket tunai."
    ];
  
    return (
      <div className="mb-8">
        {/* Card judul */}
        <div className="bg-gray-200 rounded-lg p-3 mb-4">
          <h3 className="text-gray-500 sfPro text-lg font-medium leading-[150%] tracking-[0.5px]">
            Metode Pembelian Menggunakan E-Money
          </h3>
        </div>
  
        {/* Langkah-langkah */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 font-medium text-gray-500 mt-0.5">{index + 1}.</span>
              <p className="text-gray-500 sfPro text-base font-medium leading-[150%] tracking-[0.5px]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default EMoneyMethod;