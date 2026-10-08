'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 50;
  const finalTotal = total + shipping;

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setCheckoutStep('success');
    setIsProcessing(false);
  };

  if (checkoutStep === 'success') {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-[#0b0b0b] py-16">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-2xl border border-white/10 bg-[#1b1b1b] p-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1bb570]">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-black text-white">Pedido confirmado!</h1>
            <p className="mt-4 text-zinc-300">
              Obrigado por sua compra. Você receberá um e-mail de confirmação em breve.
            </p>
            <p className="mt-2 text-sm text-[#e7b85f]">
              Seu pedido será entregue em até 15 dias úteis.
            </p>
            <button
              onClick={() => {
                setCheckoutStep('cart');
                clearCart();
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e7b85f] px-7 py-3 font-bold text-black transition hover:bg-[#d39a2d]"
            >
              <ArrowLeft size={18} />
              Voltar para home
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (checkoutStep === 'checkout') {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-[#0b0b0b] py-16">
        <div className="mx-auto max-w-4xl px-5">
          <button
            onClick={() => setCheckoutStep('cart')}
            className="mb-6 inline-flex items-center gap-2 text-[#e7b85f] hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>

          <div className="grid gap-8 md:grid-cols-2">
            <form onSubmit={handleCheckoutSubmit} className="space-y-5">
              <h2 className="text-2xl font-black text-white">Dados de entrega</h2>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Nome completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">Endereço</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                  placeholder="Rua, número"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">Cidade</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                    placeholder="São Paulo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">Estado</label>
                  <input
                    type="text"
                    required
                    maxLength={2}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                    placeholder="SP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">CEP</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-[#e7b85f] focus:outline-none"
                    placeholder="01234-567"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full rounded-full bg-[#e7b85f] px-6 py-4 font-bold text-black transition hover:bg-[#d39a2d] disabled:opacity-50"
              >
                {isProcessing ? 'Processando...' : 'Confirmar pedido'}
              </button>
            </form>

            <div className="h-fit rounded-2xl border border-white/10 bg-[#1b1b1b] p-6">
              <h3 className="font-black text-white">Resumo do pedido</h3>
              <div className="mt-6 space-y-3 border-b border-white/10 pb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-zinc-300">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-white font-semibold">
                      R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between text-zinc-300">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Frete</span>
                  <span className={shipping === 0 ? 'text-[#1bb570]' : ''}>
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3 text-lg font-black text-white">
                  <span>Total</span>
                  <span className="text-[#e7b85f]">R$ {finalTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#0b0b0b] py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-center gap-3">
          <ShoppingBag size={32} className="text-[#e7b85f]" />
          <h1 className="text-3xl font-black text-white">Seu carrinho</h1>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#1b1b1b] py-16 text-center">
            <ShoppingBag size={48} className="mx-auto mb-4 text-zinc-600" />
            <p className="text-zinc-300">Seu carrinho está vazio</p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e7b85f] px-6 py-3 font-bold text-black hover:bg-[#d39a2d]"
            >
              <ArrowLeft size={18} />
              Continuar comprando
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-2xl border border-white/10 bg-[#1b1b1b] p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-zinc-300">R$ {item.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <p className="font-bold text-white">
                      R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl border border-white/10 bg-[#1b1b1b] p-6">
              <h3 className="font-black text-white">Resumo</h3>
              <div className="mt-6 space-y-3 border-b border-white/10 pb-6">
                <div className="flex justify-between text-sm text-zinc-300">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
                <div className={`flex justify-between text-sm ${
                  shipping === 0 ? 'text-[#1bb570]' : 'text-zinc-300'
                }`}>
                  <span>Frete</span>
                  <span>{shipping === 0 ? 'Grátis' : `R$ ${shipping}`}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between text-lg font-black">
                <span className="text-white">Total</span>
                <span className="text-[#e7b85f]">R$ {finalTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
              </div>
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="mt-6 w-full rounded-full bg-[#e7b85f] px-6 py-3 font-bold text-black transition hover:bg-[#d39a2d]"
              >
                Ir para checkout
              </button>
              <Link
                href="/"
                className="mt-3 block w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Continuar comprando
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
