// app/promo/[id]/page.tsx
import { notFound } from 'next/navigation';
import PromoDetail from '@/components/promo/PromoDetail';

// Data dummy untuk promo dan event
const promoData = [
  {
    id: '1',
    title: 'LRT SUGAR RUSH!',
    description: `Buat perjalanan pulangmu lebih manis dengan promo spesial dari Ponut Donat Kentang! 🍩✨ 
Dapatkan 6 donat lembut bertabur gula halus hanya dengan Rp48K dari harga normal Rp58K. Promo ini berlaku setiap hari mulai pukul 19.00 hingga closing.
Nikmati kelembutan donat kentang yang fresh dan lezat, cocok untuk teman perjalanan atau camilan santai di rumah! 
Jangan sampai kelewatan, promo ini hanya berlaku untuk take away dan tidak dapat digabung dengan promo lainnya.
Yuk, mampir ke Ponut sebelum pulang dan rasakan manisnya perjalanan dengan LRT! 🚆💛 
#SugarRushPromo #PonutDonatKentang #LRTPalembang`,
    images: ['/images/promo4.png', '/images/promo3.png'],
    hashtags: ['SugarRushPromo', 'PonutDonatKentang', 'LRTPalembang'],
    type: 'promo'
  },
  {
    id: '2',
    title: 'Dough Lab',
    description: `Nikmati kelezatan cookies premium dari Dough Lab dengan promo spesial Buy 1 Get 1! 🍪✨
Promo berlaku untuk semua varian cookies, termasuk Chocolate Chip, Double Chocolate, dan Matcha Cookies.
Promo berlaku setiap hari Selasa-Kamis dari jam 10.00 hingga 17.00.
Yuk, manjakan lidahmu dengan kelezatan cookies yang lembut di dalam dan renyah di luar, sempurna untuk teman perjalanan dengan LRT! 🚆🍪`,
    images: ['/images/promo1.png', '/images/promo2.png'],
    hashtags: ['DoughLabPromo', 'CookiesLover', 'LRTPalembang'],
    type: 'promo'
  },

];

interface PromoDetailPageProps {
  params: {
    id: string;
  };
}

export default function PromoDetailPage({ params }: PromoDetailPageProps) {
  const { id } = params;
  const promo = promoData.find(item => item.id === id);
  if (!promo) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <PromoDetail
          title={promo.title}
          description={promo.description}
          images={promo.images}
          hashtags={promo.hashtags}
        />
      </div>
    </main>
  );
}