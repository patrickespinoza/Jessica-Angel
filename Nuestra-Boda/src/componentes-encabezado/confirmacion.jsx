import React, { useState } from "react";

const Confirmacion = () => {
  const [form, setForm] = useState({
    nombre: "",
    asistencia: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbzWYLN9cPrTn5kfUhM39Owjhw3UzasYK9-qCo78KQx9mtcrNrkHyVK2rM1IfHXkImNH/exec";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarConfirmacion = async (e) => {
    e.preventDefault();

    if (!form.nombre.trim()) {
      setError("Por favor escribe tu nombre y apellido.");
      return;
    }

    if (!form.asistencia) {
      setError("Por favor confirma tu asistencia.");
      return;
    }

    setEnviando(true);
    setEnviado(false);
    setError("");

    try {
      const respuesta = await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify({
          nombre: form.nombre,
          asistencia: form.asistencia,
          mensaje: form.mensaje,
        }),
      });

      const data = await respuesta.json();

      if (data.success) {
        setEnviado(true);
        setForm({
          nombre: "",
          asistencia: "",
          mensaje: "",
        });
      } else {
        setError("No se pudo enviar la confirmación.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Ocurrió un error al enviar. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="w-full bg-[#F8F4EB] py-20 px-5 flex items-center justify-center overflow-hidden">
      <div
        className="
          relative
          w-full
          max-w-3xl
          bg-[#FFFDF8]
          border
          border-[#D7C28A]
          shadow-[0_24px_70px_rgba(100,75,35,0.10)]
          px-6
          py-14
          sm:px-12
          sm:py-16
          text-center
          overflow-hidden
        "
      >
        {/* Marco interior */}
        <div className="absolute inset-4 border border-[#E7D8AE] pointer-events-none" />

        {/* Brillos suaves */}
        <div className="absolute -top-28 -left-28 w-72 h-72 bg-[#E8D8A8]/35 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-[#F1E2B8]/35 rounded-full blur-3xl" />

        <div className="relative z-10">
          <p className="uppercase tracking-[0.45em] text-[#B89B5E] text-xl sm:text-xl font-semibold font-cursiveDancing">
            RSVP
          </p>

          <h1 className="font-cursiveDancing text-[#40362B] text-4xl sm:text-5xl mt-5 leading-tight">
            Confirmar Asistencia
          </h1>

          <div className="w-24 h-[1px] bg-[#b9a474] mx-auto my-8"></div>

          <p className="max-w-md mx-auto text-[#40362B] text-3xl leading-tight mb-10 font-cursiveDancing font-black">
            Será un honor contar con tu presencia en este día tan especial.
            Por favor confirma tu asistencia antes del dia 10 de Julio.
          </p>

          <form onSubmit={enviarConfirmacion} className="space-y-6">
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Nombre y apellido"
              disabled={enviando}
              className="
                w-full
                bg-white
                border
                border-[#D7C28A]/80
                text-[#40362B]
                placeholder:text-[#9B8A72]
                px-6
                py-4
                outline-none
                focus:border-[#b9a474]
                focus:shadow-[0_0_0_3px_rgba(201,164,76,0.15)]
                transition
                font-cursiveDancing
              "
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label
                className={`
                  cursor-pointer
                  px-6
                  py-4
                  border
                  transition-all
                  duration-300
                  font-cursiveDancing
                  ${
                    form.asistencia === "Sí asistiré"
                      ? "bg-[#b9a474] text-white border-[#b9a474] shadow-[0_12px_30px_rgba(201,164,76,0.25)]"
                      : "bg-white text-[#40362B] border-[#D7C28A]/80 hover:border-[#b9a474]"
                  }
                `}
              >
                <input
                  type="radio"
                  name="asistencia"
                  value="Sí asistiré"
                  checked={form.asistencia === "Sí asistiré"}
                  onChange={handleChange}
                  disabled={enviando}
                  className="hidden"
                />
                Sí asistiré
              </label>

              <label
                className={`
                  cursor-pointer
                  px-6
                  py-4
                  border
                  transition-all
                  duration-300
                  font-cursiveDancing
                  ${
                    form.asistencia === "No podré asistir"
                      ? "bg-[#b9a474] text-white border-[#b9a474] shadow-[0_12px_30px_rgba(201,164,76,0.25)]"
                      : "bg-white text-[#40362B] border-[#D7C28A]/80 hover:border-[#b9a474]"
                  }
                `}
              >
                <input
                  type="radio"
                  name="asistencia"
                  value="No podré asistir"
                  checked={form.asistencia === "No podré asistir"}
                  onChange={handleChange}
                  disabled={enviando}
                  className="hidden"
                />
                No podré asistir
              </label>
            </div>

            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Mensaje para los novios"
              disabled={enviando}
              rows="4"
              className="
                w-full
                bg-white
                border
                border-[#D7C28A]/80
                text-[#40362B]
                placeholder:text-[#9B8A72]
                px-6
                py-4
                outline-none
                focus:border-[#b9a474]
                focus:shadow-[0_0_0_3px_rgba(201,164,76,0.15)]
                transition
                resize-none
                font-cursiveDancing
              "
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={enviando}
              className={`
                w-full
                px-8
                py-4
                uppercase
                tracking-[0.25em]
                text-xs
                transition-all
                duration-300
                border
                border-[#b9a474]
                flex
                items-center
                justify-center
                gap-3
                ${
                  enviando
                    ? "bg-[#b9a474]/50 text-white cursor-not-allowed"
                    : "bg-white text-[#B89B5E] hover:bg-[#b9a474] hover:text-white hover:shadow-xl"
                }
              `}
            >
              {enviando && (
                <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
              )}

              {enviando ? "Cargando..." : "Enviar Confirmación"}
            </button>
          </form>

          {enviado && (
            <p className="mt-8 text-[#B89B5E] font-cursiveDancing text-3xl">
              Gracias, tu confirmación ha sido enviada.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Confirmacion;