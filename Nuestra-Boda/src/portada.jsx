import React from "react";

export default function Portada() {
  return (
    <section className="w-full h-screen overflow-hidden bg-[#F8F4EB] relative">

      {/* MOBILE */}
      <img
        src="/portada.png"
        alt="Portada móvil"
        className="
          block
          md:hidden
          w-full
          h-full
          object-cover
          object-center
          select-none
          pointer-events-none
        "
        draggable={false}
      />

      {/* DESKTOP / TABLET */}
      <img
        src="/portadadesk.png"
        alt="Portada desktop"
        className="
          hidden
          md:block
          w-full
          h-full
          object-cover
          object-center
          select-none
          pointer-events-none
        "
        draggable={false}
      />

    </section>
  );
}