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
          titulo="Recepción"
          dia="Sabado"
          fecha="25"
          mesAnio="Julio 2026"
          hora="4:30 PM"
          lugar="Salón ilusiones"
          direccion="Av. Gregorio Méndez Magaña 2720, Atasta de Serra, 86100 Villahermosa, Tab."
          ubicacion="https://maps.app.goo.gl/oZBfi9C5BEBnouBMA"
        />
        <Celebracion
          titulo="Misa"
          hora="4:30 PM"
          lugar="Parroquia de San Sebastán Mártir"
          direccion="Av. Gregorio Méndez Magaña 2907, Atasta de Serra, 86100 Villahermosa, Tab."
          ubicacion="https://maps.app.goo.gl/UD4DfL9BKCJCGTvQ6"
        />

      </div>

      {/* SECCIÓN VESTIMENTA */}
      <Vestimenta />

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>

      {/* CONFIRMACIÓN */}

      {/* IMAGEN FINAL */}
      <div className="flex flex-col items-center justify-center bg-[#F7F4ED]">

        <img
          src="/finalboda.webp"
          alt="acepto"
          className="w-full max-w-5xl object-cover"
        />

      </div>
      <Confirmacion/>

    </div>
  );
}