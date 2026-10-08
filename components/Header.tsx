import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-black tracking-[0.2em] text-yellow-400">
          NMS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-zinc-200 transition hover:text-yellow-400">Home</Link>
          <Link href="/#colecoes" className="text-sm text-zinc-200 transition hover:text-yellow-400">Coleções</Link>
          <Link href="/#destaques" className="text-sm text-zinc-200 transition hover:text-yellow-400">Destaques</Link>
          <Link href="/#sobre" className="text-sm text-zinc-200 transition hover:text-yellow-400">Sobre</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 p-2 md:inline-flex">
            <Menu size={18} />
          </button>
          <Link href="/carrinho" className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black transition hover:bg-yellow-400">
            <ShoppingBag size={18} />
            Carrinho
          </Link>
        </div>
      </div>
    </header>
  );
}
