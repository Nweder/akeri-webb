// src/App.jsx
import { useRef } from 'react';
import './index.css';

export default function App() {
  const videoRef = useRef(null);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* 📽️ Bakgrundsvideo */}
      <video
        key="truck-video"
        ref={videoRef}
        src="/truck.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => videoRef.current?.play()}
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      {/* 📋 Huvudinnehåll */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 sm:py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
          Åkeri AB
        </h1>
        <p className="text-lg sm:text-xl mt-4 drop-shadow-md">
          Trygg transport – Snabb leverans
        </p>
        <a
          href="#kontakt"
          className="mt-8 bg-yellow-400 text-black text-sm sm:text-base py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Kontakta oss
        </a>
      </div>

      {/* 🔽 Sektioner under videon */}
      <div className="relative z-10 bg-black/80 backdrop-blur-sm">
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Om oss</h2>
          <p>
            Vi kör i hela landet och erbjuder fjärrtransporter, specialkörningar och mycket mer.
          </p>
        </section>

        <section id="kontakt" className="max-w-3xl mx-auto px-4 py-12 border-t border-white/20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Kontakt</h2>
          <p>
            Ring <a href="tel:+46701234567" className="underline">070-123 45 67</a>
            &nbsp;eller mejla&nbsp;
            <a href="mailto:info@akeri.se" className="underline">info@akeri.se</a>
          </p>
        </section>
      </div>
    </div>
  );
}
