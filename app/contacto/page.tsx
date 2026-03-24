"use client";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviamos los datos a nuestra API de FastAPI
    const url = `http://127.0.0.1:8000/contacto?nombre=${formData.nombre}&email=${formData.email}&mensaje=${formData.mensaje}`;

    const res = await fetch(url, { method: "POST" });

    if (res.ok) {
      alert(
        "¡Mensaje enviado! El equipo de Inka Game Shop te contactará pronto.",
      );
      setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar formulario
    }
  };

  return (
    <main className="flex flex-col items-center p-12 text-white">
      <h2 className="text-5xl font-bold mb-8 text-purple-500">
        ¿Tienes dudas?
      </h2>

      <form
        onSubmit={enviarFormulario}
        className="w-full max-w-md space-y-4 bg-slate-900 p-8 rounded-3xl border border-slate-800"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Nombre de Usuario
          </label>
          <input
            type="text"
            required
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 outline-none text-white"
            placeholder="Gamer123"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tu Correo</label>
          <input
            type="email"
            required
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 outline-none text-white"
            placeholder="correo@ejemplo.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Mensaje para el Soporte
          </label>
          <textarea
            required
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 outline-none h-32 text-white"
            placeholder="Cuéntanos qué juego buscas..."
            value={formData.mensaje}
            onChange={(e) =>
              setFormData({ ...formData, mensaje: e.target.value })
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-purple-600 rounded-xl font-bold text-lg hover:bg-purple-500 shadow-lg shadow-purple-500/20 transition-all"
        >
          Enviar Mensaje
        </button>
      </form>
    </main>
  );
}
