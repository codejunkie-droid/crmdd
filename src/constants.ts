export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  color?: string;
  featured?: boolean;
  specs?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'asus-tuf-a15-rtx2050',
    name: 'ASUS TUF Gaming A15',
    category: 'Laptops',
    price: 18999,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop',
    description: 'AMD Ryzen™ 5 | NVIDIA GeForce RTX 2050 | 16GB DDR5 | 512GB SSD',
    featured: true,
    specs: ['AMD Ryzen 5', 'RTX 2050 4GB', '16GB DDR5', '512GB NVMe SSD']
  },
  {
    id: 'acer-aspire-3-i5',
    name: 'Acer Aspire 3 12th Gen',
    category: 'Laptops',
    price: 8499,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
    description: 'Intel Core i5 1235U | 8GB RAM | 512GB SSD | 15.6" FHD',
    specs: ['Intel Core i5-1235U', '8GB RAM', '512GB SSD', '15.6" Full HD']
  },
  {
    id: 'wd-blue-sn580-1tb',
    name: 'WD Blue SN580 1TB NVMe',
    category: 'Storage',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1597872200370-499de4613839?q=80&w=1000&auto=format&fit=crop',
    description: 'Western Digital Blue SN580 1TB NVMe SSD Gen 4.0',
    featured: true,
    specs: ['1TB Capacity', 'NVMe PCIe Gen 4.0', 'Up to 4150MB/s', '5 Year Warranty']
  },
  {
    id: 'rtx-4090-rog-strix',
    name: 'ROG Strix GeForce RTX 4090',
    category: 'Components',
    price: 45999,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop',
    description: 'The ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.',
    featured: true,
    specs: ['24GB GDDR6X', 'DLSS 3', 'Ray Tracing', 'Aura Sync']
  },
  {
    id: 'ryzen-9-7950x-cpu',
    name: 'AMD Ryzen 9 7950X',
    category: 'Components',
    price: 12499,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000&auto=format&fit=crop',
    description: '16 Cores, 32 Threads, 5.7GHz Max Boost. The ultimate processor for gamers and creators.',
    specs: ['16 Cores', '32 Threads', '5.7GHz Boost', 'AM5 Socket']
  },
  {
    id: 'deco-x20-mesh',
    name: 'TP-Link Deco X20 Mesh',
    category: 'Networking',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
    description: 'AX1800 Whole Home Mesh Wi-Fi 6 System (3-Pack)',
    specs: ['Wi-Fi 6', 'AX1800', 'Seamless Roaming', 'Parental Controls']
  },
  {
    id: 'tapo-c425-solar-kit',
    name: 'Tapo C425 Solar Camera',
    category: 'Security',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1000&auto=format&fit=crop',
    description: 'Solar-Powered Security Camera Kit by TP-Link',
    specs: ['Solar Powered', '2K QHD', 'Color Night Vision', 'AI Detection']
  },
  {
    id: 'gaming-chair-elite',
    name: 'Elite Series Gaming Chair',
    category: 'Accessories',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fce66?q=80&w=1000&auto=format&fit=crop',
    description: 'Ergonomic high-back gaming chair with lumbar support and 4D armrests.',
    specs: ['PU Leather', 'Class 4 Gas Lift', '180 Degree Recline', 'Memory Foam']
  },
  {
    id: 'upgrade-kit-intel-i7',
    name: 'Core i7 Upgrade Kit',
    category: 'Upgrade Kits',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop',
    description: 'Intel Core i7-13700K + Z790 Motherboard + 32GB DDR5 RAM',
    specs: ['Intel i7-13700K', 'Z790 Chipset', '32GB DDR5 6000MHz', 'Pre-assembled']
  }
];
