'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev); // Toggle visibility every 5 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-xl font-bold underline">UBAID RAZA</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#project">Project</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <hr className="border-gray-700" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1, delay: isVisible ? 0 : 2 }}
        exit={{ opacity: 0, y: 50 }}
        className="flex flex-col md:flex-row items-center justify-center p-8"
      >
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">HELLO, I AM</h3>
          <h3 className="text-2xl md:text-5xl font-bold">MUHAMMAD UBAID RAZA</h3>
          <p className="mt-4 text-lg">
            A passionate Student of IT, Cloud Computing, Gen AI, Web 3.0 & Web Developer at Governor House Karachi.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <button className="bg-lime-500 px-6 py-2 rounded-full">Contact Me</button>
            <a href="#" className="text-white">LinkedIn</a>
            <a href="https://github.com/UBAIDRAZA1" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image src="/image03.jpeg" alt="Ubaid Raza" width={300} height={300} className="rounded-xl" />
        </div>
      </motion.section>
      <hr className="border-gray-700" />

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        transition={{ duration: 1, delay: isVisible ? 0 : 2 }}
        exit={{ opacity: 0, x: 100 }}
        id="about"
        className="p-10"
      >
        <h2 className="text-3xl font-bold mb-6 underline">ABOUT ME</h2>
        <div className="bg-gray-900 p-6 rounded-xl space-y-10">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <Image src="/image04.jpeg" alt="Web Development" width={450} height={450} className="rounded-xl" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-bold">Ubaid Raza | Enthusiastic Frontend Student at GIAC, Exploring Web Development.</h2>
              <p className="text-lg">
                I am a passionate IT student specializing in Cloud Computing, General AI, and Web 3.0 technologies.
                Currently, I am working as a Web Developer at Governor House Karachi. I have strong skills in web
                development with a solid understanding of HTML, CSS, JavaScript, and TypeScript. My goal is to continue
                expanding my expertise in modern web technologies.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image src="/image04.jpeg" alt="Web Development" width={450} height={450} className="rounded-xl" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg">
                I am a web developer who passionately expresses my creativity in the digital world. I bring with me a
                wealth of experience and a knack for tackling various challenges. My goal is not just to build websites
                but to provide excellent solutions to my clients by enhancing innovation and user experience in every
                project. My favorite technologies include HTML, CSS, JavaScript, and PHP, and I am always ready to learn
                and adopt new tools and techniques.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <hr className="border-gray-700" />

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        transition={{ duration: 1, delay: isVisible ? 0 : 2 }}
        exit={{ opacity: 0, x: 100 }}
        id="education"
        className="p-10"
      >
        <h2 className="text-3xl font-bold mb-6 underline">Educational Qualification</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-bold">BS Software Engineering</h3>
            <p>From Ilma University (to be continued)</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-bold">Intermediate (Pre-Engineering)</h3>
            <p>From Board of Intermediate Education, Karachi (2021 with B Grade)</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-bold">Matriculation (Computer Science)</h3>
            <p>From Board of Secondary Education, Karachi (2019 with A Grade)</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-bold">CIT Web Development</h3>
            <p>From Institute of Business Management (IOBM), NAVTTC Program</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-bold">Darse Nizami (Alim Course, 8 years)</h3>
            <p>From Board of Kanzul Madaris Pakistan (5 years completed, ongoing)</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-bold">Hifzul Quran ul Karim (Hafiz)</h3>
            <p>From Madarsa tul Madina</p>
          </div>
        </div>
      </motion.section>
      <hr className="border-gray-700" />

{/* Project Section */}
<motion.section
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
  transition={{ duration: 1, delay: isVisible ? 0 : 2 }}
  exit={{ opacity: 0, x: 100 }}
  id="project"
  className="p-10"
