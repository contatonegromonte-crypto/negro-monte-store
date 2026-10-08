'use client';

import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export default function CartDrawer() {
  const { cart, isCartOpen, toggleCart, closeCart, updateQuantity, removeFromCart } = useCartStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 z-40 bg-black/60" onClick={closeCart} />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/10 bg-[#111111] p-6 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-2 text-xl font-bold">
            <ShoppingBag size={20} className="text-yellow-400" />
            Carrinho
          </div>
          <button onClick={toggleCart} className="rounded-full border border-white/10 p-2">
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 space-y-5 overflow-y-auto pb-20">
          {cart.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-zinc-400">
              Seu carrinho está vazio.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex gap-4">
                  <img src={item.image} alt={item.name} className="h-24 w-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-400">
                        <X size={14} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-white/10 bg-black/20">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-zinc-300">
                          <Minus size={14} />
                        </button>
                        <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-zinc-300">
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-semibold text-yellow-400">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#111111] p-6">
          <div className="mb-4 flex items-center justify-between text-zinc-300">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full rounded-full bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400">
            Finalizar compra
          </button>
        </div>
      </aside>
    </>
  );
}
