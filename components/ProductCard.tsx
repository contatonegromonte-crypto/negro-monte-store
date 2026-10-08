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
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.discount && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold">
            {product.category}
          </span>
          <span className="text-sm font-semibold text-gray-600">★ {product.rating}</span>
        </div>

        <Link href={`/produto/${product.id}`} className="block font-semibold text-gray-900 hover:text-orange-600">
          {product.name}
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full rounded-lg px-4 py-2 font-semibold transition ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {isAdded ? '✓ Adicionado' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </div>
  );
}
