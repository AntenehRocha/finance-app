import { auth } from "@/app/lib/auth";
import Card from "@/app/components/card";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Mi Perfil</h1>
        <p className="text-gray-400 mt-2">Gestiona tu información personal.</p>
      </div>

      <div className="mt-8">
        {session?.user ? (
          <Card
            nombre={session.user.name?.split(" ")[0] || "Usuario"}
            apellido={session.user.name?.split(" ")[1] || ""}
            edad={25}
            profesion="Inversor"
            ocupado={false}
          />
        ) : null}
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 max-w-2xl mt-8">
        <h3 className="text-xl font-bold mb-4">Detalles de la cuenta</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-gray-400">ID de Usuario:</span>
            <span>{session?.user?.id}</span>
          </li>
          <li className="flex justify-between border-b border-gray-700 pb-2">
            <span className="font-semibold text-gray-400">Correo electrónico:</span>
            <span>{session?.user?.email}</span>
          </li>
          <li className="flex justify-between pb-2">
            <span className="font-semibold text-gray-400">Estado de cuenta:</span>
            <span className="text-green-500 font-bold">Activa</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
