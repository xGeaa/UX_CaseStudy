import * as React from "react"

export function Carta({ setPagina }) {
  // Estado para saber qué categoría de comida está seleccionada
  const [seccionActiva, setSeccionActiva] = React.useState("Principales")

  // Datos de ejemplo para que la carta cobre vida al pulsar los círculos
  const platos = {
    Entrantes: [
      { nombre: "Tequeños Salvajes", precio: "6.50€", desc: "6 palitos de queso crujientes con salsa de mostaza dulce." },
      { nombre: "Patatas Rústicas", precio: "5.00€", desc: "Patatas caseras con piel, especiadas con nuestra mezcla secreta." }
    ],
    Principales: [
      { nombre: "La AL Burger", precio: "9.90€", desc: "200g de vacuno, doble de queso cheddar, bacon ahumado y salsa especial." },
      { nombre: "La Bacon Burger", precio: "8.50€", desc: "200g de vacuno, queso cheddar, triple de bacon ahumado y mermelada de bacon." }
    ],
    Postres: [
      { nombre: "Brioche Nutella", precio: "4.50€", desc: "Nuestro pan artesanal tostado relleno de Nutella y helado de vainilla." },
      { nombre: "Cheesecake", precio: "5.00€", desc: "Tarta de queso fluida con base de galleta Lotus." }
    ],
    Alérgenos: [
      { nombre: "Información Alimentaria", precio: "¡Pregúntanos!", desc: "Disponemos de opciones sin gluten y adaptaciones para cualquier tipo de alérgenos en el 100% de los productos de nuestra carta.   ¡No te vas a quedar sin probar lo que más te guste!" }
    ]
  }

  return (
    <main className="w-full min-h-screen mt-24 bg-[#F9F9F9] px-6 py-8 md:px-12 flex flex-col gap-10">
      
      {/* =========================================================================
          1. RECTÁNGULO HORIZONTAL SUPERIOR (BANNER PARTIDO 75% / 25%)
          ========================================================================= */}
      <section className="w-full h-48 md:h-64 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-[#593C28]/10">
        
        {/* 75% Izquierda: Imagen de fondo + Título "La Carta" */}
        <div className="h-2/3 md:h-full md:w-[75%] relative flex items-center px-8 md:px-16 bg-[#422c1d]">
          {/* Imagen de fondo difuminada u oscurecida para que el texto resalte */}
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000" 
            alt="Hamburguesas" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <h1 className="relative z-10 font-['Cabin'] font-extrabold text-white text-4xl md:text-6xl tracking-wide uppercase text-shadow">
            La Carta
          </h1>
        </div>

        {/* 25% Derecha: Hueco interactivo "RESERVAR" */}
        {/* 2. El botón de Reservar limpio y conectado directamente al enrutador */}
        <button 
        onClick={() => setPagina("EnConstruccion")}
        className="h-1/3 md:h-full md:w-[25%] bg-[#593C28] hover:bg-[#422c1d] transition-colors flex items-center justify-center text-[#CDCDCD] hover:text-white font-['Cabin'] font-bold text-xl md:text-2xl tracking-widest uppercase border-t md:border-t-0 md:border-l border-[#CDCDCD]/20 group cursor-pointer focus:outline-none"
        type="button"
        >
        <span className="flex items-center gap-2 group-hover:scale-105 transition-transform">
            Reservar 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
            </svg>
        </span>
        </button>

      </section>

      {/* =========================================================================
          2. FILTROS: 4 CÍRCULOS CONSECUTIVOS HORIZONTALES (MÁS GRANDES)
          ========================================================================= */}
      <section className="w-full flex justify-center overflow-x-auto py-4 no-scrollbar">
        <div className="flex gap-6 md:gap-12 px-4">
          
          {[
            { id: "Entrantes", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300" },
            { id: "Principales", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300" },
            { id: "Postres", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300" },
            { id: "Alérgenos", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300" }
          ].map((item) => {
            const esActivo = seccionActiva === item.id
            return (
              <div 
                key={item.id}
                onClick={() => setSeccionActiva(item.id)} 
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                {/* Círculos agrandados a w-32 en móvil y sm:w-44 en PC */}
                <div className={`relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-xl transition-all duration-300 ${esActivo ? 'border-4 border-[#593C28] scale-105' : 'border-2 border-[#593C28]/20 group-hover:scale-105'}`}>
                  <img src={item.img} alt={item.id} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Filtro y texto más grande (text-base a sm:text-lg) */}
                  <button 
                    className={`absolute inset-0 transition-colors flex items-center justify-center text-white font-['Cabin'] font-bold text-base sm:text-lg tracking-wider uppercase ${esActivo ? 'bg-[#593C28]/40' : 'bg-[#593C28]/60 group-hover:bg-[#593C28]/45'}`}
                  >
                    {item.id}
                  </button>
                </div>
              </div>
            )
          })}

        </div>
      </section>
      

      {/* =========================================================================
          3. LISTADO DINÁMICO DE PLATOS (Funcionalidad de los círculos)
          ========================================================================= */}
      <section className="max-w-4xl mx-auto w-full bg-white rounded-3xl p-6 md:p-10 shadow-md border border-[#593C28]/5 mb-12">
        <h2 className="font-['Cabin'] font-extrabold text-2xl md:text-3xl text-[#593C28] mb-6 border-b pb-2 uppercase tracking-wide">
          {seccionActiva}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platos[seccionActiva].map((plato, idx) => (
            <div key={idx} className="flex flex-col gap-1 group">
              <div className="flex justify-between items-baseline">
                <h3 className="font-['Cabin'] font-bold text-lg text-[#422c1d] group-hover:text-[#593C28] transition-colors">{plato.nombre}</h3>
                <span className="font-bold text-[#593C28] font-['Cabin']">{plato.precio}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{plato.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}