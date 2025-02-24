"use client";
import { FaShoppingBag } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Ultra Mail",
    price: 390,
    image: "/আল্ট্রা-মেইল-Ultra-Male-1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Denim Black",
    price: 390,
    image: "/Denim-Black-ডেনিম-ব্ল্যাক.png",
  },
  {
    id: 3,
    name: "Fleur-de-Narcis",
    price: 390,
    image: "/Fleur-de-Narcis-ফ্লেউর-দ্যে-নার্সিস.png",
  },
  {
    id: 4,
    name: "Versace-Intense",
    price: 390,
    image: "/ভারসাচে-ইন্টেন্স-Versace-Intense.png",
  },
  {
    id: 5,
    name: "Light Wind",
    price: 390,
    image: "/Light-Wind-লাইট-উইন্ড.png", // Replace with actual image path
  },
  {
    id: 6,
    name: "Barbara",
    price: 390,
    image: "/Barbara-বারবারা.png",
  },
  {
    id: 7,
    name: "Cool-Water",
    price: 390,
    image: "/কুল-ওয়াটার-ফিমেইল-Cool-Water-Female.png",
  },
  {
    id: 8,
    name: "Red-Rose",
    price: 390,
    image: "/রেড-রোজ-Red-Rose.png",
  },
];

export default function ProductList() {
  return (
    <div className="py-10">
        <h2 className="text-4xl font-bold text-center py-10">Our Top Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-4 lg:container mx-auto">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div className="relative group">
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
            
            {/* Hidden button - appears on hover */}
            <button className="absolute bottom-0 left-0 right-0 bg-[#399bf7] text-white flex items-center justify-center gap-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaShoppingBag />
              Add To Bag
            </button>
          </div>

          {/* Product Details */}
          <div className="p-4 text-center">
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <p className="text-lg font-bold">৳ {product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
