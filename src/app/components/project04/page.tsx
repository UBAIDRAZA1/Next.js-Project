import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
      <section className="flex flex-col md:flex-row items-center justify-center p-8">
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
      </section>
      <hr className="border-gray-700" />

      {/* About Section */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold mb-6 underline">ABOUT ME</h2>
        <div className="bg-gray-900 p-6 rounded-xl space-y-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <Image src="/image04.jpeg" alt="Web Development" width={450} height={450} className="rounded-xl" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-bold">
                Ubaid Raza | Enthusiastic Frontend Student at GIAC, Exploring Web Development.
              </h2>
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
      </section>
      <hr className="border-gray-700" />

      {/* Education Section */}
      <section id="education" className="p-10">
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
      </section>
      <hr className="border-gray-700" />

      {/* Project Section */}
      <section id="project" className="p-10">
        <h2 className="text-3xl font-bold mb-6 underline">PROJECT</h2>
        <div className="bg-gray-900 p-6 rounded-xl space-y-10">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <Image src="/image07.jpeg" alt="Web Design" width={450} height={300} className="rounded-xl" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Website</h3>
              <p className="text-lg">
                At Urdu Books, we believe in the transformative power of books. Our mission is to provide you with a diverse range of literary treasures, from timeless classics to the latest bestsellers. Whether you’re a passionate reader, a student seeking academic resources, or simply someone who loves to explore new genres, we’ve got something for everyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image src="/image08.jpeg" alt="Project Image 2" width={450} height={300} className="rounded-xl" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Website Collection</h3>
              <p className="text-lg">
                Extensive Collection: Our carefully curated collection features books from various genres, including fiction, non-fiction, self-help, academic, and more. We regularly update our inventory to ensure you have access to the latest releases and hidden gems.
              </p>
           

            </div>
          </div>
        </div>
      </section><hr className="border-gray-700" />

      {/* Contact Section */}
      <section id="contact" className="p-10">
        <h2 className="text-4xl font-bold mb-6">LET'S CONNECT</h2>
        <form className="space-y-4 max-w-lg mx-auto">
          <input className="w-full p-4 bg-gray-900 text-white rounded" type="text" placeholder="Name" />
          <input className="w-full p-4 bg-gray-900 text-white rounded" type="email" placeholder="Email" />
          <input className="w-full p-4 bg-gray-900 text-white rounded" type="text" placeholder="Subject" />
          <textarea className="w-full p-4 bg-gray-900 text-white rounded" placeholder="Message"></textarea>
          <button className="bg-lime-500 px-6 py-2 rounded-full w-full">SUBMIT</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center">
        <p>© 2024 Ubaid Raza</p>
      </footer>
    </div>
  );
}
