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
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <Link href="/" className="mb-6 inline-flex text-orange-600 font-semibold hover:text-orange-700">
        ← Voltar
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-[550px] w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold">
                {product.category}
              </p>
              <h1 className="mt-3 text-4xl font-black text-gray-900">{product.name}</h1>
            </div>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="rounded-full border border-gray-300 p-3 transition hover:border-orange-500 hover:bg-orange-50"
            >
              <Heart size={24} className={isFavorited ? 'fill-orange-500 text-orange-500' : 'text-gray-400'} />
            </button>
          </div>

          <p className="mt-6 text-gray-600">{product.description}</p>

          <div className="mt-8 flex items-end gap-4">
            <div>
              <p className="text-4xl font-black text-gray-900">R$ {product.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
              {product.oldPrice && (
                <p className="text-lg text-gray-400 line-through">
                  R$ {product.oldPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </p>
              )}
            </div>
            {product.discount && (
              <div className="rounded-lg bg-orange-100 px-3 py-1">
                <p className="text-lg font-black text-orange-600">-{product.discount}%</p>
              </div>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Quantidade
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="min-w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full rounded-lg px-6 py-4 font-bold text-lg transition ${
                isAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              {isAdded ? '✓ Adicionado ao carrinho' : 'Adicionar ao carrinho'}
            </button>

            <Link
              href="/checkout"
              className="block rounded-lg border-2 border-gray-300 px-6 py-4 font-bold text-center text-gray-900 transition hover:border-orange-500 hover:bg-orange-50"
            >
              Comprar agora
            </Link>
          </div>

          <div className="mt-10 space-y-4 border-t border-gray-200 pt-8">
            <div className="flex items-start gap-4">
              <Truck className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Entrega para todo o Brasil</p>
                <p className="text-sm text-gray-600">Envio rápido e seguro em até 15 dias úteis</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Compra 100% segura</p>
                <p className="text-sm text-gray-600">Sua privacidade está protegida</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <RotateCcw className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Devolvução fácil</p>
                <p className="text-sm text-gray-600">30 dias de garantia de devolução</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
