# Negro Monte Store

Loja de móveis e decoração com design premium em dark luxury.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilos responsivos
- **Zustand** - Gerenciamento de estado
- **Lucide Icons** - Ícones vetoriais

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/contatonegromonte-crypto/negro-monte-store.git
cd negro-monte-store

# Instalar dependências
npm install

# Rodas em desenvolvimento
npm run dev

# Build para produção
npm run build
npm run start
```

## 🏗️ Estrutura do Projeto

```
.
├── app/
│   ├── page.tsx           # Home page
│   ├── carrinho/          # Página do carrinho
│   ├── produto/[id]/      # Página do produto
│   └── layout.tsx         # Layout global
├── components/
│   ├── Header.tsx         # Cabeçalho
│   └── ProductCard.tsx    # Card do produto
├── lib/
│   ├── products.ts        # Dados dos produtos
│   └── store.ts           # Estado Zustand
└── app/globals.css        # Estilos globais
```

## 📱 Funcionalidades

- ✅ Listagem de produtos com filtros
- ✅ Página de detalhes do produto
- ✅ Carrinho de compras funcional
- ✅ Checkout com formulário
- ✅ Confirmação de pedido
- ✅ Responsivo mobile-first
- ✅ Design dark luxury premium
- ✅ Integração WhatsApp

## 🎨 Design

- **Paleta de cores**: Dark (#0b0b0b), Gold (#e7b85f), White/Zinc
- **Tipografia**: Inter/Segoe UI
- **Layout**: Grid responsivo 4 colunas → 2 → 1
- **Bordas**: Rounded (18px-30px)
- **Sombras**: Premium com backdrop-blur

## 🚀 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conectar repo no [Vercel](https://vercel.com)
3. Deploy automático

```bash
npm run build
npm run start
```

## 📝 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```env
# WhatsApp (optional)
WHATSAPP_BUSINESS_PHONE=55XXXXXXXXXXXX
```

## 📞 Suporte

- WhatsApp: Botão no canto inferior direito
- Email: contatonegromonte@gmail.com

## 📄 Licença

MIT
