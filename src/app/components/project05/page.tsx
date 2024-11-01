"use client";
import React, { useState, useEffect } from "react";

const topSliderImages = ["/image04.jpeg", "/image05.jpeg", "/image06.jpeg"];

const products1 = [
  { id: 1, title: "Cheetah Cappuccino Case", price: "$100.00", reviews: "0 reviews", images: ["/image04.jpeg", "/image05.jpeg"] },
  { id: 2, title: "Leopard Sleeve", price: "$95.00", reviews: "0 reviews", images: ["/image13.jpeg", "/image06.jpeg"] },
  { id: 3, title: "Leopard AirPods Case", price: "$60.00", reviews: "0 reviews", images: ["/image09.jpeg", "/image10.jpeg"] },
  { id: 4, title: "Magnetic Wireless Charger", price: "$159.00", reviews: "5 reviews", images: ["/image11.jpeg", "/image12.jpeg"] },
  { id: 5, title: "Magnetic Cable", price: "$30.00", reviews: "2 reviews", images: ["/image10.jpeg", "/image09.jpeg"] },
  { id: 6, title: "Charging Pad", price: "$40.00", reviews: "3 reviews", images: ["/image12.jpeg", "/image11.jpeg"] }
];

const products2 = Array.from({ length: 14 }, (_, i) => ({
  id: i + 7,
  title: `Product 2 - Item ${i + 7}`,
  price: `$${(i + 7) * 10}.00`,
  reviews: `${i} reviews`,
  images: ["/image07.jpeg", "/image08.jpeg"]
}));

const products3 = Array.from({ length: 10 }, (_, i) => ({
  id: i + 21,
  title: `Product 3 - Item ${i + 21}`,
  price: `$${(i + 21) * 10}.00`,
  reviews: `${i} reviews`,
  images: ["/image14.jpeg", "/image15.jpeg"]
}));

const Page: React.FC = () => {
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [scrollIndex1, setScrollIndex1] = useState(0);
  const [scrollIndex2, setScrollIndex2] = useState(0);
  const [scrollIndex3, setScrollIndex3] = useState(0);
  const [isHovered, setIsHovered] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const topSliderInterval = setInterval(() => {
      setTopImageIndex((prevIndex) => (prevIndex + 1) % topSliderImages.length);
    }, 3000);

    return () => clearInterval(topSliderInterval);
  }, []);

  useEffect(() => {
    const productInterval1 = setInterval(() => {
      setScrollIndex1((prevIndex) => (prevIndex + 1) % products1.length);
    }, 3000);

    const productInterval2 = setInterval(() => {
      setScrollIndex2((prevIndex) => (prevIndex + 1) % products2.length);
    }, 3000);

    const productInterval3 = setInterval(() => {
      setScrollIndex3((prevIndex) => (prevIndex + 1) % products3.length);
    }, 3000);

    return () => {
      clearInterval(productInterval1);
      clearInterval(productInterval2);
      clearInterval(productInterval3);
    };
  }, []);

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

      {/* Top Slider */}
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

      {/* Product Sections */}
      {[{ products: products1, title: "Product 1", scrollIndex: scrollIndex1 }, { products: products2, title: "Product 2", scrollIndex: scrollIndex2 }, { products: products3, title: "Product 3", scrollIndex: scrollIndex3 }].map((section, idx) => (
        <div key={idx} className="container mx-auto py-10">
          <h2 className="text-3xl font-semibold text-center mb-4 hover:font-bold hover:shadow-golden transition duration-300">
            {section.title}
          </h2>
          <div className="relative flex items-center mt-4 overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${section.scrollIndex * 210}px)`,
              }}
            >
              {section.products.concat(section.products.slice(0, 6)).map((product, index) => (
                <div
                  key={index}
                  className={`text-center w-60 mx-2 border-[3px] rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                    isHovered[product.id] ? "border-yellow-400 shadow-[0_0_15px_5px_rgba(255,215,0,0.7)] scale-105" : "border-gray-300"
                  }`}
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={() => handleMouseLeave(product.id)}
                >
                  <div className="p-4 h-64 flex items-center justify-center overflow-hidden rounded-sm">
                    <img
                      src={isHovered[product.id] ? product.images[1] : product.images[0]}
                      alt={product.title}
                      className={`h-full w-full object-cover rounded-sm transition-transform duration-300 ${
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
      ))}
    </div>
  );
};

export default Page;
