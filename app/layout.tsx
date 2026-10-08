import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import './globals.css';

export const metadata = {
  title: 'Negro Monte Store',
  description: 'Loja premium com estilo moderno e exclusividade.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <CartDrawer />
        {children}
      </body>
    </html>
  );
}
