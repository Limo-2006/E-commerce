
import Boy4Logo from './boy4.jpg'   
import Girl1Logo from './girl1.webp'
import Man1Logo from './man1.webp'
import Man5Logo from './man5.webp'
import Man6Logo from './man6.jpg'   
import wtopLogo from './wtop.jpg'
import W2Logo from './w2.webp'
import wLogo from './w.jpg'
import wwLogo from './ww.jpg'
import wtshirtLogo from './wtshirt.webp'
import wjacketLogo from './wjacket.jpg'
import wcorty from './wcorty.webp'
import premiumLogo from './premium.webp'
import shirtLogo from './shirt.webp'
import hodsLogo from './hods.webp'
import formalLogo from './formal.jpg'
import jacketLogo from './jacket.webp'
import printLogo from './print.webp'
import ptopLogo from './ptop.webp'
import scartLogo from './scart.jpg'
import weaterLogo from './weater.webp'
import bjacketLogo from './bjacket.webp'
import boyjinsLogo from './boyjins.avif'

export const products = [
  // ---------- WOMEN ----------
  {
    _id: "w1",
    name: "Women's Casual Cotton Top",
    description: "Soft breathable cotton top perfect for daily use.",
    price: 750,
    image: wLogo,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: "2024-01-12",
    bestSeller: true
  },
  {
    _id: "w4",
    name: "Women Stylish Tops Combo",
    description: "Trendy stylish top made from premium cotton.",
    price: 820,
    image: wtopLogo,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: "2024-02-01",
    bestSeller: true
  },
  {
    _id: "w7",
    name: "Women Trendy Cotton Kurti",
    description: "Soft cotton kurti ideal for casual and festive wear.",
    price: 1050,
    image: wcorty,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: "2023-12-25",
    bestSeller: false
  },
  {
    _id: "w5",
    name: "Women's Long Sleeve Shirt",
    description: "Premium full sleeve shirt for office and casual wear.",
    price: 1150,
    image: wtshirtLogo,
    category: "Women",
    subCategory: "Shirt",
    sizes: ["M", "L"],
    date: "2024-02-11",
    bestSeller: false
  },
  {
    _id: "w2",
    name: "Women Floral Summer Dress",
    description: "Lightweight floral dress designed for comfort.",
    price: 1450,
    image: W2Logo,
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: "2024-01-20",
    bestSeller: false
  },
  {
    _id: "w3",
    name: "Women Knit Winter Sweater",
    description: "Warm knitted sweater for winter outings.",
    price: 1600,
    image: wwLogo,
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: "2023-12-05",
    bestSeller: false
  },
  {
    _id: "w6",
    name: "Women Winter Fleece Jacket",
    description: "Cozy fleece jacket designed for cold weather.",
    price: 1800,
    image: wjacketLogo,
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-18",
    bestSeller: true
  },
  {
    _id: "h1",
    name: "Women's Premium Jacket",
    description: "Premium stylish jacket with soft cushioning.",
    price: 2100,
    image: jacketLogo,
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: "2024-01-12",
    bestSeller: true
  },

  // ---------- MEN ----------
  {
    _id: "m1",
    name: "Men's Classic Cotton T-Shirt",
    description: "Premium cotton t-shirt with perfect slim fit.",
    price: 690,
    image: Man1Logo,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: "2023-12-01",
    bestSeller: true
  },
  {
    _id: "m3",
    name: "Men Hooded Sweatshirt",
    description: "Warm hoodie with a soft inner lining.",
    price: 1790,
    image: hodsLogo, // ✅ hodsLogo যেটা ছিল, সেটাই রেখেছি
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: "2023-12-22",
    bestSeller: true
  },
  {
    _id: "m5",
    name: "Men Summer Casual Shirt",
    description: "Lightweight and comfortable casual shirt.",
    price: 950,
    image: Man5Logo,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L"],
    date: "2024-02-05",
    bestSeller: false
  },
  {
    _id: "m6",
    name: "Men Trendy Streetwear Tee",
    description: "Trendy streetwear t-shirt with modern prints.",
    price: 780,
    image: Man6Logo,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: "2024-01-08",
    bestSeller: true
  },
  {
    _id: "m7",
    name: "Men Premium Polo Shirt",
    description: "Classic polo shirt made from premium fabric.",
    price: 1200,
    image: premiumLogo,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-02-02",
    bestSeller: false
  },
  {
    _id: "m2",
    name: "Men Denim Shirt",
    description: "Durable denim shirt with premium stitching.",
    price: 1250,
    image: shirtLogo,
    category: "Men",
    subCategory: "Shirt",
    sizes: ["L", "XL", "XXL"],
    date: "2024-01-14",
    bestSeller: false
  },
  {
    _id: "m4",
    name: "Men Formal Shirt",
    description: "Office wear formal shirt with sharp fitting.",
    price: 1100,
    image: formalLogo,
    category: "Men",
    subCategory: "Shirt",
    sizes: ["M", "L", "XL"],
    date: "2024-01-10",
    bestSeller: false
  },

  // ---------- BOYS ----------
  {
    _id: "b1",
    name: "Boys Printed T-Shirt",
    description: "Soft cotton t-shirt with cool graphic prints.",
    price: 450,
    image: printLogo,
    category: "Boys",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: "2024-01-21",
    bestSeller: true
  },
  {
    _id: "b2",
    name: "Boys Stretchable Jeans",
    description: "Comfortable stretch jeans perfect for daily wear.",
    price: 890,
    image: boyjinsLogo,
    category: "Boys",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: "2023-12-18",
    bestSeller: false
  },
  {
    _id: "b3",
    name: "Boys Winter Jacket",
    description: "Warm winter jacket with a soft inner lining.",
    price: 1500,
    image: bjacketLogo,
    category: "Boys",
    subCategory: "Winterwear",
    sizes: ["M", "L"],
    date: "2024-01-07",
    bestSeller: true
  },
  {
    _id: "b4",
    name: "Boys Cotton Shorts",
    description: "Soft and breathable cotton shorts perfect for summer.",
    price: 520,
    image: Boy4Logo,
    category: "Boys",
    subCategory: "Bottomwear",
    sizes: ["S", "M"],
    date: "2024-02-09",
    bestSeller: false
  },

  // ---------- GIRLS ----------
  {
    _id: "g1",
    name: "Girls Party Dress",
    description: "Beautiful party dress made with premium fabric.",
    price: 1350,
    image: Girl1Logo,
    category: "Girls",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: "2024-01-15",
    bestSeller: true
  },
  {
    _id: "g2",
    name: "Girls Top & Skirt Set",
    description: "Pretty 2-piece top & skirt combo for girls.",
    price: 1200,
    image: scartLogo,
    category: "Girls",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: "2024-02-14",
    bestSeller: false
  },
  {
    _id: "g3",
    name: "Girls Winter Sweater",
    description: "Soft knitted sweater for warm winter days.",
    price: 890,
    image: weaterLogo,
    category: "Girls",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: "2024-01-29",
    bestSeller: true
  },
  {
    _id: "g4",
    name: "Girls Stylish Printed Top",
    description: "Comfortable cotton top with colorful prints.",
    price: 620,
    image: ptopLogo,
    category: "Girls",
    subCategory: "Topwear",
    sizes: ["S", "M"],
    date: "2024-02-01",
    bestSeller: false
  },
];
