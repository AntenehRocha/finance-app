import Link from "next/link";
import MarketOverviewWidget from "./components/MarketOverviewWidget";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header / Nav */}
      <header className="w-full py-6 px-10 flex justify-between items-center bg-gray-900 border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          FinTrack
        </h1>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white font-medium py-2 px-4 transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg shadow-blue-500/30"
          >
            Comenzar
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center p-10 gap-12">
        <section className="text-center max-w-3xl mt-10">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Controla tus finanzas y descubre <br />
            <span className="text-blue-500">nuevos mercados</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Únete a nuestra plataforma y accede a datos de mercado, gráficos avanzados y a una gestión inteligente de tu portafolio.
          </p>
          <Link
            href="/register"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-green-500/20"
          >
            Crea tu cuenta gratis
          </Link>
        </section>

        {/* Market Widget */}
        <section className="w-full max-w-5xl bg-gray-900 p-1 rounded-2xl shadow-2xl border border-gray-800">
          <div className="p-6 pb-2">
            <h3 className="text-2xl font-bold mb-2">Últimos movimientos</h3>
            <p className="text-gray-400 text-sm mb-4">Panorama general de los principales mercados globales.</p>
          </div>
          <MarketOverviewWidget />
        </section>
      </main>
    </div>
  );
}