>
  <h2 className="text-3xl font-bold mb-6 underline">PROJECT 01</h2>
  <div className="bg-gray-900 p-6 rounded-xl space-y-10">
    {/* Urdu Books Project */}
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <Image src="/image07.jpeg" alt="Web Design - Urdu Books" width={450} height={300} className="rounded-xl" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">Website: Urdu Books</h3>
        <p className="text-lg">
          At Urdu Books, we believe in the transformative power of books. Our mission is to make literature
          accessible to everyone, fostering a love for reading in our community. Join us on this journey of
          knowledge and imagination.
        </p>
        <a href="https://urdusharah.netlify.app" className="text-lime-500 underline hover:text-lime-400">View Project</a>
      </div>
    </div>

    {/* Urdu Bazar Project */}
    <div className="flex flex-col md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image src="/image07.jpeg" alt="Web Design - Urdu Bazar" width={450} height={300} className="rounded-xl" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">Website: Urdu Bazar</h3>
        <p className="text-lg">
          Urdu Bazar provides a platform for book lovers to discover, buy, and sell Urdu literature. Our
          website is designed to connect readers with authors and publishers, promoting Urdu literature across
          the globe.
        </p>
        <a href="https://urdusharah.netlify.app" className="text-lime-500 underline hover:text-lime-400">View Project</a>
      </div>
    </div>
  </div>
</motion.section>


<hr className="border-gray-700" />


{/* Project Section */}
<motion.section
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
  transition={{ duration: 1, delay: isVisible ? 0 : 2 }}
  exit={{ opacity: 0, x: 100 }}
  id="project"
  className="p-10"
>
  <h2 className="text-3xl font-bold mb-6 underline">PROJECT 02</h2>
  <div className="bg-gray-900 p-6 rounded-xl space-y-10">
    {/* Urdu Books Project */}
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <Image src="/image14.png" alt="Web Design - Urdu Books" width={450} height={300} className="rounded-xl" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">Classic Watches Collection: Chain and Leather Straps</h3>
        <p className="text-lg">
        Explore our refined collection of chain and leather strap watches, crafted for elegance and durability. Each watch combines timeless design with quality materials, offering a sophisticated style for any occasion. Choose your perfect fit—sleek chain or classic leather.
        </p>
        <a href="" className="text-lime-500 underline hover:text-lime-400">View Project</a>
      </div>
    </div>

    {/* Urdu Bazar Project */}
    <div className="flex flex-col md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image src="/image15.png" alt="Web Design - Urdu Bazar" width={450} height={300} className="rounded-xl" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">Exclusive Perfume & Earbuds Collection</h3>
        <p className="text-lg">
        Discover our selection of luxurious perfumes and high-quality earbuds. Our perfumes are crafted to leave a lasting impression with unique, captivating scents. Alongside, our earbuds offer crystal-clear sound and comfortable fit, perfect for music lovers and on-the-go professionals. Indulge in elegance and quality with every choice.
        </p>
        <a href="#" className="text-lime-500 underline hover:text-lime-400">View Project</a>
      </div>
    </div>
  </div>
</motion.section>


<hr className="border-gray-700" />


{/* Contact Section */}
<motion.section
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
  transition={{ duration: 1, delay: isVisible ? 0 : 2 }}
  exit={{ opacity: 0, x: 100 }}
  id="contact"
  className="p-10"
>
  <h2 className="text-3xl font-bold mb-6 underline">CONTACT</h2>
  <div className="bg-gray-900 p-6 rounded-xl space-y-6">
    <p className="text-lg">
      If you&apos;d like to discuss a project or just want to say hi, feel free to reach out!
    </p>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none" rows={5}></textarea>
      </div>
      <button type="submit" className="bg-lime-500 px-6 py-2 rounded-full">
        Send Message
      </button>
    </form>
  </div>
</motion.section>

<hr className="border-gray-700" />

{/* Footer */}
<footer className="text-center p-6 bg-gray-900 text-gray-400">
  <p>&copy; 2024 Ubaid Raza. All rights reserved.</p>
</footer>

</div>
);
}