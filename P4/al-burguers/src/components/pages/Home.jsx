import * as React from "react"

export function Home({ setPagina }) {
  // --- LÓGICA DE LA RULETA DE RESEÑAS (COLUMNA IZQUIERDA) ---
  const reseñas = [
    { id: 1, usuario: "@pedro82", texto: "¡La mejor burger de la ciudad sin duda! La salsa secreta es increíble." },
    { id: 2, usuario: "@mariagranadaa", texto: "El trato para la gente con varios alérgenos es excelente." },
    { id: 3, usuario: "@foodie77", texto: "Servicio rapidísimo, ideal para comer algo top." },
    { id: 4, usuario: "@soul01", texto: "Las patatas rústicas combinan genial con cualquier hamburguesa." },
    { id: 5, usuario: "@martitaalfacar", texto: "Me sorprendió la opción vegana, súper sabrosa y bien sazonada." },
  ]

  const [indexActivo, setIndexActivo] = React.useState(1)

  const irArriba = () => {
    if (indexActivo > 0) setIndexActivo(indexActivo - 1)
  }

  const irAbajo = () => {
    if (indexActivo < reseñas.length - 1) setIndexActivo(indexActivo + 1)
  }

  // --- LÓGICA DE NAVEGACIÓN DE LOS CÍRCULOS ---
  const manejarClicCirculo = (titulo) => {
    if (titulo === "La Carta") {
      setPagina("Carta")
    } else if (titulo === "Eventos") {
      setPagina("Eventos")
    } else setPagina("EnConstruccion");
  }

  return (
    <main className="w-full min-h-[calc(100vh-160px)] mt-24 bg-[#F9F9F9] px-6 py-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* =========================================================================
          1. COLUMNA IZQUIERDA: RESEÑAS CON RULETA
          ========================================================================= */}
      <section className="lg:col-span-3 flex flex-col items-center justify-center bg-[#422c1d]/5 p-6 rounded-3xl h-[480px] border border-[#593C28]/10">
        <h3 className="font-['Cabin'] font-bold text-[#593C28] text-center mb-6 uppercase tracking-wider text-sm">
          Reseñas
        </h3>
        
        <div className="flex flex-col items-center justify-between h-full w-full relative">
          <button 
            onClick={irArriba}
            disabled={indexActivo === 0}
            className="p-1 rounded-full text-[#593C28] hover:bg-[#593C28]/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all z-10"
            aria-label="Reseña anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>

          <div className="flex flex-col justify-center items-center gap-4 w-full overflow-hidden relative h-[280px]">
            {indexActivo > 0 ? (
              <div className="opacity-40 scale-90 blur-[1px] text-xs text-[#593C28] font-medium text-center line-clamp-1 px-4 select-none">
                "{reseñas[indexActivo - 1].texto}"
              </div>
            ) : <div className="h-4" />}

            <div className="bg-white text-[#593C28] p-6 rounded-2xl shadow-md border border-[#593C28]/10 w-full text-center transition-all duration-300 transform scale-100 flex flex-col justify-center min-h-[140px]">
              <span className="font-bold text-xs text-[#593C28]/70 mb-2 block">
                {reseñas[indexActivo].usuario}
              </span>
              <p className="font-['Cabin'] font-medium text-sm md:text-base leading-relaxed">
                "{reseñas[indexActivo].texto}"
              </p>
              <div className="text-yellow-600 text-xs mt-2">⭐⭐⭐⭐⭐</div>
            </div>

            {indexActivo < reseñas.length - 1 ? (
              <div className="opacity-40 scale-90 blur-[1px] text-xs text-[#593C28] font-medium text-center line-clamp-1 px-4 select-none">
                "{reseñas[indexActivo + 1].texto}"
              </div>
            ) : <div className="h-4" />}
          </div>

          <button 
            onClick={irAbajo}
            disabled={indexActivo === reseñas.length - 1}
            className="p-1 rounded-full text-[#593C28] hover:bg-[#593C28]/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all z-10"
            aria-label="Siguiente reseña"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
      </section>

      {/* =========================================================================
          2. COLUMNA CENTRAL: REJILLA DE CÍRCULOS CON IMÁGENES Y BOTONES CONECTADOS
          ========================================================================= */}
      <section className="lg:col-span-6 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          
          {[
            { 
              titulo: "La Carta", 
              img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" 
            },
            { 
              titulo: "Eventos", 
              img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=500" 
            },
            { 
              titulo: "Alérgenos", 
              img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500" 
            },
            { 
              titulo: "Reservas", 
              img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500" 
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-[#593C28]/20 group transition-transform hover:scale-105 duration-300"
            >
              {/* Imagen de fondo del círculo */}
              <img 
                src={item.img} 
                alt={item.titulo} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Botón translúcido encima con evento click conectado al enrutador de App.jsx */}
              <button 
                onClick={() => manejarClicCirculo(item.titulo)}
                className="absolute inset-0 bg-[#593C28]/60 group-hover:bg-[#593C28]/45 transition-colors flex items-center justify-center text-white font-['Cabin'] font-bold text-base sm:text-xl tracking-wider backdrop-blur-[1px]"
              >
                <span className="border-b-2 border-transparent group-hover:border-white transition-all py-0.5 uppercase text-shadow-sm">
                  {item.titulo}
                </span>
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================================
          3. COLUMNA DERECHA: CARRETE DE GALERÍA VERTICAL
          ========================================================================= */}
      <section className="lg:col-span-3 flex flex-col items-center justify-center bg-[#422c1d]/5 p-6 rounded-3xl h-[480px] border border-[#593C28]/10">
        <h3 className="font-['Cabin'] font-bold text-[#593C28] text-center mb-4 uppercase tracking-wider text-sm">
          Galería 
        </h3>
        
        <div className="flex flex-col gap-4 w-full h-full overflow-y-auto no-scrollbar py-2">
          <div className="w-full h-[115px] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-white/50">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400" alt="Local" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          
          <div className="w-full h-[115px] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-white/50">
            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400" alt="Burger" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          
          <div className="w-full h-[115px] flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-white/50">
            <img src="https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=400" alt="Papas" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

    </main>
  )
}