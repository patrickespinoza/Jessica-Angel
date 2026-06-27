import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import Confirmacion from "./componentes-encabezado/confirmacion";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <Novios />
      {/* SECCIÓN CELEBRACIONES */}
      <div className="overflow-hidden">

        <Celebracion
          titulo="Misa"
          dia="Sabado"
          fecha="25"
          mesAnio="Julio 2026"
          hora="7:00 PM"
          lugar="Parroquia de San Sebastán Mártir"
          direccion="Av. Gregorio Méndez Magaña 2907, Atasta de Serra, 86100 Villahermosa, Tab."
          ubicacion="https://maps.app.goo.gl/UD4DfL9BKCJCGTvQ6"
          />
          <Celebracion
          titulo="Recepción"
            hora="8:30 PM"
            lugar="Salón ilusiones"
            direccion="Av. Gregorio Méndez Magaña 2720, Atasta de Serra, 86100 Villahermosa, Tab."
            ubicacion="https://maps.app.goo.gl/oZBfi9C5BEBnouBMA"
            />

      </div>

      {/* SECCIÓN VESTIMENTA */}
      <Vestimenta />

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>

      {/* CONFIRMACIÓN */}

      {/* IMAGEN FINAL */}
     {/* FRASE FINAL */}
<section className="w-full bg-[#F8F5EF] py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">

    {/* Línea superior */}
    <div className="flex items-center justify-center gap-5 mb-10">
      <div className="w-20 h-px bg-[#D7C28A]" />
      <div className="w-2 h-2 rounded-full bg-[#D7C28A]" />
      <div className="w-20 h-px bg-[#D7C28A]" />
    </div>

    <h2
      className="
        font-cursiveDancing
        text-4xl
        md:text-5xl
        text-[#8D6B2F]
        font-light
        mb-8
      "
    >
      La felicidad
    </h2>

    <p
      className="
        font-cursiveDancing
        text-xl
        md:text-3xl
        leading-relaxed
        text-[#5A5347]
        max-w-3xl
        mx-auto
      "
    >
      es más grande cuando se comparte con quienes
    </p>

    <p
      className="
        font-cursiveDancing
        text-[#B8924C]
        text-5xl
        md:text-7xl
        leading-none
        my-6
      "
    >
      más queremos
    </p>

    <div className="w-28 h-px bg-[#D7C28A] mx-auto my-10" />

    <p
      className="
        font-cursiveDancing
        text-2xl
        md:text-3xl
        text-[#8D6B2F]
        mb-4
      "
    >
      Confirma tu asistencia
    </p>

    <p
      className="
        font-cursiveDancing
        text-base
        md:text-lg
        tracking-wide
        text-[#6F675B]
        max-w-xl
        mx-auto
        leading-8
      "
    >
      Tu confirmación será un regalo muy especial para nosotros.
      <br />
      Esperamos contar con tu presencia para compartir este día
      tan importante en nuestras vidas.
    </p>

    {/* Línea inferior */}
    <div className="flex items-center justify-center gap-5 mt-12">
      <div className="w-20 h-px bg-[#D7C28A]" />
      <div className="text-[#D7C28A] text-xl">♥</div>
      <div className="w-20 h-px bg-[#D7C28A]" />
    </div>

  </div>
</section>
      <Confirmacion/>

    </div>
  );
}