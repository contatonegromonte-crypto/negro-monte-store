'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';
import { useState } from 'react';
import { ChevronRight, Truck, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <main className="bg-[#0b0b0b] text-white">
      <section className="hero-noise relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(231,184,95,0.18),_transparent_30%),linear-gradient(135deg,_rgba(0,0,0,0.5)_0%,_rgba(12,12,12,0.8)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e7b85f]/30 bg-[#e7b85f]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5d99e]">
              <span className="h-2 w-2 rounded-full bg-[#e7b85f]" />
              conforto e confiança
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Móveis e decoração com até <span className="gradient-text">45% OFF</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Camas box, sofás, guarda-roupas e móveis de cozinha de alta qualidade. Conforto e design para sua casa com desconto real.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#colecoes" className="inline-flex items-center gap-2 rounded-xl bg-[#e7b85f] px-6 py-3 font-semibold text-black transition hover:bg-[#d39a2d]">
                Ver produtos
                <ChevronRight size={18} />
              </Link>
              <Link href="#sobre" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-[#e7b85f]/60 hover:text-[#f5d99e]">
                Conhecer mais
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
              alt="Sofá premium"
              className="h-[540px] w-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111111] py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <Truck className="h-7 w-7 text-[#e7b85f]" />
            <div>
              <p className="font-bold text-white">Entrega para todo o Brasil</p>
              <p className="text-sm text-zinc-400">Em até 15 dias úteis</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <ShieldCheck className="h-7 w-7 text-[#e7b85f]" />
            <div>
              <p className="font-bold text-white">Compra 100% segura</p>
              <p className="text-sm text-zinc-400">Protegido por sistema avançado</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <BadgeCheck className="h-7 w-7 text-[#e7b85f]" />
            <div>
              <p className="font-bold text-white">Qualidade garantida</p>
              <p className="text-sm text-zinc-400">Produtos premium e confiáveis</p>
            </div>
          </div>
        </div>
      </section>

      <section id="colecoes" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#e7b85f] font-semibold">Coleções</p>
            <h2 className="mt-3 text-4xl font-black text-white">Novidades exclusivas</h2>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              selectedCategory === null ? 'bg-[#e7b85f] text-black' : 'bg-white/5 text-zinc-200 hover:bg-white/10'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                selectedCategory === category ? 'bg-[#e7b85f] text-black' : 'bg-white/5 text-zinc-200 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="sobre" className="bg-[#111111] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021824ce0?auto=format&fit=crop&w=1000&q=80"
                alt="Sobre"
                className="h-[400px] w-full rounded-[20px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#e7b85f] font-semibold">Sobre nós</p>
              <h2 className="mt-4 text-4xl font-black text-white">A essência do conforto e estilo</h2>
              <p className="mt-6 text-zinc-300">
                A Negro Monte Store nasceu para reunir conceito, conforto e exclusividade em uma experiência moderna de compra.
              </p>
              <p className="mt-4 text-zinc-300">
                Cada peça é pensada para valorizar sua casa com qualidade, design e preço justo.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-black text-[#e7b85f]">+5k</div>
                  <div className="mt-2 text-sm text-zinc-300">Clientes</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-black text-[#e7b85f]">98%</div>
                  <div className="mt-2 text-sm text-zinc-300">Satisfação</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-black text-[#e7b85f]">24h</div>
                  <div className="mt-2 text-sm text-zinc-300">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/55XXXXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20produtos%20da%20Negro%20Monte%20Store"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.5)] transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.68 11.68 0 0 0 12.05 0C5.54 0 .2 5.33.2 11.86c0 2.1.55 4.15 1.6 5.96L.08 24l6.4-1.68A11.87 11.87 0 0 0 12.05 24c6.51 0 11.85-5.33 11.85-11.86 0-3.17-1.23-6.15-3.38-8.66ZM12.05 21.6c-1.9 0-3.74-.52-5.35-1.49l-.38-.22-3.8 1 1.02-3.7-.25-.39A9.73 9.73 0 0 1 2.37 11.9 9.66 9.66 0 0 1 12.05 2.2a9.66 9.66 0 0 1 9.68 9.7 9.66 9.66 0 0 1-9.68 9.7Zm5.3-7.25c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.51-.07-.14-.67-1.62-.91-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.2 2.06 3.15 4.98 4.41.7.3 1.25.48 1.68.61.71.23 1.36.2 1.88.12.57-.09 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z"/>
        </svg>
      </a>
    </main>
  );
}
