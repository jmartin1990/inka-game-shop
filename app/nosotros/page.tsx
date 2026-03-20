import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-6 md:p-12 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-purple-500">
        Nuestra Historia
      </h2>

      <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-3xl overflow-hidden border border-purple-500/40 shadow-xl mb-8">
        <Image
          src="/nosotros/inka-gaming-peru.png"
          alt="Paisaje de Perú con videojuegos"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2IxYjJiMiIgLz48L3N2Zz4="
        />
      </div>

      <div className="max-w-3xl text-base md:text-lg text-slate-300 space-y-5 leading-relaxed">
        <p>
          En <strong className="text-white">Inka Game Shop</strong>, no solo
          vendemos juegos; preservamos leyendas. Nacimos en 2026 con la misión
          de conectar a los jugadores con los clásicos que definieron su
          infancia.
        </p>
        <p>
          Desde las tierras de los Incas hasta el mundo digital, seleccionamos
          cada título por su calidad y su impacto en la historia del gaming.
        </p>
        <div className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-2xl">
          <p className="italic font-mono">
            "El gaming es la forma de arte más inmersiva que existe."
          </p>
        </div>
      </div>
    </main>
  );
}
