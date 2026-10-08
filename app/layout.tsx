import type { Metadata } from 'next';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Negro Monte Store - Móveis e Decoração Premium',
  description: 'Loja premium de móveis e decoração. Camas box, sofás, guarda-roupas, móveis de cozinha. Entrega para todo Brasil com até 45% de desconto.',
  keywords: 'móveis, decoração, cama, sofá, guarda-roupa, móveis de cozinha, negro monte',
  openGraph: {
    title: 'Negro Monte Store',
    description: 'Loja premium de móveis e decoração',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <CartDrawer />
        {children}
        <footer className="border-t border-white/10 bg-[#111111] py-10">
          <div className="mx-auto max-w-7xl px-5 text-center text-sm text-zinc-400">
            <p>&copy; 2026 Negro Monte Store. Todos os direitos reservados.</p>
            <p className="mt-2">Conforto, qualidade e estilo para sua casa.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
