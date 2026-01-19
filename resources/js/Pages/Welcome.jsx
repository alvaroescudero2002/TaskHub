import { useState } from 'react';

export default function Welcome() {
    const nombreUsuario = "Álvaro Escudero";
    
    const [tareas, setTareas] = useState([
        "Instalar Laravel", 
        "Configurar React", 
        "Aprender Tailwind"
    ]);

    const [contador, setContador] = useState(0);

    const añadirTarea = () => {
        if (contador < 10) {
            const nueva = "Nueva tarea de prueba " + (tareas.length + 1);
            setTareas([...tareas, nueva]);
            setContador(contador + 1);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-black text-indigo-600 uppercase">
                TaskHub de {nombreUsuario}
            </h1>

            <p className="mt-4 text-slate-600 font-medium">
                Contador: <span className="font-bold text-indigo-500">{contador}</span>
            </p>

            <div className="mt-8 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-slate-800">Tareas ({tareas.length}):</h2>
                
                <ul className="space-y-3">
                    {tareas.map((tarea, index) => (
                        <li key={index} className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                            {tarea}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10">
                <button 
                    onClick={añadirTarea}
                    className={`
                        ${contador >= 10 ? 'bg-red-500' : 'bg-indigo-500 hover:bg-indigo-600'} 
                        text-white px-6 py-2 rounded-lg shadow-md transition active:scale-95
                    `}
                >
                    {contador >= 10 ? '¡Lista Llena!' : 'Añadir Tarea Aleatoria'}
                </button>
            </div>
        </div>
    );
}