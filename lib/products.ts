export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  discount?: number;
  rating: number;
};

export const categories = ['Camas', 'Sofás', 'Guarda-Roupas', 'Móveis de Cozinha', 'Decoração'];

export const products: Product[] = [
  {
    id: 1,
    name: 'Cama Box Premium King',
    description: 'Cama box de alta qualidade com colchão premium incluído.',
    price: 1890,
    oldPrice: 3200,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021824ce0?auto=format&fit=crop&w=800&q=80',
    category: 'Camas',
    discount: 41,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Sofá Cinzento Elegante',
    description: 'Sofá moderno com design sofisticado e acabamento premium.',
    price: 2490,
    oldPrice: 4500,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    category: 'Sofás',
    discount: 45,
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Guarda-Roupa 6 Portas',
    description: 'Guarda-roupa espaçoso com Design moderno e funcional.',
    price: 1290,
    oldPrice: 2100,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    category: 'Guarda-Roupas',
    discount: 38,
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Mesa de Cozinha Extensível',
    description: 'Mesa extensível moderna com acabamento laminado resistente.',
    price: 890,
    oldPrice: 1500,
    image: 'https://images.unsplash.com/photo-1584622614875-2953067881c7?auto=format&fit=crop&w=800&q=80',
    category: 'Móveis de Cozinha',
    discount: 41,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Espelho Decorativo Grande',
    description: 'Espelho com moldura de madeira para decoração sofisticada.',
    price: 340,
    oldPrice: 620,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?auto=format&fit=crop&w=800&q=80',
    category: 'Decoração',
    discount: 45,
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Tapete Persa Autêntico',
    description: 'Tapete de alta qualidade com padrão persa tradicional.',
    price: 520,
    oldPrice: 950,
    image: 'https://images.unsplash.com/photo-1600585153490-be6b7900deed?auto=format&fit=crop&w=800&q=80',
    category: 'Decoração',
    discount: 45,
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Armário de Cozinha Branco',
    description: 'Armário funcional com prateleiras ajustáveis.',
    price: 680,
    oldPrice: 1200,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    category: 'Móveis de Cozinha',
    discount: 43,
    rating: 4.7,
  },
  {
    id: 8,
    name: 'Poltrona Reclinável',
    description: 'Poltrona confortável com sistema de reclinação automática.',
    price: 1290,
    oldPrice: 2300,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
    category: 'Sofás',
    discount: 44,
    rating: 4.9,
  },
];
