import MarketOverviewWidget from "@/app/components/MarketOverviewWidget";

export default function MarketsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Explorar Mercados</h1>
        <p className="text-gray-400 mt-2">Descubre nuevos activos y añádelos a tus favoritos.</p>
      </div>

      <div className="w-full bg-gray-900 p-2 rounded-2xl shadow-xl border border-gray-800">
        <MarketOverviewWidget />
      </div>
    </div>
  );
}
