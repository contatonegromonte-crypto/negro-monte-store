'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { Heart, Truck, Lock, RotateCcw } from 'lucide-react';

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === Number(params.id));
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <Link href="/" className="mb-8 inline-flex text-[#e7b85f] font-semibold hover:text-[#d39a2d]">
        ← Voltar
      </Link>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="h-[550px] w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#e7b85f] font-semibold">
                {product.category}
              </p>
              <h1 className="mt-3 text-4xl font-black text-white">{product.name}</h1>
            </div>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-[#e7b85f]/60 hover:bg-white/10"
            >
              <Heart size={24} className={isFavorited ? 'fill-[#e7b85f] text-[#e7b85f]' : 'text-zinc-400'} />
            </button>
          </div>

          <p className="mt-6 text-lg text-zinc-300">{product.description}</p>

          <div className="mt-8 flex items-end gap-6">
            <div>
              <p className="text-5xl font-black text-[#e7b85f]">R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
              {product.oldPrice && (
                <p className="text-lg text-zinc-500 line-through">
                  R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </p>
              )}
            </div>
            {product.discount && (
              <div className="rounded-xl bg-[#e7b85f]/20 border border-[#e7b85f]/50 px-4 py-2">
                <p className="text-lg font-black text-[#e7b85f]">-{product.discount}%</p>
              </div>
            )}
          </div>

          <div className="mt-10 space-y-5">
            <div>
              <label className="block text-sm font-bold text-white mb-3">Quantidade</label>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 text-zinc-300 hover:text-white"
                >
                  −
                </button>
                <span className="min-w-12 text-center font-bold text-white text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 text-zinc-300 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full rounded-xl px-6 py-4 font-bold text-lg transition ${
                isAdded
                  ? 'bg-[#1bb570] text-white'
                  : 'bg-[#e7b85f] text-black hover:bg-[#d39a2d]'
              }`}
            >
              {isAdded ? '✓ Adicionado ao carrinho' : 'Adicionar ao carrinho'}
            </button>

            <Link
              href="/checkout"
              className="block rounded-xl border-2 border-white/10 bg-transparent px-6 py-4 font-bold text-center text-white transition hover:border-[#e7b85f]/60 hover:bg-white/5"
            >
              Comprar agora
            </Link>
          </div>

          <div className="mt-12 space-y-5 border-t border-white/10 pt-10">
            <div className="flex items-start gap-4">
              <Truck className="h-6 w-6 text-[#e7b85f] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white">Entrega rápida e segura</p>
                <p className="text-sm text-zinc-400">Envio em até 15 dias úteis para todo o Brasil</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-[#e7b85f] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white">Compra 100% segura</p>
                <p className="text-sm text-zinc-400">Sua privacidade e dados estão protegidos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <RotateCcw className="h-6 w-6 text-[#e7b85f] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white">Devolução fácil</p>
                <p className="text-sm text-zinc-400">30 dias de garantia de devolução</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
