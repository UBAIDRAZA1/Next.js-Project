"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importing Next.js Image component

const topSliderImages = [
 "/kolachi/image3.jpeg",
 "/kolachi/image2.jpeg",
 "/chain/image22.jpeg ",
 "/patta/image15.jpeg",
 "/earbuds/image2.jpeg",
 "/perfume/image14.jpeg"
];

// const Slider = () => {
//   return (
//       <div className="slider">
//           {topSliderImages.map((image, index) => (
//               <img key={index} src={image} alt={`Slider Image ${index + 1}`} className="slider-image" />
//           ))}
//       </div>
//   );
// };


const products1 = [
    { id: 1, title: "Eternal Chain", price: "$20.00", reviews:"5000 reviews", images: ["/chain/image1.jpeg", "/chain/image14.jpeg"] },
    { id: 2, title: "Regal Link", price: "$25.00", reviews: "3000 reviews", images: ["/chain/image2.jpeg", "/chain/image15.jpeg"] },
    { id: 3, title: "Timeless Chain", price: "$28.00", reviews: "6000 reviews", images: ["/chain/image3.jpeg", "/chain/image16.jpeg"] },
    { id: 4, title: "Classic Link", price: "$35.00", reviews: "4560 reviews", images: ["/chain/image4.jpeg", "/chain/image17.jpeg"] },
    { id: 5, title: "Heritage Chain", price: "$30.00", reviews: "8750 reviews", images: ["/chain/image5.jpeg", "/chain/image18.jpeg"] },
    { id: 6, title: "Gold Loop", price: "$40.00", reviews: "4000 reviews", images: ["/chain/image6.jpeg", "/chain/image19.jpeg"] },
    { id: 7, title: "Gold Loop", price: "$34.00", reviews: "2000 reviews", images: ["/chain/image7.jpeg", "/chain/image20.jpeg"] },
    { id: 8, title: "Elite Link", price: "$42.00", reviews: "5000 reviews", images: ["/chain/image8.jpeg", "/chain/image21.jpeg"] },
    { id: 9, title: "Noble Chain", price: "$37.00", reviews: "4900 reviews", images: ["/chain/image9.jpeg", "/chain/image22.jpeg"] },
    { id:10, title: "Elegant Loop", price: "$46.00", reviews: "6040 reviews", images: ["/chain/image10.jpeg", "/chain/image23.jpeg"] },
    { id:11, title: "Grace Chain", price: "$42.00", reviews: "5000 reviews", images: ["/chain/image11.jpeg", "/chain/image24.jpeg"] },
    { id:12, title: "Imperial Chain", price: "$37.00", reviews: "4900 reviews", images: ["/chain/image12.jpeg", "/chain/image25.jpeg"] },
    { id:13, title: "Vanguard Chain", price: "$46.00", reviews: "6040 reviews", images: ["/chain/image13.jpeg", "/chain/image26.jpeg"] }
   ];

