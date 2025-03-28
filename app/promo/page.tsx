import PromoGrid from "@/components/promo/PromoGrid";
import EventGrid from "@/components/promo/EventGrid";

export default function PromoPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Promo Harian Section */}
        <PromoGrid />
        
        {/* Events Section */}
        <EventGrid />
      </div>
    </main>
  );
}