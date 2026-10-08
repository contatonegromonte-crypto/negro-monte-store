import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20">
      <h1 className="text-4xl font-black">Carrinho</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold">Camiseta Premium Black</h2>
                <p className="text-zinc-400">Tamanho M • 1 unidade</p>
              </div>
              <div className="text-xl font-bold">R$ 129</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold">Tênis Street Luxe</h2>
                <p className="text-zinc-400">Tamanho 41 • 1 unidade</p>
              </div>
              <div className="text-xl font-bold">R$ 349</div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-bold">Resumo</h3>

          <div className="mt-6 space-y-4 text-zinc-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ 478</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ 25</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-xl font-bold text-yellow-400">R$ 503</span>
            </div>
          </div>

          <Link href="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400">
            Finalizar compra
          </Link>
        </aside>
      </div>
    </main>
  );
}
