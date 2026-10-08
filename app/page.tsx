'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';
import { useState } from 'react';
import { ChevronRight, Truck, Lock, Award } from 'lucide-react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <main>
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-orange-700">Conforto e Confiança</span>
            </div>
            <h1 className="text-5xl font-black leading-tight md:text-6xl text-gray-900">
              Móveis e decoração com até 45% OFF
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Camas box, sofás, guarda-roupas e móveis de cozinha de alta qualidade. Conforto e design para sua casa com desconto real.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#colecoes"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Ver produtos
                <ChevronRight size={18} />
              </Link>
              <Link
                href="#sobre"
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:border-orange-500 hover:bg-orange-50"
              >
                Conhecer mais
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
              alt="Sofá moderno"
              className="h-[500px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-y border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-around gap-6 px-5">
          <div className="flex items-center gap-4">
            <Truck className="h-8 w-8 text-orange-500" />
            <div>
              <p className="font-semibold text-gray-900">Entrega para todo o Brasil</p>
              <p className="text-sm text-gray-600">Em até 15 dias úteis</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Lock className="h-8 w-8 text-orange-500" />
            <div>
              <p className="font-semibold text-gray-900">Compra 100% segura</p>
              <p className="text-sm text-gray-600">Protegido por sistema avançado</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Award className="h-8 w-8 text-orange-500" />
            <div>
              <p className="font-semibold text-gray-900">Qualidade garantida</p>
              <p className="text-sm text-gray-600">Certificados internacionais</p>
            </div>
          </div>
        </div>
      </section>

      <section id="colecoes" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-600 font-semibold">Coleções</p>
          <h2 className="mt-3 text-4xl font-black text-gray-900">Novidades exclusivas</h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              selectedCategory === null
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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

      <section id="sobre" className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021824ce0?auto=format&fit=crop&w=1000&q=80"
                alt="Sobre"
                className="h-[400px] w-full rounded-xl object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-400 font-semibold">Sobre nós</p>
              <h2 className="mt-4 text-4xl font-black">A essência do conforto e estilo</h2>
              <p className="mt-6 text-gray-200">
                A Negro Monte Store nasceu para reunir conceito, conforto e exclusividade em uma experiência moderna de compra.
              </p>
              <p className="mt-4 text-gray-200">
                Cada peça é pensada para valorizar sua casa com qualidade, design e preço justo.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                  <div className="text-3xl font-black text-orange-400">+5k</div>
                  <div className="mt-2 text-sm text-gray-300">Clientes satisfeitos</div>
                </div>
                <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                  <div className="text-3xl font-black text-orange-400">98%</div>
                  <div className="mt-2 text-sm text-gray-300">Taxa de satisfação</div>
                </div>
                <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                  <div className="text-3xl font-black text-orange-400">24h</div>
                  <div className="mt-2 text-sm text-gray-300">Suporte ao cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
