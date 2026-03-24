"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OfertasPage() {
  const [ofertas, setOfertas] = useState([]);
  const [email, setEmail] = useState("");

  // 1. Cargar las ofertas desde la API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/juegos")
      .then((res) => res.json())
      .then((data) => {
        const soloOfertas = data.filter((j: any) => j.categoria === "Oferta");
        setOfertas(soloOfertas);
      });
  }, []);

  // 2. Añadir productos físicos al inventario
  const agregarAlInventario = async (id: number, nombre: string) => {
    const res = await fetch(
      `http://127.0.0.1:8000/inventario?juego_id=${id}&nombre=${nombre}`,
      {
        method: "POST",
      },
    );

    if (res.ok) {
      alert(
        `¡Éxito! El ${nombre} ha sido añadido a tu inventario de Inka Shop.`,
      );
    }
  };

  // 3. Función para la suscripción (la de 19€)
  const manejarSuscripcion = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `http://127.0.0.1:8000/suscribirse?email=${email}`,
      {
        method: "POST",
      },
    );
    if (res.ok) {
      alert("¡Suscrito con éxito! Pronto recibirás tu código de descuento.");
      setEmail("");
    }
  };

  return (
    <main className="p-12 bg-black min-h-screen text-white">
      <h2 className="text-5xl font-black mb-12 text-yellow-500 text-center tracking-tighter">
        ZONA DE OFERTAS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {ofertas.map((oferta: any) => (
          <div
            key={oferta.id}
            className="bg-slate-900 p-8 rounded-3xl border-2 border-yellow-500/30 flex flex-col justify-between shadow-2xl shadow-yellow-500/5"
          >
            <div>
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <Image
                  src={oferta.imagen_url}
                  alt={oferta.nombre}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-4xl font-black uppercase italic">
                {oferta.nombre}
              </h3>

              <div className="mt-4 flex items-center gap-6">
                <span className="text-5xl font-bold text-yellow-500">
                  {oferta.precio}€
                </span>
                {oferta.precio_anterior && (
                  <span className="text-2xl text-slate-500 line-through">
                    {oferta.precio_anterior}€
                  </span>
                )}
              </div>
            </div>

            <div className="mt-8">
              {oferta.nombre === "Super Oferta Gamer" ? (
                /* SUSCRIPCIÓN POR EMAIL */
                <form onSubmit={manejarSuscripcion} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Tu email para la oferta..."
                    required
                    className="w-full p-4 rounded-xl bg-black border border-slate-700 text-white focus:border-yellow-500 outline-none transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-yellow-500 py-4 rounded-xl font-black transition-all transform active:scale-95 shadow-lg shadow-yellow-900/20"
                  >
                    ¡SUSCRIBIRME AHORA!
                  </button>
                </form>
              ) : (
                /* BOTÓN DE COMPRA*/
                <button
                  onClick={() => agregarAlInventario(oferta.id, oferta.nombre)}
                  className="w-full bg-white text-black hover:bg-slate-200 py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-white/10"
                >
                  AÑADIR AL INVENTARIO
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
