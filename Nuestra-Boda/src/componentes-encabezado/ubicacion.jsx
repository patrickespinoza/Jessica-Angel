import React from "react";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <section className="w-full bg-[#F8F4EB] py-24 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* FECHA */}
        <div className="text-center mb-20 font-cursiveDancing">

          <p className="uppercase tracking-[0.45em] text-[#b9a474] text-xs sm:text-sm font-semibold">
            {dia}
          </p>

          <h1 className="mt-5 font-cursiveDancing text-[#40362B] text-7xl sm:text-8xl md:text-9xl leading-none">
            {fecha}
          </h1>

          <div className="w-24 h-[1px] bg-[#b9a474] mx-auto my-6"></div>

          <p className="text-[#7B6A56] text-2xl sm:text-3xl tracking-[0.25em]">
            {mesAnio}
          </p>

        </div>

        {/* TARJETA */}
        <div className="relative font-cursiveDancing">

          {/* Marco exterior */}
          <div className="absolute inset-0 border border-[#D7C28A] pointer-events-none"></div>

          {/* Marco interior */}
          <div className="absolute inset-4 border border-[#E7D8AE] pointer-events-none"></div>

          <div
            className="
              relative
              bg-white
              px-8
              py-16
              sm:px-16
              sm:py-20
              shadow-[0_20px_60px_rgba(100,75,35,0.08)]
              
            "
          >

            {/* Línea superior */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-[2px] bg-[#b9a474]"></div>
            </div>

            {/* TITULO */}
            <h2 className="text-center font-cursiveDancing text-[#40362B] text-4xl sm:text-5xl">
              {titulo}
            </h2>

            <p className="text-center text-[#b9a474] uppercase tracking-[0.4em] text-xs mt-3">
              Wedding Day
            </p>

            <div className="w-16 h-[1px] bg-[#D7C28A] mx-auto mt-6"></div>

            {/* CONTENIDO */}

            <div className="mt-14 space-y-12">

              <div className="text-center">

                <p className="uppercase tracking-[0.35em] text-[#b9a474] text-xs mb-4">
                  Hora
                </p>

                <p className="font-cursiveDancing text-[#40362B] text-3xl">
                  {hora}
                </p>

              </div>

              <div className="text-center">

                <p className="uppercase tracking-[0.35em] text-[#b9a474] text-xs mb-4">
                  Lugar
                </p>

                <h3 className="font-cursiveDancing text-[#40362B] text-3xl leading-snug">
                  {lugar}
                </h3>

                <p className="mt-5 text-[#6F6458] leading-8 max-w-lg mx-auto text-base">
                  {direccion}
                </p>

              </div>

            </div>

            {/* BOTON */}

            <div className="flex justify-center mt-16">

              <a
                href={ubicacion}
                target="_blank"
                rel="noreferrer"
                className="
                  border
                  border-[#b9a474]
                  text-[#b9a474]
                  bg-white
                  px-10
                  py-4
                  uppercase
                  tracking-[0.25em]
                  text-xs
                  transition-all
                  duration-300
                  hover:bg-[#b9a474]
                  hover:text-white
                  hover:shadow-xl
                "
              >
                Ver Ubicación
              </a>

            </div>

            {/* Línea inferior */}

            <div className="flex justify-center mt-14">
              <div className="w-20 h-[2px] bg-[#b9a474]"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Celebracion;