# Negro Monte Store - E-commerce Premium

Loja de móveis e decoração premium com fluxo de compra completo, integração com WhatsApp e interface luxury dark mode.

## 🚀 Funcionalidades

- **Homepage Premium**: Hero section luxuoso com gradiente e animações
- **Catálogo de Produtos**: Grid responsivo com filtros por categoria
- **Página de Detalhe**: Informações completas com imagens de alta qualidade
- **Carrinho Persistente**: Estado do carrinho salvo no localStorage
- **Checkout Integrado**: Formulário com validação e envio via WhatsApp
- **WhatsApp Button Flutuante**: CTA de WhatsApp sempre visível
- **Design Responsivo**: Mobile-first, otimizado para todos os tamanhos
- **Performance**: Optimizado para Lighthouse e Core Web Vitals

## 📋 Requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/negro-monte-store.git
cd negro-monte-store

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Adicione seu número do WhatsApp no .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXXX
```

## 🏃 Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000 no navegador
```

## 📦 Build para Produção

```bash
# Crie a build de produção
npm run build

# Inicie o servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Layout raiz
│   ├── globals.css           # Estilos globais
│   ├── carrinho/page.tsx     # Página do carrinho
│   ├── checkout/page.tsx     # Página de checkout
│   └── produto/[id]/page.tsx # Página de detalhe do produto
├── components/
│   ├── Header.tsx            # Cabeçalho
│   ├── ProductCard.tsx       # Card de produto
│   └── CartDrawer.tsx        # Drawer do carrinho
├── lib/
│   ├── products.ts           # Lista de produtos
│   ├── store.ts              # Estado global (Zustand)
│   └── utils.ts              # Funções utilitárias
├── public/                   # Arquivos estáticos
└── package.json
```

## 🎨 Customização

### Cores
As cores principais estão definidas em `app/globals.css`:
- `--gold: #e7b85f` (Cor primária)
- `--gold-2: #d39a2d` (Cor secundária)
- `--dark: #111111` (Fundo escuro)

### Produtos
Altere a lista de produtos em `lib/products.ts`

### WhatsApp
Atualize o número do WhatsApp em `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXXX
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 📊 Otimizações

- ✅ Tailwind CSS para estilos otimizados
- ✅ Zustand para gerenciamento de estado leve
- ✅ LocalStorage para persistência de dados
- ✅ Imagens otimizadas com Next.js Image
- ✅ SEO-friendly com metadados

## 📱 Mobile First

O site é totalmente responsivo e otimizado para:
- Smartphones (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## 🔒 Segurança

- Variáveis de ambiente protegidas
- Validação de formulário no cliente e servidor
- Nenhum dado sensível armazenado localmente

## 📝 Licença

MIT License - veja LICENSE.md para detalhes

## 👨‍💼 Suporte

Para suporte, abra uma issue no GitHub ou envie uma mensagem via WhatsApp.

---

**Negro Monte Store** - Conforto, qualidade e estilo para sua casa.
