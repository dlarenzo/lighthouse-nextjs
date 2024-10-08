import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-[75vh] md:h-[80vh] mb-12 bg-[url('/images/hero-bg.jpeg')] bg-fixed bg-center bg-cover">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[80vh]  bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-4rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
