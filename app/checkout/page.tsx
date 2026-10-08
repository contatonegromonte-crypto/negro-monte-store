'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle, Truck, Lock, Clock } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart } = useCartStore();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 50;
  const subtotal = total + shipping;

  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setOrderComplete(true);
    setIsProcessing(false);
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] pb-20">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <div className="rounded-[24px] border border-white/10 bg-white/5 py-20 text-center">
            <p className="text-lg text-zinc-300">Carrinho vazio</p>
          </div>
        </div>
      </main>
    );
  }

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center pb-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#1bb570]/20 mb-6">
            <CheckCircle className="h-10 w-10 text-[#1bb570]" />
          </div>
          <h1 className="text-4xl font-black text-white mb-4">Pedido confirmado!</h1>
          <p className="text-lg text-zinc-300 mb-8">Seu pedido foi processado com sucesso. Você receberá um e-mail de confirmação em breve.</p>
          
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <Truck className="h-6 w-6 text-[#e7b85f] mx-auto mb-2" />
              <p className="font-bold text-white">Em até 15 dias</p>
              <p className="text-sm text-zinc-400">Entrega para seu endereço</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <Lock className="h-6 w-6 text-[#e7b85f] mx-auto mb-2" />
              <p className="font-bold text-white">100% seguro</p>
              <p className="text-sm text-zinc-400">Transação criptografada</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <Clock className="h-6 w-6 text-[#e7b85f] mx-auto mb-2" />
              <p className="font-bold text-white">Rastreie seu pedido</p>
              <p className="text-sm text-zinc-400">Acompanhe em tempo real</p>
            </div>
          </div>

          <Link href="/" className="inline-block rounded-full bg-[#e7b85f] px-8 py-3 font-bold text-black hover:bg-[#d39a2d]">
            Voltar para loja
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <Link href="/carrinho" className="mb-10 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <h1 className="mb-10 text-4xl font-black text-white md:text-5xl">Checkout</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {/* Passo 1 */}
            <div className={`rounded-[24px] border transition ${
              step >= 1 ? 'border-[#e7b85f] bg-[#1b1b1b]' : 'border-white/10 bg-white/5'
            } p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                  step > 1 ? 'bg-[#1bb570] text-white' : 'bg-[#e7b85f] text-black'
                }`}>
                  {step > 1 ? '✓' : '1'}
                </div>
                <h2 className="text-xl font-bold text-white">Dados de entrega</h2>
              </div>

              {step >= 1 && (
                <div className="space-y-4">
                  <input type="text" placeholder="Nome completo" className="w-full rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="email" placeholder="E-mail" className="rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                    <input type="tel" placeholder="(11) 99999-9999" className="rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                  </div>
                  <input type="text" placeholder="CEP" className="w-full rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                  <input type="text" placeholder="Rua e número" className="w-full rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="text" placeholder="Complemento" className="rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                    <input type="text" placeholder="Cidade" className="rounded-[14px] bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e7b85f]" />
                  </div>

                  <button onClick={() => setStep(2)} className="mt-6 w-full rounded-full bg-[#e7b85f] px-6 py-3 font-bold text-black hover:bg-[#d39a2d]">
                    Continuar
                  </button>
                </div>
              )}
            </div>

            {/* Passo 2 */}
            <div className={`rounded-[24px] border transition ${
              step >= 2 ? 'border-[#e7b85f] bg-[#1b1b1b]' : 'border-white/10 bg-white/5'
            } p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                  step > 2 ? 'bg-[#1bb570] text-white' : 'bg-[#e7b85f] text-black'
                }`}>
                  {step > 2 ? '✓' : '2'}
                </div>
                <h2 className="text-xl font-bold text-white">Métodos de pagamento</h2>
              </div>

              {step >= 2 && (
                <div className="space-y-4">
                  <div className="rounded-[16px] border border-[#e7b85f] bg-white/5 p-4 cursor-pointer hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                      <div className="flex-1">
                        <p className="font-bold text-white">Cartão de crédito</p>
                        <p className="text-sm text-zinc-400">Parcelado em até 12x</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/5 p-4 cursor-pointer hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <div className="flex-1">
                        <p className="font-bold text-white">Boleto bancário</p>
                        <p className="text-sm text-zinc-400">Vencimento em 3 dias úteis</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/5 p-4 cursor-pointer hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <div className="flex-1">
                        <p className="font-bold text-white">PIX</p>
                        <p className="text-sm text-zinc-400">Pagamento instantâneo</p>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => setStep(3)} className="mt-6 w-full rounded-full bg-[#e7b85f] px-6 py-3 font-bold text-black hover:bg-[#d39a2d]">
                    Continuar
                  </button>
                </div>
              )}
            </div>

            {/* Passo 3 */}
            <div className={`rounded-[24px] border transition ${
              step >= 3 ? 'border-[#e7b85f] bg-[#1b1b1b]' : 'border-white/10 bg-white/5'
            } p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                  step > 3 ? 'bg-[#1bb570] text-white' : 'bg-[#e7b85f] text-black'
                }`}>
                  {step > 3 ? '✓' : '3'}
                </div>
                <h2 className="text-xl font-bold text-white">Confirmação de pedido</h2>
              </div>

              {step >= 3 && (
                <div>
                  <p className="text-zinc-300 mb-4">Revise os dados antes de finalizar:</p>
                  <div className="mb-6 rounded-[16px] bg-white/5 border border-white/10 p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Subtotal</span>
                      <span className="text-white font-bold">R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Frete</span>
                      <span className={shipping === 0 ? 'text-[#1bb570]' : 'text-white'} >
                        {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
                      </span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-[#e7b85f] text-xl font-black">R$ {subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="mt-1" />
                      <span className="text-sm text-zinc-300">Aceito os termos e condições</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="mt-1" />
                      <span className="text-sm text-zinc-300">Desejo receber promoções e novidades</span>
                    </label>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full rounded-full bg-[#1bb570] px-6 py-3 font-bold text-white hover:bg-[#16a856] disabled:opacity-50"
                  >
                    {isProcessing ? 'Processando...' : 'Confirmar pagamento'}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#1b1b1b] p-6 h-fit sticky top-20">
            <h2 className="text-lg font-bold text-white mb-4">Resumo do pedido</h2>
            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-zinc-400">{item.name} x{item.quantity}</span>
                  <span className="text-white font-bold">R$ {(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Frete</span>
                <span className={shipping === 0 ? 'text-[#1bb570]' : ''}>
                  {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
                </span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between">
                <span className="text-white font-bold">Total</span>
                <span className="text-[#e7b85f] text-lg font-black">R$ {subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
