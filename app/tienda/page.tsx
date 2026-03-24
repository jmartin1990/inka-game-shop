"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TiendaPage() {
  const [juegos, setJuegos] = useState([]);

  // 1. Cargar juegos desde la API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/juegos")
      .then((res) => res.json())
      .then((data) => {
        // Solo mostramos los que NO son ofertas aquí
        const catalogo = data.filter((j: any) => j.categoria !== "Oferta");
        setJuegos(catalogo);
      });
  }, []);

  // 2. Función que se ejecuta al hacer CLIC en el botón
  const agregarAlInventario = async (id: number, nombre: string) => {
    const res = await fetch(
      `http://127.0.0.1:8000/inventario?juego_id=${id}&nombre=${nombre}`,
      {
        method: "POST",
      },
    );

    if (res.ok) {
      alert(`¡Genial! ${nombre} ha sido añadido a tu inventario.`);
    }
  };

  return (
    <main className="p-12 bg-black min-h-screen">
      <h2 className="text-4xl font-bold text-white mb-10 border-l-4 border-purple-500 pl-4">
        Catálogo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {juegos.map((juego: any) => (
          <div
            key={juego.id}
            className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl hover:scale-105 transition-transform"
          >
            <div className="relative h-48 rounded-xl mb-4 overflow-hidden bg-black/40">
              <Image
                src={juego.imagen_url}
                alt={juego.nombre}
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="text-2xl font-black">{juego.nombre}</h3>
            <p className="text-xl font-mono mt-2 text-purple-400">
              {juego.precio}€
            </p>

            {/* Añadimos el onClick */}
            <button
              onClick={() => agregarAlInventario(juego.id, juego.nombre)}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-500 py-3 rounded-xl font-bold text-white transition-all active:scale-95"
            >
              Añadir al Inventario
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
