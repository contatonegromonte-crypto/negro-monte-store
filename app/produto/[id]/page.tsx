import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
          <img src={product.image} alt={product.name} className="h-[600px] w-full rounded-[1.5rem] object-cover" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">{product.category}</p>
          <h1 className="mt-4 text-4xl font-black">{product.name}</h1>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-3xl font-bold text-white">R$ {product.price}</span>
            {product.oldPrice && (
              <span className="text-lg text-zinc-400 line-through">R$ {product.oldPrice}</span>
            )}
          </div>

          <p className="mt-6 text-zinc-300">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
              Adicionar ao carrinho
            </button>
            <Link href="/checkout" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-yellow-500/50 hover:text-yellow-300">
              Comprar agora
            </Link>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Detalhes</h3>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>• Material premium</li>
              <li>• Design moderno</li>
              <li>• Entrega rápida</li>
              <li>• Garantia de qualidade</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
