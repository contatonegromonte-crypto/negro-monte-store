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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1280px] px-4 pt-3 md:px-6">
        <div className="flex items-center justify-between rounded-[20px] border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-white/5 p-2 text-white/90 md:hidden">
              <Menu size={18} />
            </button>
            <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-white/5 md:flex">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 3.5 4 9v10h16V9l-8-5.5Zm-6 7.5h12v8H6v-8Zm3 1v3h6v-3h-6Z"/>
              </svg>
            </div>
            <div className="text-[18px] font-medium text-white/80">
              <span className="opacity-80">lovable.dev/proje</span>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/90">+</button>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-sm font-medium text-white">43</span>
            </div>
            <button className="rounded-xl bg-white/5 p-2 text-white/90">⋮</button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-3 max-w-[1280px] px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 rounded-[18px] border border-white/10 bg-[#f2f2f2] px-4 py-3 text-zinc-900 md:px-6">
          <div className="flex items-center gap-3 text-[15px] font-medium text-zinc-700">
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 7.5h18M6 7.5V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5M5 7.5l1.4 10.5A2 2 0 0 0 8.4 20h7.2a2 2 0 0 0 2-1.5L19 7.5"/>
              </svg>
              <span>Entrega para todo o Brasil</span>
            </span>
          </div>

          <div className="hidden items-center gap-3 text-[15px] font-medium text-zinc-700 md:flex">
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 12.5 10 15.5 17 8.5"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>
              Compra 100% segura
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-[1280px] px-4 pb-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col leading-none">
            <span className="text-[44px] font-black tracking-[-0.08em] text-white md:text-[54px]">NEGRO MONTE</span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.55em] text-[#e4b867] md:text-[12px]">STORE</span>
          </div>

          <Link
            href="/carrinho"
            className="relative inline-flex items-center justify-center rounded-[16px] border border-[#d3d3d3] bg-[#f4f4f4] p-3 text-black shadow-sm"
            aria-label="Carrinho"
          >
            <ShoppingBag size={28} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#e4b867] text-xs font-black text-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-white/10 bg-[#111111] px-5 py-4 md:hidden">
          <Link href="/" className="block py-2 text-sm font-medium text-zinc-200">Home</Link>
          <Link href="/#colecoes" className="block py-2 text-sm font-medium text-zinc-200">Coleções</Link>
          <Link href="/#sobre" className="block py-2 text-sm font-medium text-zinc-200">Sobre</Link>
        </nav>
      )}
    </header>
  );
}
