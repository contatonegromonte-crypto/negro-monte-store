'use client';

import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useState, useEffect } from 'react';

export default function CarrinhoPage() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 50;
  const subtotal = total + shipping;

  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <h1 className="mb-10 text-4xl font-black text-white md:text-5xl">Seu carrinho</h1>

        {cart.length === 0 ? (
          <div className="rounded-[24px] border border-white/10 bg-white/5 py-20 text-center">
            <p className="text-lg text-zinc-300">Seu carrinho está vazio</p>
            <Link href="/" className="mt-6 inline-block rounded-full bg-[#e7b85f] px-6 py-3 font-bold text-black hover:bg-[#d39a2d]">
              Continuar comprando
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-[20px] border border-white/10 bg-[#1b1b1b] p-4 md:p-6">
                  <img src={item.image} alt={item.name} className="h-24 w-24 rounded-[14px] object-cover md:h-32 md:w-32" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white md:text-xl">{item.name}</h3>
                    <p className="mt-2 text-2xl font-black text-[#e7b85f]">
                      R$ {item.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="rounded-full bg-white/5 p-2 hover:bg-white/10"
                      >
                        <Minus size={16} className="text-zinc-300" />
                      </button>
                      <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full bg-white/5 p-2 hover:bg-white/10"
                      >
                        <Plus size={16} className="text-zinc-300" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto rounded-full bg-red-900/20 p-2 hover:bg-red-900/40"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#1b1b1b] p-6 h-fit sticky top-20">
              <h2 className="text-xl font-bold text-white">Resumo</h2>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-zinc-300">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Frete</span>
                  <span className={shipping === 0 ? 'text-[#1bb570]' : ''}>
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between text-xl font-black text-white">
                  <span>Total</span>
                  <span>R$ {subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
              </div>

              <Link href="/checkout" className="mt-6 block w-full rounded-full bg-[#e7b85f] px-6 py-3 text-center font-bold text-black transition hover:bg-[#d39a2d]">
                Ir para checkout
              </Link>

              <Link href="/" className="mt-3 block w-full text-center rounded-full border border-white/10 px-6 py-3 font-medium text-zinc-200 hover:bg-white/5">
                Continuar comprando
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
