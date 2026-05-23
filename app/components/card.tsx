import { UsuarioProp } from "./types";

export default function Card({ nombre, apellido, edad, profesion, ocupado }: UsuarioProp) {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800 p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 mx-auto">
            <div className="flex flex-col items-center">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-inner">
                    {nombre[0]}{apellido[0]}
                </div>
                
                <h2 className="text-xl font-bold text-gray-800">
                    {nombre} {apellido}
                </h2>
                
                <p className="text-blue-600 font-medium mb-2">{profesion}</p>
                
                <div className="w-full mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 text-left">
                    <p><strong>Edad:</strong> {edad} años</p>
                    <div className="flex items-center gap-2">
                        <strong>Estado:</strong>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${ocupado ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {ocupado ? 'Ocupado' : 'Disponible'}
                        </span>
                    </div>
                </div>
                
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors">
                    Ver Perfil
                </button>
            </div>
        </div>
    );
}
