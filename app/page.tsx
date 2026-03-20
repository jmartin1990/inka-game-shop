import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image"; // Optimización de imágenes
import { lusitana } from "./ui/fonts"; // Uso de fuentes secundarias
import styles from "@/app/ui/home.module.css"; // CSS Modules

export default function Page() {
  const featuredGames = [
    {
      title: "Legend of Apu",
      genre: "Aventura",
      image: "/novedades/peru-game-1.png",
    },
    {
      title: "Super Inka Bros",
      genre: "Plataformas",
      image: "/novedades/peru-game-2.png",
    },
    {
      title: "Galactic Chasqui",
      genre: "Shooter",
      image: "/novedades/peru-game-3.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* SECCIÓN SUPERIOR: Mezcla de estilos */}
      <div className="flex grow flex-col gap-4 md:flex-row p-6 md:p-20">
        {/* Lado Izquierdo: Texto y Botones */}
        <div className="flex flex-col justify-center gap-6 rounded-3xl bg-slate-900 px-6 py-10 w-full max-w-xl md:w-2/5 md:px-20 border border-slate-800">
          {/* El triángulo hecho con CSS*/}
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-purple-500" />

          {/* Usamos la fuente Lusitana*/}
          <h1
            className={`${lusitana.className} text-4xl md:text-6xl font-bold tracking-tight whitespace-normal break-words`}
          >
            INKA<span className="text-purple-600">GAMES</span>
          </h1>

          <p className="text-lg text-slate-400 whitespace-pre-line break-words">
            Bienvenido a la mejor tienda de 2026. Aquí encontrarás
            <strong className="text-white block">
              LOS VIDEOJUEGOS MAS BUSCADOS
            </strong>
            ya sean retro o nueva generación.
          </p>

          <Link
            href="/tienda"
            className="flex items-center gap-5 self-start rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-purple-500 hover:scale-105"
          >
            <span>Explorar Tienda</span>{" "}
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>

          {/* Usamos un CSS Module para un elemento decorativo */}
          <div className={`${styles.shape} opacity-20`} />
        </div>

        {/* Lado Derecho: Imágenes Optimizadas */}
        <div className="flex items-center justify-center p-6 md:w-3/5">
          {/* El componente Image con lógica Responsive (Desktop/Mobile) */}
          <Image
            src="/hero-peru-videojuegos.png"
            width={1000}
            height={760}
            className="hidden md:block rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/10"
            alt="Captura de la tienda en escritorio"
          />
          <Image
            src="/hero-peru-videojuegos-mobile.png"
            width={560}
            height={620}
            className="block md:hidden rounded-2xl border border-purple-500/30"
            alt="Captura de la tienda en móvil"
          />
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Grid de Juegos*/}
      <div className="p-10 md:px-20 pb-20 bg-slate-950">
        <div className="flex items-center gap-3 mb-10">
          <SparklesIcon className="w-6 h-6 text-purple-400" />
          <h2 className="text-3xl font-bold">Novedades</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGames.map((game, i) => (
            <div
              key={i}
              className="group bg-slate-900 p-4 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-all"
            >
              <div className="h-40 rounded-2xl overflow-hidden mb-4 bg-slate-800">
                <Image
                  src={game.image}
                  width={400}
                  height={160}
                  className="object-cover w-full h-full"
                  alt={`${game.title} - ${game.genre}`}
                  priority={i === 0}
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                {game.title}
              </h3>
              <p className="text-slate-500 text-sm">{game.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
