"use client";
import { FaShoppingBag } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Oud Petal",
    price: 390,
    image: "/Aud-Petal.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Gala",
    price: 390,
    image: "/Gala.png",
  },
  {
    id: 3,
    name: "Garden of Eden",
    price: 390,
    image: "/Garden of Eden.png",
  },
  {
    id: 4,
    name: "Mask Alemenia",
    price: 390,
    image: "/Mask-Alemenia.png",
  },
  {
    id: 5,
    name: "Oud Hillside",
    price: 390,
    image: "/Oud Hillside.png", // Replace with actual image path
  },
  {
    id: 6,
    name: "Ru-Sandal",
    price: 390,
    image: "/Ruh-Sandal.png",
  },
  {
    id: 7,
    name: "Tube Rosa",
    price: 390,
    image: "/Tube-Rosa.png",
  },
  {
    id: 8,
    name: "White Narsis",
    price: 390,
    image: "/White-Narcise.png",
  },
];

export default function NaturalCollections() {
  return (
    <div className="py-10">
        <h2 className="text-4xl font-bold text-center py-10">Explore Our Natural Collections of Perfume </h2>
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
            <button className="absolute bottom-0 left-0 right-0  bg-[#399bf7]  text-white flex items-center justify-center gap-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