const products2 = [
    { id: 1, title: "Leafy Charm", price: "$20.00", reviews: "5000 reviews", images: ["/patta/image1.jpeg", "/patta/image11.jpeg"] },
    { id: 2, title: "Verdant Time", price: "$25.00", reviews: "3000 reviews", images: ["/patta/image2.jpeg", "/patta/image12.jpeg"] },
    { id: 3, title: "Nature Loop", price: "$28.00", reviews: "6000 reviews", images: ["/patta/image3.jpeg", "/patta/image13.jpeg"] },
    { id: 4, title: "Floral Touch", price: "$35.00", reviews: "4560 reviews", images: ["/patta/image4.jpeg", "/patta/image14.jpeg"] },
    { id: 5, title: "Green Elegance", price: "$30.00", reviews: "8750 reviews", images: ["/patta/image5.jpeg", "/patta/image15.jpeg"] },
    { id: 6, title: "Petal Link", price: "$40.00", reviews: "4000 reviews", images: ["/patta/image6.jpeg", "/patta/image16.jpeg"] },
    { id: 7, title: "Botanic Grace", price: "$34.00", reviews: "2000 reviews", images: ["/patta/image7.jpeg", "/patta/image17.jpeg"] },
    { id: 8, title: "EcoTime", price: "$42.00", reviews: "5000 reviews", images: ["/patta/image8.jpeg", "/patta/image18.jpeg"] },
    { id: 9, title: "Lush Leaf", price: "$37.00", reviews: "4900 reviews", images: ["/patta/image9.jpeg", "/patta/image19.jpeg"] },
    { id:10, title: "Garden Glow", price: "$46.00", reviews: "6040 reviews", images: ["/patta/image10.jpeg", "/patta/image20.jpeg"] },
   ];

   const products3 = [
    { id: 1, title: "Essence Aura", price: "$20.00", reviews: "5000 reviews", images: ["/perfume/image1.jpeg", "/perfume/image14.jpeg"] },
    { id: 2, title: "Mystic Bloom", price: "$25.00", reviews: "3000 reviews", images: ["/perfume/image2.jpeg", "/perfume/image15.jpeg"] },
    { id: 3, title: "Aroma Luxe", price: "$28.00", reviews: "6000 reviews", images: ["/perfume/image3.jpeg", "/perfume/image16.jpeg"] },
    { id: 4, title: "Divine Mist", price: "$35.00", reviews: "4560 reviews", images: ["/perfume/image4.jpeg", "/perfume/image17.jpeg"] },
    { id: 5, title: "Pure Scent", price: "$30.00", reviews: "8750 reviews", images: ["/perfume/image5.jpeg", "/perfume/image18.jpeg"] },
    { id: 6, title: "Soul Essence", price: "$40.00", reviews: "4000 reviews", images: ["/perfume/image6.jpeg", "/perfume/image19.jpeg"] },
    { id: 7, title: "Eternal Fragrance", price: "$34.00", reviews: "2000 reviews", images: ["/perfume/image7.jpeg", "/perfume/image20.jpeg"] },
    { id: 8, title: "Bliss Notes", price: "$42.00", reviews: "5000 reviews", images: ["/perfume/image8.jpeg", "/perfume/image21.jpeg"] },
    { id: 9, title: "Velvet Essence", price: "$37.00", reviews: "4900 reviews", images: ["/perfume/image9.jpeg", "/perfume/image22.jpeg"] },
    { id:10, title: "Lush Scent", price: "$46.00", reviews: "6040 reviews", images: ["/perfume/image10.jpeg", "/perfume/image23.jpeg"] },
    { id:11, title: "Aroma Bliss", price: "$42.00", reviews: "5000 reviews", images: ["/perfume/image11.jpeg", "/perfume/image24.jpeg"] },
    { id:12, title: "Euphoria Essence", price: "$37.00", reviews: "4900 reviews", images: ["/perfume/image12.jpeg", "/perfume/image25.jpeg"] },
    { id:13, title: "Serene Scents", price: "$46.00", reviews: "6040 reviews", images: ["/perfume/image13.jpeg", "/perfume/image26.jpeg"] },
   ];

  const products4 = [
    { id: 1, title: "Echo Beat", price: "$20.00", reviews:"5000 reviews", images: ["/earbuds/image1.jpeg", "/earbuds/image11.jpeg"] },
    { id: 2, title: "Pure Sound", price: "$25.00", reviews: "3000 reviews", images: ["/earbuds/image2.jpeg", "/earbuds/image12.jpeg"] },
    { id: 3, title: "Wave Pods", price: "$28.00", reviews: "6000 reviews", images: ["/earbuds/image3.jpeg", "/earbuds/image13.jpeg"] },
    { id: 4, title:"Echo Buds", price: "$35.00", reviews: "4560 reviews", images: ["/earbuds/image4.jpeg", "/earbuds/image14.jpeg"] },
    { id: 5, title: "Sound Flow", price: "$30.00", reviews: "8750 reviews", images: ["/earbuds/image5.jpeg", "/earbuds/image15.jpeg"] },
    { id: 6, title: "Vibe Pods", price: "$40.00", reviews: "4000 reviews", images: ["/earbuds/image6.jpeg", "/earbuds/image16.jpeg"] },
    { id: 7, title: "Sonic Wave", price: "$34.00", reviews: "2000 reviews", images: ["/earbuds/image7.jpeg", "/earbuds/image17.jpeg"] },
    { id: 8, title: "Crystal Beat", price: "$42.00", reviews: "5000 reviews", images: ["/earbuds/image8.jpeg", "/earbuds/image18.jpeg"] },
    { id: 9, title: "Echo Groove", price: "$37.00", reviews: "4900 reviews", images: ["/earbuds/image9.jpeg", "/earbuds/image19.jpeg"] },
    { id:10, title: "Pure Harmony", price: "$46.00", reviews: "6040 reviews", images: ["/earbuds/image10.jpeg", "/earbuds/image20.jpeg"] }
  ];
