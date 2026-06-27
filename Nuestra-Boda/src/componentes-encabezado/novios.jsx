import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <section className="w-full bg-[#F8F4EB] px-4 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative
            bg-[#FFFDF8]
            border border-[#C9A44C]/50
            shadow-[0_30px_90px_rgba(105,76,25,0.18)]
            px-5 py-14 sm:px-12 sm:py-20
            overflow-hidden
          "
        >
          {/* Marco doble */}
          <div className="absolute inset-4 border border-[#C9A44C]/45 pointer-events-none" />
          <div className="absolute inset-7 border border-[#E8D8A8]/50 pointer-events-none" />

          {/* Ornamentos de esquina */}
          <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-[#C9A44C]" />
          <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#C9A44C]" />
          <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#C9A44C]" />
          <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-[#C9A44C]" />

          {/* Brillos */}
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#E8D8A8]/35 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-[360px] h-[360px] bg-[#C9A44C]/15 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Monograma */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                mx-auto
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full
                border border-[#C9A44C]
                flex items-center justify-center
                bg-white/70
                shadow-[0_15px_40px_rgba(105,76,25,0.12)]
              "
            >
              <span className="font-playfair text-4xl sm:text-5xl text-[#B89B5E]">
                J
              </span>
              <span className="font-[DancingScript] text-4xl sm:text-5xl text-[#C9A44C] mx-1">
                &
              </span>
              <span className="font-playfair text-4xl sm:text-5xl text-[#B89B5E]">
                A
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                mt-10
                uppercase
                text-[#B89B5E]
                tracking-[0.28em]
                text-[11px] sm:text-sm
                font-semibold
              "
            >
              Nuestra Boda
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                mt-8
                font-playfair
                text-[#3E3529]
                text-4xl sm:text-6xl md:text-7xl
                leading-tight
              "
            >
              Jessica Paola De la Cruz Herrera
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
              viewport={{ once: true }}
              className="
                my-3
                font-[DancingScript]
                text-[#C9A44C]
                text-6xl sm:text-7xl
                leading-none
              "
            >
              &
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="
                font-playfair
                text-[#3E3529]
                text-4xl sm:text-6xl md:text-7xl
                leading-tight
              "
            >
              Ángel del Jesús Morales Martinez
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55 }}
              viewport={{ once: true }}
              className="
                mt-8
                max-w-xl mx-auto
                text-[#7A6A55]
                text-base sm:text-lg
                leading-relaxed
                font-light
              "
            >
              Tenemos el honor de invitarte a celebrar el inicio de nuestra historia juntos.
            </motion.p>

            {/* Padres */}
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="
                  bg-[#F8F4EB]/80
                  border border-[#D8BE76]/45
                  px-6 py-8
                  text-center
                "
              >
                <p className="uppercase tracking-[0.22em] text-[#B89B5E] text-xs mb-5">
                  Padres de la Novia
                </p>
                <p className="font-playfair text-2xl text-[#3E3529]">Roberto De la Cruz Carrillo</p>
                <p className="font-playfair text-2xl text-[#3E3529] mt-2">Ninive Herrera Damian</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.85 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  border border-[#C9A44C]/60
                  px-6 py-8
                  flex flex-col items-center justify-center
                  shadow-[0_20px_45px_rgba(105,76,25,0.12)]
                "
              >
                <p className="font-[DancingScript] text-4xl text-[#C9A44C]">
                  Con la bendición
                </p>
                <div className="w-20 h-[1px] bg-[#C9A44C] my-5" />
                <p className="text-[#7A6A55] text-sm uppercase tracking-[0.25em]">
                  De nuestros padres
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="
                  bg-[#F8F4EB]/80
                  border border-[#D8BE76]/45
                  px-6 py-8
                  text-center
                "
              >
                <p className="uppercase tracking-[0.22em] text-[#B89B5E] text-xs mb-5">
                  Padres del Novio
                </p>
                <p className="font-playfair text-2xl text-[#3E3529]">Abelardo Morales Hernandez</p>
                <p className="font-playfair text-2xl text-[#3E3529] mt-2">Rafaela Martinez Damian</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Novios;