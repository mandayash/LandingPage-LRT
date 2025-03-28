// components/beli-tiket/PurchaseGuide.tsx
import CashMethod from './CashMethod';
import EMoneyMethod from './EMoneyMethod';

const PurchaseGuide = () => {
  return (
    <div className="mb-10">
      {/* Cash Method Section */}
      <CashMethod />
      
      {/* E-Money Method Section */}
      <EMoneyMethod />
    </div>
  );
};

export default PurchaseGuide;