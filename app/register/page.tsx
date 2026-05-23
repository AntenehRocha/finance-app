"use client";

import { useActionState } from "react";
import { register } from "@/app/lib/actions";
import Link from "next/link";

export default function RegisterPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    register,
    undefined,
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Crear Cuenta
        </h1>
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              name="password"
              required
              minLength={6}
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm italic">{errorMessage}</p>
          )}
          <div className="mt-6">
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Registrando..." : "Registrarse"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-blue-400 hover:text-blue-300 text-sm">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
