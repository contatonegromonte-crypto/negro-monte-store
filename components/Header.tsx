'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/lib/store';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCartStore();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex flex-col">
          <div className="text-2xl font-black tracking-[0.22em] text-white">
            NEGRO MONTE
          </div>
          <div className="text-[10px] tracking-[0.35em] text-[#e7b85f] font-semibold">STORE</div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-zinc-200 transition hover:text-[#e7b85f]">Home</Link>
          <Link href="/#colecoes" className="text-sm font-medium text-zinc-200 transition hover:text-[#e7b85f]">Coleções</Link>
          <Link href="/#sobre" className="text-sm font-medium text-zinc-200 transition hover:text-[#e7b85f]">Sobre</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>

          <Link
            href="/carrinho"
            className="relative inline-flex items-center gap-2 rounded-full bg-[#e7b85f] px-4 py-2 font-semibold text-black transition hover:bg-[#d39a2d]"
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Carrinho</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff8a00] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-white/10 bg-[#161616] px-5 py-4 md:hidden">
          <Link href="/" className="block py-2 text-sm font-medium text-zinc-200">Home</Link>
          <Link href="/#colecoes" className="block py-2 text-sm font-medium text-zinc-200">Coleções</Link>
          <Link href="/#sobre" className="block py-2 text-sm font-medium text-zinc-200">Sobre</Link>
        </nav>
      )}
    </header>
  );
}
