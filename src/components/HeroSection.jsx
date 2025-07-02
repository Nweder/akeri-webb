// src/components/HeroSection.jsx

function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/truck.mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Välkommen till Åkeri AB
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Trygg transport - Snabb leverans
        </p>
        <a
          href="#kontakt"
          className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-300 transition"
        >
          Kontakta oss
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
