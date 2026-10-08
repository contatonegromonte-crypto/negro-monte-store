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
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex flex-col">
          <div className="text-2xl font-black tracking-widest text-gray-900">
            NEGRO MONTE
          </div>
          <div className="text-xs tracking-[0.3em] text-orange-500 font-semibold">STORE</div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Home
          </Link>
          <Link href="/#colecoes" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Coleções
          </Link>
          <Link href="/#sobre" className="text-sm font-medium text-gray-700 transition hover:text-orange-500">
            Sobre
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link
            href="/carrinho"
            className="relative inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 font-semibold text-white transition hover:bg-gray-800"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-orange-100 bg-gray-50 px-5 py-4 md:hidden">
          <Link href="/" className="block py-2 text-sm font-medium text-gray-700">
            Home
          </Link>
          <Link href="/#colecoes" className="block py-2 text-sm font-medium text-gray-700">
            Coleções
          </Link>
          <Link href="/#sobre" className="block py-2 text-sm font-medium text-gray-700">
            Sobre
          </Link>
        </nav>
      )}
    </header>
  );
}
