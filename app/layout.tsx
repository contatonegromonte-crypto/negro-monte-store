import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Negro Monte Store - Móveis e Decoração com até 45% OFF',
  description: 'Loja de móveis e decoração premium. Camas box, sofás, guarda-roupas e móveis de cozinha. Entrega para todo o Brasil.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
