"use client"; // We are handling interactions

import Image from 'next/image';

export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl mt-12 font-bold">Welcome to My Portfolio</h2>
          <p className="text-xl mt-4">I am a full-stack developer who loves building web apps.</p>
          {/* Image */}
          <Image
            src="/image.jpeg" // Replace with an image URL
            alt="Profile"
            className="mx-auto mt-8 rounded-full"
            width={192}
            height={192}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg mt-4">
            I am a passionate developer with experience in modern web technologies like React, Next.js, and Node.js. I enjoy solving challenging problems and creating seamless user experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">Project 1</h3>
              <p className="mt-2">A web app built using React and Node.js.</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">Project 2</h3>
              <p className="mt-2">An e-commerce platform built using Next.js and MongoDB.</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">Project 3</h3>
              <p className="mt-2">A blog platform with a modern UI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-lg mt-4">Feel free to reach out to me through the following platforms:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com" className="hover:text-gray-500">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-gray-500">LinkedIn</a>
            <a href="mailto:ubaidraza3657767@gmail.com" className="hover:text-gray-500">Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
