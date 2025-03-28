// app/beli-tiket/page.tsx
import TicketHeader from "@/components/pembelian-tiket/TicketHeader";
import PurchaseGuide from "@/components/pembelian-tiket/PurchaseGuide";
import RelatedArticles from "@/components/pembelian-tiket/RelatedArticles";

export default function BeliTiketPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <TicketHeader />
        
        {/* Purchase Guide Section */}
        <PurchaseGuide />
        
        {/* Related Articles Section */}
        <RelatedArticles />
      </div>
    </main>
  );
}