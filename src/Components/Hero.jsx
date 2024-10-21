import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue mb-4">Hi, I'm Hariharan Rajan</h1>
        <p className="text-xl text-blueo mb-8">A passionate Developer</p>
        <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;