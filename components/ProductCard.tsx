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
    <div className="group overflow-hidden rounded-[20px] border border-white/10 bg-[#1c1c1c] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#e4b867]/60">
      <div className="relative h-[280px] overflow-hidden bg-zinc-900">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {product.discount && (
          <span className="absolute left-4 top-4 rounded-full bg-[#e4b867] px-3 py-1 text-xs font-black text-black">-{product.discount}%</span>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#e4b867] font-semibold">{product.category}</span>
          <span className="text-sm text-zinc-300">★ {product.rating}</span>
        </div>

        <Link href={`/produto/${product.id}`} className="block text-xl font-semibold text-white hover:text-[#e4b867]">
          {product.name}
        </Link>

        <p className="text-sm text-zinc-300 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-3">
          <span className="text-[28px] font-black text-white">R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
          {product.oldPrice && (
            <span className="text-sm text-zinc-500 line-through">R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full rounded-full px-4 py-3 font-semibold transition ${
            isAdded ? 'bg-[#1bb570] text-white' : 'bg-[#e4b867] text-black hover:bg-[#d89f2f]'
          }`}
        >
          {isAdded ? '✓ Adicionado' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </div>
  );
}
