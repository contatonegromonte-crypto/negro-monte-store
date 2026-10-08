export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-4xl font-black">Checkout</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Dados do cliente</h2>

          <form className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input placeholder="Nome" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500" />
              <input placeholder="Sobrenome" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500" />
            </div>

            <input placeholder="E-mail" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500" />
            <input placeholder="Telefone" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500" />

            <textarea placeholder="Endereço" className="min-h-[120px] w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-500" />

            <button type="submit" className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400">
              Finalizar pedido
            </button>
          </form>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Resumo</h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-zinc-300">
              <span>Camiseta Premium Black</span>
              <span>R$ 129</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Tênis Street Luxe</span>
              <span>R$ 349</span>
            </div>
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-xl font-bold text-yellow-400">R$ 503</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
