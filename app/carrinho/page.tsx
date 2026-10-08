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
      <main className="mx-auto max-w-7xl px-5 py-32 text-center">
        <ShoppingCart size={64} className="mx-auto mb-6 text-zinc-500" />
        <h1 className="text-4xl font-black text-white">Seu carrinho está vazio</h1>
        <p className="mt-4 text-zinc-400">Adicione produtos para começar sua compra</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e7b85f] px-8 py-4 font-bold text-black transition hover:bg-[#d39a2d]"
        >
          Continuar comprando
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <h1 className="text-4xl font-black text-white">Carrinho de compras</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-32 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/produto/${item.id}`} className="block text-lg font-bold text-white hover:text-[#e7b85f]">
                        {item.name}
                      </Link>
                      <p className="mt-2 text-[#e7b85f] font-semibold">R$ {item.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-zinc-500 transition hover:text-red-500"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-full p-2 text-zinc-300 hover:bg-white/10"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="min-w-8 text-center font-bold text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full p-2 text-zinc-300 hover:bg-white/10"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <span className="text-2xl font-black text-[#e7b85f]">
                      R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-8 h-fit sticky top-20">
          <h3 className="text-2xl font-black text-white">Resumo do pedido</h3>

          <div className="mt-8 space-y-4 border-b border-white/10 pb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span className="text-sm text-zinc-300">{item.name} x {item.quantity}</span>
                <span className="font-semibold text-white">
                  R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-4">
              <span className="font-bold text-white">Total</span>
              <span className="text-2xl font-black text-[#e7b85f]">
                R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#e7b85f] px-4 py-4 font-bold text-black transition hover:bg-[#d39a2d]"
          >
            Finalizar compra
          </Link>

          <Link
            href="/"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-bold text-white transition hover:bg-white/10 hover:border-[#e7b85f]/60"
          >
            Continuar comprando
          </Link>
        </aside>
      </div>
    </main>
  );
}
