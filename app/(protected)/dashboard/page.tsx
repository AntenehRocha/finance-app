import TradingChart from "@/app/components/TradingChart";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/app/lib/auth";

export default async function DashboardPage() {
  const session = await auth();
  
  // Aquí se podrían obtener los favoritos de la BD
  const favorites = await prisma.favoriteAsset.findMany({
    where: { userId: session?.user?.id as string }
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Bienvenido de nuevo, {session?.user?.name}</h1>
        <p className="text-gray-400 mt-2">Aquí tienes un resumen de tus finanzas favoritas.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <p className="text-gray-400">Aún no tienes activos favoritos. Ve a Explorar Mercados para agregar algunos.</p>
        </div>
      ) : (
        <div className="flex gap-4">
          {favorites.map(fav => (
            <div key={fav.id} className="bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
              {fav.symbol}
            </div>
          ))}
        </div>
      )}

      {/* Gráfico principal */}
      <div className="w-full max-w-5xl">
        <TradingChart />
      </div>
    </div>
  );
}
