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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#1d1d1d] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 md:hidden"
            >
              {mobileMenuOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
            </button>

            <Link href="/" className="flex flex-col leading-none">
              <div className="text-[18px] font-black tracking-[0.18em] text-white md:text-[28px]">
                NEGRO MONTE
              </div>
              <div className="mt-1 text-[9px] font-semibold tracking-[0.34em] text-[#e7b85f] md:text-[10px]">
                STORE
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            <Link href="/" className="text-sm font-medium text-zinc-200 transition hover:text-[#e7b85f]">Home</Link>
            <Link href="/#colecoes" className="text-sm font-medium text-zinc-200 transition hover:text-[#e7b85f]">Coleções</Link>
            <Link href="/#sobre" className="text-sm font-medium text-zinc-200 transition hover:text-[#e7b85f]">Sobre</Link>
          </nav>

          <Link
            href="/carrinho"
            className="relative inline-flex items-center justify-center rounded-full bg-[#e7b85f] p-3 text-black transition hover:bg-[#d39a2d]"
            aria-label="Carrinho"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff8a00] text-[10px] font-black text-white">
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
