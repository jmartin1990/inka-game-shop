export default function Page() {
  return (
    <main className="flex flex-col items-center p-12 text-white">
      <h2 className="text-5xl font-bold mb-8 text-purple-500">
        ¿Tienes dudas?
      </h2>
      <form className="w-full max-w-md space-y-4 bg-slate-900 p-8 rounded-3xl border border-slate-800">
        <div>
          <label className="block text-sm font-medium mb-1">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 outline-none transition-colors"
            placeholder="Gamer123"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tu Correo</label>
          <input
            type="email"
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 outline-none"
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Mensaje para el Soporte
          </label>
          <textarea
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 outline-none h-32"
            placeholder="Cuéntanos qué juego buscas..."
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full py-4 bg-purple-600 rounded-xl font-bold text-lg hover:bg-purple-500 shadow-lg shadow-purple-500/20 transition-all"
        >
          Enviar Mensaje
        </button>
      </form>
    </main>
  );
}
