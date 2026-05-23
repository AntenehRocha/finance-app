import Link from "next/link";
import { auth, signOut } from "@/app/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            FinTrack
          </h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/markets"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Explorar Mercados
          </Link>
          <Link
            href="/profile"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Mi Perfil
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <div className="mb-4">
            <p className="text-sm text-gray-400">Sesión iniciada como:</p>
            <p className="font-medium truncate">{session?.user?.name || session?.user?.email}</p>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-950">
        {children}
      </main>
    </div>
  );
}
