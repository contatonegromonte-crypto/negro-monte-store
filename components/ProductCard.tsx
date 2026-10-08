import Link from 'next/link';
import { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg transition hover:-translate-y-1 hover:border-yellow-400/40">
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
            {product.tag}
          </span>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-yellow-400">{product.category}</span>
          <span className="text-sm text-yellow-300">★ {product.rating}</span>
        </div>

        <Link href={`/produto/${product.id}`} className="block text-xl font-semibold hover:text-yellow-300">
          {product.name}
        </Link>

        <p className="text-sm text-zinc-300">{product.description}</p>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white">R$ {product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-zinc-400 line-through">R$ {product.oldPrice}</span>
          )}
        </div>

        <Link href={`/produto/${product.id}`} className="inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400">
          Ver produto
        </Link>
      </div>
    </div>
  );
}
