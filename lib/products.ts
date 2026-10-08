export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  tag?: string;
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta Premium Black',
    description: 'Modelo premium com corte moderno e acabamento sofisticado.',
    price: 129,
    oldPrice: 179,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    category: 'Roupas',
    tag: 'Mais vendido',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Jaqueta Signature',
    description: 'Jaqueta elegante com visual urbano e alta resistência.',
    price: 299,
    oldPrice: 399,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    category: 'Casual',
    tag: 'Novo',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Tênis Street Luxe',
    description: 'Conforto e estilo para o dia a dia com acabamento premium.',
    price: 349,
    oldPrice: 469,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    category: 'Calçados',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Mochila Urban',
    description: 'Espaço e estilo para uso diário e viagens curtas.',
    price: 219,
    oldPrice: 289,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    category: 'Acessórios',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Relógio Minimal',
    description: 'Design refinado para quem gosta de sofisticação discreta.',
    price: 499,
    oldPrice: 620,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    category: 'Acessórios',
    tag: 'Exclusivo',
    rating: 5.0,
  },
  {
    id: 6,
    name: 'Boné Elite',
    description: 'Acessório premium com visual moderno e acabamento impecável.',
    price: 99,
    oldPrice: 149,
    image: 'https://images.unsplash.com/photo-1521369909026-2afc1b4a8d7a?auto=format&fit=crop&w=900&q=80',
    category: 'Acessórios',
    rating: 4.6,
  },
];
