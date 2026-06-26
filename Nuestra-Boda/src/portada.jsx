import React, { useRef, useState } from "react";

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <img
          src="/principla-01.jpeg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45" />

        {/* Marco dorado */}
        <div className="absolute inset-5 sm:inset-8 border border-[#D7C28A]/70 pointer-events-none" />
        <div className="absolute inset-8 sm:inset-12 border border-[#F8F4EB]/35 pointer-events-none" />

        {/* Contenido */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 text-[#F8F4EB]">
          <p className="uppercase tracking-[0.45em] text-[11px] sm:text-sm md:text-base text-[#D7C28A] mb-6">
            Nuestra Boda
          </p>

          <div className="w-20 sm:w-28 h-[1px] bg-[#D7C28A] mb-8" />

          <h1
            className="
              font-playfair
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-none
              font-light
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
            "
          >
            Jessica
          </h1>

          <p
            className="
              font-[DancingScript]
              text-[#D7C28A]
              text-6xl
              sm:text-7xl
              md:text-8xl
              leading-none
              my-2
              drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
            "
          >
            &
          </p>

          <h1
            className="
              font-playfair
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-none
              font-light
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
            "
          >
            Ángel
          </h1>

          <div className="w-20 sm:w-28 h-[1px] bg-[#D7C28A] mt-9 mb-7" />

          <p
            className="
              font-playfair
              text-lg
              sm:text-2xl
              md:text-3xl
              tracking-[0.35em]
              text-[#F8F4EB]
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
            "
          >
            25 · 07 · 2026
          </p>
        </div>
      </section>
    </div>
  );
}