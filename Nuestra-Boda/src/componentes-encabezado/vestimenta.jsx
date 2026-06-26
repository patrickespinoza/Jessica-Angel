import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#F8F4EB] py-20 px-5 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative
          max-w-6xl
          mx-auto
          bg-[#FFFDF8]
          border
          border-[#D7C28A]
          shadow-[0_24px_70px_rgba(100,75,35,0.10)]
          overflow-hidden
        "
      >
        {/* Marco doble */}
        <div className="absolute inset-4 border border-[#E7D8AE] pointer-events-none z-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
             
            "
          >
            <img
  src="/dresscode2.png"
  alt="Vestimenta"
  className="
    w-full
    h-full
    object-contain
    object-center
    
  "
/>

            <div className="absolute inset-0 bg-[#F8F4EB]/10" />

            {/* Línea dorada sobre imagen */}
            <div className="absolute top-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />
          </motion.div>

          {/* TEXTO */}
          <div
            className="
              relative
              flex flex-col
              items-center
              justify-center
              text-center
              px-8
              py-16
              sm:px-14
              sm:py-20
              lg:px-16
              bg-[#FFFDF8]
            "
          >
            <div className="absolute -top-28 -right-28 w-72 h-72 bg-[#E8D8A8]/35 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-[#F8F4EB] rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.45em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="
                  uppercase
                  text-[11px]
                  sm:text-sm
                  tracking-[0.25em]
                  text-[#B89B5E]
                  font-semibold
                "
              >
                Código de Vestimenta
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-[1px] bg-[#C9A44C] mx-auto mt-6"
              />

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25 }}
                viewport={{ once: true }}
                className="
                  mt-8
                  font-playfair
                  text-[#40362B]
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  leading-tight
                "
              >
                Vestimenta Formal
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45 }}
                viewport={{ once: true }}
                className="
                  mt-8
                  max-w-md
                  mx-auto
                  text-[#6F6458]
                  leading-8
                  text-base
                  sm:text-lg
                  font-light
                "
              >
                Queremos compartir contigo una noche elegante y especial.
                Te invitamos a asistir con vestimenta formal para celebrar
                juntos este momento inolvidable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.65 }}
                viewport={{ once: true }}
                className="
                  mt-10
                  border
                  border-[#D7C28A]
                  bg-[#F8F4EB]
                  px-6
                  py-4
                "
              >
                <p className="font-[DancingScript] text-3xl text-[#B89B5E]">
                  Elegancia & Glamour
                </p>

                <p className="mt-2 uppercase tracking-[0.25em] text-[10px] sm:text-xs text-[#7B6A56]">
                  Celebración especial
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vestimenta;