'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { Minus, Plus, X, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
          <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
          <h1 className="text-3xl font-bold text-gray-900">Seu carrinho está vazio</h1>
          <p className="mt-4 text-gray-600">Adicione produtos para começar sua compra</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Continuar comprando
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <h1 className="text-4xl font-black text-gray-900">Carrinho de compras</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-bold text-gray-900">{item.name}</h2>
                      <p className="mt-1 text-sm text-gray-600">R$ {item.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-white"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="min-w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-white"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="font-bold text-orange-600">
                      R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-xl border border-gray-200 bg-white p-6 h-fit">
          <h3 className="text-2xl font-black text-gray-900">Resumo</h3>

          <div className="mt-6 space-y-3 border-b border-gray-200 pb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <span className="font-bold text-gray-900">Total</span>
            <span className="text-2xl font-black text-orange-600">
              R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Finalizar compra
          </Link>

          <Link
            href="/"
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-3 font-bold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50"
          >
            Continuar comprando
          </Link>
        </aside>
      </div>
    </main>
  );
}
