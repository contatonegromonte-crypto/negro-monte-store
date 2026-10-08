'use client';

import Link from 'link';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { ArrowLeft, Star, Truck, ShieldCheck } from 'lucide-react';

export default function ProdutoPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] pb-20">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <div className="text-center">
            <p className="text-xl text-zinc-300">Produto não encontrado</p>
          </div>
        </div>
      </main>
    );
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

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#1b1b1b] overflow-hidden">
            <img src={product.image} alt={product.name} className="h-96 w-full object-cover md:h-[600px]" />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-[#e7b85f] font-semibold">{product.category}</span>
              <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">{product.name}</h1>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < Math.round(product.rating) ? 'fill-[#e7b85f] text-[#e7b85f]' : 'text-zinc-600'} />
                  ))}
                </div>
                <span className="text-zinc-300 ml-2">{product.rating} ({Math.floor(Math.random() * 500) + 20} avaliações)</span>
              </div>
            </div>

            <div>
              <p className="text-zinc-300 text-lg leading-8">{product.description}</p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-[#e7b85f]" />
                <span className="text-zinc-200 font-medium">Frete grátis para compras acima de R$ 500</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#e7b85f]" />
                <span className="text-zinc-200 font-medium">Compra 100% segura e protegida</span>
              </div>
            </div>

            <div className="border-y border-white/10 py-6">
              <p className="text-sm text-zinc-400 mb-3">Preço</p>
              <div className="flex items-center gap-3">
                <span className="text-5xl font-black text-[#e7b85f]">
                  R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </span>
                {product.oldPrice && (
                  <span className="text-2xl text-zinc-500 line-through">
                    R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </span>
                )}
              </div>
              {product.discount && (
                <p className="mt-3 text-sm text-[#1bb570] font-bold">Economize R$ {((product.oldPrice || product.price) - product.price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ({product.discount}% OFF)</p>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Quantidade</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-xl font-bold text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full rounded-full px-6 py-4 text-lg font-bold transition ${
                  isAdded ? 'bg-[#1bb570] text-white' : 'bg-[#e7b85f] text-black hover:bg-[#d39a2d]'
                }`}
              >
                {isAdded ? '✓ Adicionado ao carrinho' : 'Adicionar ao carrinho'}
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-black text-white mb-8">Produtos relacionados</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/produto/${p.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-56 overflow-hidden rounded-[20px] bg-zinc-900 mb-4">
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
                    </div>
                    <h3 className="font-bold text-white group-hover:text-[#e7b85f]">{p.name}</h3>
                    <p className="text-[#e7b85f] font-bold mt-2">R$ {p.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
