'use client';

import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b85f]/60">
      <div className="relative h-72 overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.discount && (
          <span className="absolute left-4 top-4 rounded-full bg-[#e7b85f] px-3 py-1 text-xs font-bold text-black">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#e7b85f] font-semibold">{product.category}</span>
          <span className="text-sm text-zinc-300">★ {product.rating}</span>
        </div>

        <Link href={`/produto/${product.id}`} className="block text-xl font-semibold text-white hover:text-[#e7b85f]">
          {product.name}
        </Link>

        <p className="text-sm text-zinc-300 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-white">R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
          {product.oldPrice && (
            <span className="text-sm text-zinc-500 line-through">
              R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full rounded-full px-4 py-3 font-semibold transition ${
            isAdded ? 'bg-[#1bb570] text-white' : 'bg-[#e7b85f] text-black hover:bg-[#d39a2d]'
          }`}
        >
          {isAdded ? '✓ Adicionado' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </div>
  );
}
