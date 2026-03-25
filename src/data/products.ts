export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Silk Cami Top', 
    price: 89, 
    image: '/assets/prod_silk_cami.png', 
    category: 'Tops',
    description: 'A luxurious silk cami top that feels like a second skin. Elegant, versatile, and perfect for layering or wearing solo.'
  },
  { 
    id: 2, 
    name: 'Classic Blazer', 
    price: 199, 
    image: '/assets/prod_blazer.png', 
    category: 'Outerwear',
    description: 'A timeless classic blazer featuring a sharp silhouette and premium tailoring. A staple for any modern wardrobe.'
  },
  { 
    id: 3, 
    name: 'Linen Trousers', 
    price: 129, 
    image: '/assets/prod_trousers.png', 
    category: 'Bottoms',
    description: 'Comfortable and chic linen trousers designed for effortless elegance during the warmer months.'
  },
  { 
    id: 4, 
    name: 'Knit Cardigan', 
    price: 149, 
    image: '/assets/prod_cardigan.png', 
    category: 'Knitwear',
    description: 'Soft, cozy, and beautifully textured. This knit cardigan is the perfect companion for chilly evenings.'
  },
  { 
    id: 5, 
    name: 'Evening Dress', 
    price: 299, 
    image: '/assets/cat_elegant.png', 
    category: 'Dresses',
    description: 'Dazzle in this exquisite evening dress, designed to make a statement at any formal occasion.'
  },
  { 
    id: 6, 
    name: 'Trench Coat', 
    price: 249, 
    image: '/assets/prod_trench.png', 
    category: 'Outerwear',
    description: 'The ultimate outerwear piece. This classic trench coat combines functionality with high-end style.'
  },
  { 
    id: 7, 
    name: 'Beige Blouse', 
    price: 79, 
    image: '/assets/cat_casual.png', 
    category: 'Tops',
    description: 'A simple yet sophisticated beige blouse that transitions perfectly from day to night.'
  },
  { 
    id: 8, 
    name: 'Wool Skirt', 
    price: 119, 
    image: '/assets/cat_workwear.png', 
    category: 'Bottoms',
    description: 'A structured wool skirt that brings a professional and polished look to your business attire.'
  },
];
