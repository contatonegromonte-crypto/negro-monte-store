'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { createWhatsAppLink, generateWhatsAppMessage } from '@/lib/utils';

export default function CheckoutPage() {
  const { cart } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppCheckout = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '55XXX';
    const message = generateWhatsAppMessage(cart, total, formData);
    const link = createWhatsAppLink(whatsappNumber, message);
    window.open(link, '_blank');
  };

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Seu carrinho está vazio</h1>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Voltar às compras
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-4xl font-black text-gray-900">Checkout</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">Dados de entrega</h2>

          <form className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Telefone/WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(XX) XXXXX-XXXX"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Endereço completo
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Rua, número, complemento, cidade, estado"
                className="min-h-[120px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <button
              type="button"
              onClick={handleWhatsAppCheckout}
              className="w-full rounded-lg bg-green-500 px-6 py-4 font-bold text-white text-lg transition hover:bg-green-600"
            >
              ✓ Finalizar pelo WhatsApp
            </button>
          </form>
        </div>

        <aside className="rounded-xl border border-gray-200 bg-white p-6 h-fit">
          <h2 className="text-2xl font-bold text-gray-900">Resumo do pedido</h2>

          <div className="mt-6 space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name} x {item.quantity}</span>
                <span className="font-semibold text-gray-900">
                  R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-3">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-orange-600">
                R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </span>
            </div>
          </div>

          <Link
            href="/carrinho"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-3 font-bold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50"
          >
            Editar carrinho
          </Link>
        </aside>
      </div>
    </main>
  );
}
