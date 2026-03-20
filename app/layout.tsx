import { montserrat } from "./ui/fonts";
import "@/app/ui/global.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} antialiased bg-slate-950 text-white`}
      >
        {/* --- NAVEGACIÓN (Aparece en todas las páginas) --- */}
        <nav className="flex items-center justify-between p-6 border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter hover:text-purple-500 transition-colors"
          >
            INKA<span className="text-purple-600">GAMES</span>
          </Link>

          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-300">
            <Link href="/" className="hover:text-purple-500 transition-colors">
              Inicio
            </Link>
            <Link
              href="/tienda"
              className="hover:text-purple-500 transition-colors"
            >
              Tienda
            </Link>
            <Link
              href="/tienda/ofertas"
              className="text-red-500 hover:text-red-400 animate-pulse"
            >
              ¡Ofertas!
            </Link>
            <Link
              href="/nosotros"
              className="hover:text-purple-500 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-500 transition-all"
            >
              Contacto
            </Link>
          </div>
        </nav>

        {/* --- CONTENIDO DINÁMICO (Aquí se cargan las páginas) --- */}
        <main>{children}</main>

        {/* --- FOOTER --- */}
        <footer className="py-10 flex flex-col justify-center items-center gap-2 border-t border-slate-800 mt-20">
          <p className="text-slate-500 text-sm">
            © 2026 INKA GAME SHOP - Hecho por Juan Campos
          </p>
          <p className="text-xs text-slate-600 italic">
            Powered by Next.js & Vercel
          </p>
        </footer>
      </body>
    </html>
  );
}
