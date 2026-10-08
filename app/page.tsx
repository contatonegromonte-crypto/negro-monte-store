import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function HomePage() {
  return (
    <main>
      <section className="bg-hero py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-yellow-300">
              Estate premium
            </span>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Negro Monte Store
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Estilo premium para quem vive com atitude, personalidade e presença.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#colecoes" className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
                Ver coleção
              </Link>
              <Link href="#sobre" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-yellow-500/50 hover:text-yellow-300">
                Conhecer mais
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-luxury">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
              alt="Coleção premium"
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="destaques" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Destaques</p>
            <h2 className="mt-3 text-4xl font-bold">Produtos favoritos</h2>
          </div>
          <Link href="#colecoes" className="text-sm text-yellow-300 hover:text-yellow-200">
            Ver todos
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="colecoes" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Coleções</p>
          <h2 className="mt-3 text-4xl font-bold">Novidades exclusivas</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80"
              alt="Sobre a loja"
              className="h-[440px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Sobre nós</p>
            <h2 className="mt-4 text-4xl font-bold">A essência da cultura e do estilo</h2>
            <p className="mt-6 text-zinc-300">
              A Negro Monte Store nasceu para reunir conceito, conforto e exclusividade em uma experiência moderna de compra.
            </p>
            <p className="mt-4 text-zinc-300">
              Cada peça é pensada para valorizar identidade, presença e qualidade.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-black text-yellow-400">+2k</div>
                <div className="mt-2 text-sm text-zinc-300">Clientes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-black text-yellow-400">98%</div>
                <div className="mt-2 text-sm text-zinc-300">Satisfação</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-black text-yellow-400">24h</div>
                <div className="mt-2 text-sm text-zinc-300">Entrega</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
