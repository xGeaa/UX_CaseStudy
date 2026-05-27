import * as React from "react"

export function Eventos({ setPagina }) {
  return (
    <main className="w-full min-h-screen mt-24 bg-[#F9F9F9] px-6 py-12 md:px-12 flex flex-col gap-16 max-w-7xl mx-auto">
      
      {/* =========================================================================
          ESCENARIO 1: CELEBRACIONES 
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 rounded-3xl shadow-md border border-[#593C28]/5">
        
        {/* 1. Círculo (Arriba en móvil, Izquierda en PC) */}
        <div className="lg:col-span-3 flex justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-[#593C28]/20 group">
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500" 
              alt="Cumpleaños y Celebraciones" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 2. Información (Centro) */}
        <div className="lg:col-span-6 text-center lg:text-left flex flex-col gap-3">
          <h2 className="font-['Cabin'] font-extrabold text-3xl md:text-4xl text-[#593C28] uppercase tracking-wide">
            Nuestras Celebraciones
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            ¿Cumples años, celebras un aprobado o simplemente quieres juntar a tu gente? En AL-BURGUERS montamos tu fiesta a medida. Ofrecemos reserva de espacio prioritario, menús cerrados para grupos con descuento estudiantil y tartas personalizadas bajo encargo. ¡Preocúpate solo de soplar las velas!
          </p>
        </div>

        {/* 3. Galería (Abajo en móvil, Derecha en PC) */}
        <div className="lg:col-span-3 bg-[#422c1d]/5 p-4 rounded-2xl h-[260px] flex flex-col gap-3 overflow-hidden border border-[#593C28]/10 justify-center">
          <div className="h-[100px] rounded-xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300" alt="Fiesta 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-[100px] rounded-xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300" alt="Fiesta 2" className="w-full h-full object-cover" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          ESCENARIO 2: FOODTRUCKS 
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 rounded-3xl shadow-md border border-[#593C28]/5">
        
        {/* 1. Círculo (Primero en móvil gracias a order-1, a la Derecha en PC gracias a lg:order-3) */}
        <div className="lg:col-span-3 flex justify-center order-1 lg:order-3">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-[#593C28]/20 group">
            <img 
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRvJchN6wxYe41a7ux_YusIs3dYiVwrbeGruOeA6Q3YMcdQhmub3Jw3rNPCG44mYvr7-X2heQKofWuBwTc" 
              alt="Camión Foodtruck sobre el terreno" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 2. Información (Segundo en móvil gracias a order-2, se mantiene en el Centro en PC con lg:order-2) */}
        <div className="lg:col-span-6 text-center lg:text-left flex flex-col gap-3 order-2 lg:order-2">
          <h2 className="font-['Cabin'] font-extrabold text-3xl md:text-4xl text-[#593C28] uppercase tracking-wide">
            Nuestros Foodtrucks
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            Llevamos el auténtico sabor de nuestras burgers donde tú nos digas. Nuestro camión de comida está totalmente equipado para rodar hacia ferias temáticas del campus, eventos universitarios, conciertos o celebraciones privadas. Llevamos la parrilla encendida y toda la actitud para montar un festival de sabor sobre ruedas.
          </p>
        </div>

        {/* 3. Galería (Tercero en móvil gracias a order-3, a la Izquierda en PC gracias a lg:order-1) */}
        <div className="lg:col-span-3 bg-[#422c1d]/5 p-4 rounded-2xl h-[260px] flex flex-col gap-3 overflow-hidden border border-[#593C28]/10 justify-center order-3 lg:order-1">
          <div className="h-[100px] rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400" 
              alt="Cocinando en la furgoneta" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="h-[100px] rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=400" 
              alt="Servicio rápido de comida" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

      </section>

    </main>
  )
}