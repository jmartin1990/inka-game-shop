import Image from "next/image";

export default function Page() {
  return (
    <main className="p-8 bg-slate-950 min-h-screen">
      <div className="mx-auto w-full max-w-6xl">
        <div className="bg-red-600 text-white p-4 rounded-lg mb-8 inline-block animate-bounce font-bold">
          ¡OFERTAS FLASH DE FIN DE SEMANA!
        </div>
        <h2 className="text-4xl font-bold text-white mb-10">
          Zonas de Descuento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-3xl border-2 border-red-500/50 flex flex-col justify-between min-h-[520px]">
            <div className="relative h-48 mb-5 rounded-2xl overflow-hidden border border-red-400/30 bg-black/20">
              <Image
                src="/tienda/ofertas/nintendo-switch-2-box.png"
                alt="Pack Nintendo Switch 2"
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="text-3xl font-black text-white">Pack Nintendo</h3>
            <p className="text-slate-400 mt-2">Switch 2 + Mario Kart World</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-4xl font-bold text-red-500">490€</span>
              <span className="text-xl text-slate-500 line-through">590€</span>
            </div>
            <button className="mt-6 w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-bold transition-colors">
              ¡Lo quiero ya!
            </button>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border-2 border-yellow-500/50 flex flex-col justify-between min-h-[520px]">
            <div className="relative h-48 mb-5 rounded-2xl overflow-hidden border border-yellow-400/30 bg-black/20">
              <Image
                src="/tienda/ofertas/gaming-products-50-v2.png"
                alt="Gaming products 50% off"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl font-black text-white">
              Super Oferta Gamer
            </h3>
            <p className="text-slate-400 mt-2">50% OFF + envíos gratis</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-4xl font-bold text-yellow-500">
                19€/mes
              </span>
              <span className="text-xl text-slate-500 line-through">40€</span>
            </div>
            <button className="mt-6 w-full bg-yellow-600 hover:bg-yellow-500 text-white py-3 rounded-xl font-bold transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
