// src/data/products.js

export const allProducts = [
    // NEW IN
    {
      id: 'top-01',
      name: 'Cropped Linen Shirt',
      price: 220,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1581044777550-4cfa248b7f44?w=800',
        'https://images.unsplash.com/photo-1581044777550-4cfa248b7f44?w=800&sat=-100'
      ],
      category: 'Tops',
      tag: 'New',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['#FFFFFF', '#D2B48C', '#000000'],
      description: 'Breathable linen blend with relaxed fit. Perfect for Accra heat.'
    },
    {
      id: 'dress-01',
      name: 'Satin Slip Dress',
      price: 380,
      salePrice: 290,
      images: [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&blur=10'
      ],
      category: 'Dresses',
      tag: 'New',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#000000', '#8B4513', '#722F37'],
      description: 'Bias-cut satin that drapes like liquid. Adjustable straps.'
    },
    {
      id: 'bottom-01',
      name: 'Wide Leg Cargo Pants',
      price: 340,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1624378439575-d8705cbeeb09?w=800',
        'https://images.unsplash.com/photo-1624378439575-d8705cbeeb09?w=800&sat=-50'
      ],
      category: 'Bottoms',
      tag: 'New',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#2F4F2F', '#000000', '#D2B48C'],
      description: 'Heavy cotton twill with 6 pockets. Street-ready silhouette.'
    },
  
    // TOPS
    {
      id: 'top-02',
      name: 'Oversized Heavy Tee',
      price: 160,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&con=-50'
      ],
      category: 'Tops',
      tag: null,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['#FFFFFF', '#000000', '#808080', '#BE7E4A'],
      description: '240GSM cotton, dropped shoulders. The only tee you need.'
    },
    {
      id: 'top-03',
      name: 'Ribbed Tank Top',
      price: 120,
      salePrice: 90,
      images: [
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&hue=30'
      ],
      category: 'Tops',
      tag: 'Sale',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['#FFFFFF', '#000000', '#F5DEB3'],
      description: 'Stretch ribbed cotton. Layer it or wear solo.'
    },
    {
      id: 'top-04',
      name: 'Boxy Knit Sweater',
      price: 420,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800',
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&sat=20'
      ],
      category: 'Tops',
      tag: null,
      sizes: ['S', 'M', 'L'],
      colors: ['#F5F5DC', '#000000', '#4682B4'],
      description: 'Chunky cotton knit for those AC-heavy days. Cropped length.'
    },
  
    // BOTTOMS
    {
      id: 'bottom-02',
      name: 'Tailored Pleated Trousers',
      price: 390,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&con=20'
      ],
      category: 'Bottoms',
      tag: null,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#000000', '#36454F', '#D2B48C'],
      description: 'High-waisted with sharp pleats. Office to dinner approved.'
    },
    {
      id: 'bottom-03',
      name: 'Denim Straight Jeans',
      price: 360,
      salePrice: 280,
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&hue=200'
      ],
      category: 'Bottoms',
      tag: 'Sale',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#1C1C1C', '#4682B4', '#000000'],
      description: 'Non-stretch rigid denim. Breaks in perfectly over time.'
    },
    {
      id: 'bottom-04',
      name: 'Linen Drawstring Shorts',
      price: 1,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
        'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&sat=30'
      ],
      category: 'Bottoms',
      tag: null,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#F5DEB3', '#FFFFFF', '#000000'],
      description: 'Elastic waist + drawstring. 5" inseam for hot days.'
    },
  
    // DRESSES
    {
      id: 'dress-02',
      name: 'Midi Wrap Dress',
      price: 340,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&hue=15'
      ],
      category: 'Dresses',
      tag: null,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['#000000', '#8B0000', '#228B22'],
      description: 'True wrap silhouette with tie waist. V-neckline flatters all.'
    },
    {
      id: 'dress-03',
      name: 'Bodycon Mini Dress',
      price: 260,
      salePrice: 190,
      images: [
        'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
        'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&con=30'
      ],
      category: 'Dresses',
      tag: 'Sale',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['#000000', '#FFFFFF', '#FF1493'],
      description: 'Double-lined stretch fabric. Built-in shorts for coverage.'
    },
    {
      id: 'dress-04',
      name: 'Maxi Shirt Dress',
      price: 1,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&sat=-30'
      ],
      category: 'Dresses',
      tag: null,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#FFFFFF', '#87CEEB', '#000000'],
      description: 'Oversized poplin with side slits. Belt it or wear loose.'
    },
  
    // OUTERWEAR
    {
      id: 'outer-01',
      name: 'Oversized Blazer',
      price: 580,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&brightness=120'
      ],
      category: 'Outerwear',
      tag: null,
      sizes: ['S', 'M', 'L'],
      colors: ['#000000', '#D2B48C', '#FFFFFF'],
      description: 'Structured shoulders, relaxed fit. Your power piece.'
    },
    {
      id: 'outer-02',
      name: 'Cropped Denim Jacket',
      price: 320,
      salePrice: 250,
      images: [
        'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800',
        'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&hue=180'
      ],
      category: 'Outerwear',
      tag: 'Sale',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#4169E1', '#000000', '#FFFFFF'],
      description: 'Classic trucker cut at the waist. Perfect with dresses.'
    },
    {
      id: 'outer-03',
      name: 'Lightweight Trench Coat',
      price: 620,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1544441893-675c5e7252b8?w=800',
        'https://images.unsplash.com/photo-1544441893-675c5e7252b8?w=800&sat=50'
      ],
      category: 'Outerwear',
      tag: 'New',
      sizes: ['S', 'M', 'L'],
      colors: ['#D2B48C', '#000000'],
      description: 'Water-resistant gabardine. Belted waist, timeless cut.'
    },
  
    // ACCESSORIES
    {
      id: 'acc-01',
      name: 'Leather Crossbody Bag',
      price: 280,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&con=20'
      ],
      category: 'Accessories',
      tag: null,
      sizes: ['One Size'],
      colors: ['#000000', '#8B4513', '#FFFFFF'],
      description: 'Full-grain leather with adjustable strap. Fits phone + essentials.'
    },
    {
      id: 'acc-02',
      name: 'Chunky Gold Hoops',
      price: 95,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&hue=40'
      ],
      category: 'Accessories',
      tag: null,
      sizes: ['One Size'],
      colors: ['#FFD700', '#C0C0C0'],
      description: '18k gold plated. 40mm diameter, lightweight.'
    },
    {
      id: 'acc-03',
      name: 'Silk Scarf',
      price: 1,
      salePrice: 110,
      images: [
        'https://images.unsplash.com/photo-1582142838535-b7b9282fbac8?w=800',
        'https://images.unsplash.com/photo-1582142838535-b7b9282fbac8?w=800&sat=80'
      ],
      category: 'Accessories',
      tag: 'Sale',
      sizes: ['One Size'],
      colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'],
      description: '100% mulberry silk. 90x90cm. Wear as top, headwrap, or bag charm.'
    },
    {
      id: 'acc-04',
      name: 'Leather Belt',
      price: 140,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800',
        'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&con=40'
      ],
      category: 'Accessories',
      tag: null,
      sizes: ['S', 'M', 'L'],
      colors: ['#000000', '#8B4513'],
      description: 'Genuine leather with brushed gold buckle. 3cm width.'
    },
    {
      id: 'acc-05',
      name: 'Bucket Hat',
      price: 85,
      salePrice: null,
      images: [
        'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800',
        'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&hue=90'
      ],
      category: 'Accessories',
      tag: 'New',
      sizes: ['One Size'],
      colors: ['#000000', '#FFFFFF', '#D2B48C'],
      description: 'Cotton twill with embroidered logo. Packable.'
    },
  
    // SALE EXTRAS
    {
      id: 'top-05',
      name: 'Mesh Long Sleeve',
      price: 1,
      salePrice: 70,
      images: [
        'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800',
        'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?w=800&blur=5'
      ],
      category: 'Tops',
      tag: 'Final Sale',
      sizes: ['S', 'M', 'L'],
      colors: ['#000000'],
      description: 'Sheer mesh layering piece. Last sizes only.'
    },
    {
      id: 'bottom-05',
      name: 'Leather Mini Skirt',
      price: 290,
      salePrice: 190,
      images: [
        'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800',
        'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&sat=60'
      ],
      category: 'Bottoms',
      tag: 'Sale',
      sizes: ['XS', 'S', 'M'],
      colors: ['#000000', '#8B4513'],
      description: 'Faux leather A-line. High waist, side zip.'
    },
    {
      id: 'dress-05',
      name: 'Knit Midi Dress',
      price: 320,
      salePrice: 210,
      images: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&con=50'
      ],
      category: 'Dresses',
      tag: 'Sale',
      sizes: ['S', 'M', 'L'],
      colors: ['#000000', '#D2B48C'],
      description: 'Ribbed knit with side slit. Dress up or down.'
    },
    {
      id: 'outer-04',
      name: 'Varsity Jacket',
      price: 480,
      salePrice: 340,
      images: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&hue=120'
      ],
      category: 'Outerwear',
      tag: 'Sale',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#000000', '#FFFFFF'],
      description: 'Wool body, leather sleeves. Embroidered chest patch.'
    }
  ];
  
  export const categories = ['All', 'New In', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Sale'];