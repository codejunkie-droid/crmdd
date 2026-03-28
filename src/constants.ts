export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs?: string[];
  color?: string;
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export const CATEGORIES = [
  'Gaming PCs',
  'Laptops',
  'PC Components',
  'Accessories'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'CRM Apex Gaming PC',
    category: 'Gaming PCs',
    price: 25999,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1000&auto=format&fit=crop',
    description: 'High-performance gaming PC built for 1440p and 4K gaming. Features the latest RTX graphics and Ryzen processors.',
    specs: ['AMD Ryzen 5 7600X', 'NVIDIA RTX 4070 12GB', '32GB DDR5 RAM', '1TB NVMe SSD'],
    color: '#141414',
    featured: true,
    rating: 4.9,
    reviews: 124
  },
  {
    id: '2',
    name: 'ASUS ROG Strix G15',
    category: 'Laptops',
    price: 28999,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop',
    description: 'Esports-ready gaming laptop with a blazing fast 300Hz display and liquid metal cooling.',
    specs: ['Intel Core i7-13700H', 'RTX 4060 8GB', '16GB DDR5 RAM', '512GB NVMe SSD', '15.6" 300Hz FHD'],
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Logitech G Pro X Superlight',
    category: 'Accessories',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop',
    description: 'Ultra-lightweight wireless gaming mouse designed with pros. Less than 63 grams.',
    specs: ['HERO 25K Sensor', 'LIGHTSPEED Wireless', '< 63g Weight', '70h Battery Life'],
    rating: 4.9,
    reviews: 342
  },
  {
    id: '4',
    name: 'NVIDIA GeForce RTX 4080 Super',
    category: 'PC Components',
    price: 22999,
    image: 'https://images.unsplash.com/photo-1695056721201-078a656ef90b?q=80&w=1000&auto=format&fit=crop',
    description: 'Beyond fast GPU for gamers and creators. Experience lifelike virtual worlds with ray tracing.',
    specs: ['16GB GDDR6X', '10240 CUDA Cores', 'DLSS 3 Support', 'PCIe 4.0'],
    rating: 4.7,
    reviews: 56
  },
  {
    id: '5',
    name: 'CRM Titan Workstation',
    category: 'Gaming PCs',
    price: 45999,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop',
    description: 'Ultimate power for 3D rendering, video editing, and extreme gaming.',
    specs: ['Intel Core i9-14900K', 'NVIDIA RTX 4090 24GB', '64GB DDR5 RAM', '4TB NVMe SSD'],
    rating: 5.0,
    reviews: 21
  },
  {
    id: '6',
    name: 'Razer BlackWidow V4 Pro',
    category: 'Accessories',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=1000&auto=format&fit=crop',
    description: 'Full-blown battlestation keyboard with macro keys, command dial, and underglow.',
    specs: ['Razer Green Mechanical Switches', 'Command Dial', '8 Dedicated Macro Keys', 'Magnetic Wrist Rest'],
    rating: 4.6,
    reviews: 112
  },
  {
    id: '7',
    name: 'AMD Ryzen 7 7800X3D',
    category: 'PC Components',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop',
    description: 'The ultimate gaming processor with AMD 3D V-Cache technology for massive performance.',
    specs: ['8 Cores / 16 Threads', '5.0 GHz Max Boost', '104MB Cache', '120W TDP'],
    rating: 4.9,
    reviews: 205
  },
  {
    id: '8',
    name: 'Lenovo Legion Pro 7i',
    category: 'Laptops',
    price: 42999,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop',
    description: 'AI-tuned gaming laptop with top-tier cooling and a stunning 16" WQXGA display.',
    specs: ['Intel Core i9-13900HX', 'RTX 4080 12GB', '32GB DDR5 RAM', '1TB NVMe SSD', '16" 240Hz WQXGA'],
    rating: 4.8,
    reviews: 45
  }
];