;

const Page: React.FC = () => {
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [scrollIndex1, setScrollIndex1] = useState(0);
  const [scrollIndex2, setScrollIndex2] = useState(0);
  const [scrollIndex3, setScrollIndex3] = useState(0);
  const [scrollIndex4, setScrollIndex4] = useState(0);
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

    const productInterval4 = setInterval(() => {
      setScrollIndex4((prevIndex) => (prevIndex + 1) % products4.length);
    }, 3000);

    return () => {
      clearInterval(productInterval1);
      clearInterval(productInterval2);
      clearInterval(productInterval3);
      clearInterval(productInterval4);
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

      <nav className="bg-white flex items-center justify-between p-4 shadow-md">
        <div className="flex space-x-6">
          {["Bracelet Watches", "Band Watches", "Perfumes", "Earbuds"].map((item, index) => (
            <a key={index} href="#" className="navbar-glow hover:font-bold">
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

      {/* Top Slider */}
      <div
        className="w-full h-[85vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000 mb-10 relative"
        style={{
          backgroundImage: `url(${topSliderImages[topImageIndex]})`,
        }}
      >
        <div className="absolute left-10 text-gray-200 e z-10 mt-80 ">
          <h1 className="text-4xl font-bold animate-slideIn">Elegance Redefined and Style</h1>
          <h2 className="text-6xl font-bold mt-4 animate-slideIn">Luxury Essentials</h2>
          <h2 className="text-6xl font-bold mt-2 animate-slideIn">Timeless Essentials</h2>
        </div>
      </div>

      {/* Product Sections */}
      {[{ products: products1, title: "Bracelet Watches", scrollIndex: scrollIndex1 }, { products: products2, title: "Band Watches", scrollIndex: scrollIndex2 }, { products: products3, title: "Perfumes", scrollIndex: scrollIndex3 } , { products: products4, title: "Earbuds", scrollIndex: scrollIndex4 }].map((section, idx) => (
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
                    <Image
                      src={isHovered[product.id] ? product.images[1] : product.images[0]}
                      alt={product.title}
                      className={`h-full w-full object-cover rounded-sm transition-transform duration-300 ${
                        isHovered[product.id] ? "scale-105" : "scale-100"
                      }`}
                      width={240} // Specify width for the Image component
                      height={240} // Specify height for the Image component
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
{/* Contact Section */}
<section id="contact" className="p-10  ">
        <h2 className="text-3xl font-bold mb-6 underline">CONTACT US</h2>
        <div className="bg-gray-800 p-6 rounded-xl space-y-6 text-white">
          <p className="text-lg">
            Have a question, want to leave feedback, or need support? Fill out the form below!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input type="text" className="w-full p-2 rounded-md bg-gray-600 border border-gray-700 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Product Name</label>
              <input type="text" className="w-full p-2 rounded-md bg-gray-600 border border-gray-700 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Payment</label>
              <input type="text" className="w-full p-2 rounded-md bg-gray-600 border border-gray-700 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full p-2 rounded-md bg-gray-600 border border-gray-700 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input type="text" className="w-full p-2 rounded-md bg-gray-600 border border-gray-700 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium">Review</label>
              <textarea className="w-full p-2 rounded-md bg-gray-600 border border-gray-700 focus:outline-none" rows={5}></textarea>
            </div>
            <button type="submit" className="bg-lime-500 px-6 py-2 rounded-full">
              Submit
            </button>
          </form>
        </div>
      </section>

      <hr className="border-gray-700" />

<footer className="bg-gray-800 text-white text-center p-4">
      <p>© 2024 Ubaid Raza. All Rights Reserved.</p>
     
    </footer>


    </div>

  );
};

export default Page;
