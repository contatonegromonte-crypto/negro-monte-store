'use client';

import Link from 'next/link';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { ArrowLeft, Star, Truck, ShieldCheck } from 'lucide-react';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-[#0b0b0b] py-12">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="text-zinc-400">Produto não encontrado</p>
          <Link href="/" className="mt-4 inline-flex items-center gap-2 text-[#e7b85f] hover:text-white">
            <ArrowLeft size={18} />
            Voltar para home
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-5 py-8">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-[#e7b85f] hover:text-white transition">
          <ArrowLeft size={18} />
          Voltar
        </Link>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-2xl border border-white/10 bg-[#1b1b1b] p-4 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-[400px] w-full rounded-lg object-cover md:h-[600px]"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e7b85f]">
                {product.category}
              </span>
              <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">{product.name}</h1>
              <div className="mt-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-[#e7b85f] text-[#e7b85f]" />
                <span className="text-sm text-zinc-300">{product.rating} • 128 avaliações</span>
              </div>
            </div>

            <p className="text-lg leading-8 text-zinc-300">{product.description}</p>

            <div className="rounded-2xl border border-white/10 bg-[#1b1b1b] p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-black text-white">
                  R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-zinc-500 line-through">
                    R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </span>
                )}
              </div>
              {product.discount && (
                <p className="mt-3 text-sm text-[#1bb570]">
                  Você economiza R$ {((product.oldPrice || 0) - product.price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-white">Quantidade:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 transition"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full rounded-full px-6 py-4 text-lg font-bold transition ${
                isAdded
                  ? 'bg-[#1bb570] text-white'
                  : 'bg-[#e7b85f] text-black hover:bg-[#d39a2d]'
              }`}
            >
              {isAdded ? '✓ Adicionado ao carrinho' : 'Adicionar ao carrinho'}
            </button>

            <div className="space-y-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Truck className="h-5 w-5 text-[#e7b85f]" />
                <span>Entrega para todo o Brasil em até 15 dias úteis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <ShieldCheck className="h-5 w-5 text-[#e7b85f]" />
                <span>Compra 100% segura e protegida</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-black text-white">Produtos relacionados</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/produto/${p.id}`}
                  className="group rounded-2xl border border-white/10 bg-[#1b1b1b] overflow-hidden transition hover:border-[#e7b85f]/50"
                >
                  <div className="h-48 overflow-hidden bg-zinc-900">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-white group-hover:text-[#e7b85f]">{p.name}</p>
                    <p className="mt-2 text-lg font-black text-white">
                      R$ {p.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
