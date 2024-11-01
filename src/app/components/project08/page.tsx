"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Next.js ka Image component import karen

const topSliderImages = ["/image04.jpeg", "/image05.jpeg", "/image06.jpeg"];

const products = [
  { id: 1, title: "Cheetah Cappuccino Case", price: "$100.00", reviews: "0 reviews", images: ["/image04.jpeg", "/image05.jpeg"] },
  { id: 2, title: "Leopard Sleeve", price: "$95.00", reviews: "0 reviews", images: ["/image13.jpeg", "/image06.jpeg"] },
  { id: 3, title: "Leopard AirPods Case", price: "$60.00", reviews: "0 reviews", images: ["/image09.jpeg", "/image10.jpeg"] },
  { id: 4, title: "Magnetic Wireless Charger", price: "$159.00", reviews: "5 reviews", images: ["/image11.jpeg", "/image12.jpeg"] },
  { id: 5, title: "Magnetic Cable", price: "$30.00", reviews: "2 reviews", images: ["/image10.jpeg", "/image09.jpeg"] },
  { id: 6, title: "Charging Pad", price: "$40.00", reviews: "3 reviews", images: ["/image12.jpeg", "/image11.jpeg"] }
];

const Page: React.FC = () => {
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const topSliderInterval = setInterval(() => {
      setTopImageIndex((prevIndex) => (prevIndex + 1) % topSliderImages.length);
    }, 3000);

    return () => clearInterval(topSliderInterval);
  }, []);

  useEffect(() => {
    const productInterval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(productInterval);
  }, [products.length]);

  const handleMouseEnter = (id: number) => {
    setIsHovered((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setIsHovered((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="relative w-full">
      <div className="bg-gray-800 text-white text-center py-2 hover:text-white hover:font-bold">
        Ubaid Raza Worldwide Shopping on All Orders Over SGD $200
      </div>

      <nav className="bg-white flex items-center justify-between p-4 shadow-md">
        <div className="flex space-x-6">
          {["Bracelet Watches", "Band Watches", "Perfumes", "Earbuds"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="navbar-glow hover:font-bold"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          <button aria-label="Search" className="text-gray-700 hover:text-black">🔍</button>
          <button aria-label="User Account" className="text-gray-700 hover:text-black">👤</button>
          <button aria-label="Cart" className="text-gray-700 hover:text-black">🛒</button>
        </div>
      </nav>

      <div
        className="w-full h-[85vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000 mb-10 relative"
        style={{
          backgroundImage: `url(${topSliderImages[topImageIndex]})`,
        }}
      >
        <div className="absolute left-10 text-white z-10">
          <h1 className="text-4xl font-bold animate-slideIn">BALZAC PARIS X NATIVE UNION</h1>
          <h2 className="text-6xl font-bold mt-4 animate-slideIn">NEW ULTRA DESIRABLE</h2>
          <h2 className="text-6xl font-bold mt-2 animate-slideIn">COLLABORATION</h2>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center mb-4 hover:font-bold hover:shadow-golden transition duration-300">
          Products
        </h2>
        <div className="relative flex items-center mt-4 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollIndex * 210}px)`,
            }}
          >
            {products.concat(products.slice(0, 6)).map((product, index) => (
              <div
                key={index}
                className={`text-center w-60 mx-2 border-[3px] rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                  isHovered[product.id] ? "border-yellow-400 shadow-[0_0_15px_5px_rgba(255,215,0,0.7)] scale-105" : "border-gray-300"
                }`}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
              >
                <div className="p-4 h-64 flex items-center justify-center overflow-hidden rounded-sm">
                  <Image
                    src={isHovered[product.id] ? product.images[1] : product.images[0]}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className={`rounded-sm transition-transform duration-300 ${
                      isHovered[product.id] ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>
                <div className="p-4">
                  <h3
                    className={`mt-2 font-medium transition-all duration-300 ${
                      isHovered[product.id] ? "text-black font-bold shadow-golden" : ""
                    }`}
                  >
                    {product.title}
                  </h3>
                  <p className="text-gray-700">{product.price}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                    <span className="text-gray-400">★</span>
                  </div>
                  <p className="text-gray-500">{product.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
