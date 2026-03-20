import Image from "next/image";

export default function Page() {
  const juegos = [
    {
      id: 1,
      nombre: "Zelda: Ocarina",
      precio: "45€",
      imagen: "/tienda/zelda-ocarina.png",
    },
    {
      id: 2,
      nombre: "Mario Kart World",
      precio: "80€",
      imagen: "/tienda/mario-kart-world.png",
    },
    {
      id: 3,
      nombre: "Metroid Prime",
      precio: "50€",
      imagen: "/tienda/metroid-prime.png",
    },
    {
      id: 4,
      nombre: "Nintendo Switch 2",
      precio: "470€",
      imagen: "/tienda/nintendo-switch-2.png",
    },
  ];

  return (
    <main className="p-12">
      <h2 className="text-4xl font-bold text-white mb-10 border-l-4 border-purple-500 pl-4">
        Catálogo Retro
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {juegos.map((juego) => (
          <div
            key={juego.id}
            className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="relative h-48 rounded-xl mb-4 overflow-hidden bg-black/40">
              <Image
                src={juego.imagen}
                alt={juego.nombre}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-contain p-2 bg-slate-950"
                priority={juego.id === 1}
              />
            </div>
            <h3 className="text-2xl font-black">{juego.nombre}</h3>
            <p className="text-xl font-mono mt-2">{juego.precio}</p>
            <button className="mt-4 w-full bg-purple-600/20 hover:bg-purple-600/40 py-2 rounded-lg font-bold text-purple-100 transition-colors text-sm">
              Añadir al Inventario
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
