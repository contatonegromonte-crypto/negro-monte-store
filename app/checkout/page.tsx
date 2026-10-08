'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { createWhatsAppLink, generateWhatsAppMessage } from '@/lib/utils';
import { Check, AlertCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cart } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.address.trim()) newErrors.address = 'Endereço é obrigatório';
    return newErrors;
  };

  const handleWhatsAppCheckout = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '55XXX';
    const message = generateWhatsAppMessage(cart, total, formData);
    const link = createWhatsAppLink(whatsappNumber, message);
    window.open(link, '_blank');
  };

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-32 text-center">
        <h1 className="text-4xl font-black text-white">Seu carrinho está vazio</h1>
        <p className="mt-4 text-zinc-400">Adicione produtos antes de finalizar a compra</p>
        <Link href="/" className="mt-8 inline-flex rounded-xl bg-[#e7b85f] px-8 py-4 font-bold text-black transition hover:bg-[#d39a2d]">
          Voltar às compras
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-4xl font-black text-white">Finalizar pedido</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-white">Dados de entrega</h2>

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-white mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white outline-none placeholder:text-zinc-500 transition focus:border-[#e7b85f] focus:ring-1 focus:ring-[#e7b85f]/50`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white outline-none placeholder:text-zinc-500 transition focus:border-[#e7b85f] focus:ring-1 focus:ring-[#e7b85f]/50`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">Telefone/WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(XX) XXXXX-XXXX"
                className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white outline-none placeholder:text-zinc-500 transition focus:border-[#e7b85f] focus:ring-1 focus:ring-[#e7b85f]/50`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">Endereço completo</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Rua, número, complemento, cidade, estado"
                className={`min-h-[120px] w-full rounded-lg border ${errors.address ? 'border-red-500' : 'border-white/10'} bg-white/5 px-4 py-3 text-white outline-none placeholder:text-zinc-500 transition focus:border-[#e7b85f] focus:ring-1 focus:ring-[#e7b85f]/50`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={14} /> {errors.address}</p>}
            </div>

            <button
              type="button"
              onClick={handleWhatsAppCheckout}
              className="w-full rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white text-lg transition hover:bg-[#20BA5D] flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M20.52 3.48A11.68 11.68 0 0 0 12.05 0C5.54 0 .2 5.33.2 11.86c0 2.1.55 4.15 1.6 5.96L.08 24l6.4-1.68A11.87 11.87 0 0 0 12.05 24c6.51 0 11.85-5.33 11.85-11.86 0-3.17-1.23-6.15-3.38-8.66ZM12.05 21.6c-1.9 0-3.74-.52-5.35-1.49l-.38-.22-3.8 1 1.02-3.7-.25-.39A9.73 9.73 0 0 1 2.37 11.9 9.66 9.66 0 0 1 12.05 2.2a9.66 9.66 0 0 1 9.68 9.7 9.66 9.66 0 0 1-9.68 9.7Zm5.3-7.25c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.51-.07-.14-.67-1.62-.91-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.2 2.06 3.15 4.98 4.41.7.3 1.25.48 1.68.61.71.23 1.36.2 1.88.12.57-.09 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z"/>
              </svg>
              Finalizar pelo WhatsApp
            </button>
          </form>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-8 h-fit sticky top-20">
          <h2 className="text-2xl font-bold text-white">Resumo do pedido</h2>

          <div className="mt-8 space-y-3 border-b border-white/10 pb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-zinc-300">{item.name} x {item.quantity}</span>
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
            href="/carrinho"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-bold text-white transition hover:bg-white/10 hover:border-[#e7b85f]/60"
          >
            Editar carrinho
          </Link>
        </aside>
      </div>
    </main>
  );
}
