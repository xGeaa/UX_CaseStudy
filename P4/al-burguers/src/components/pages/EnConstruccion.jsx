import * as React from "react"
import { Button } from "../atoms/Button"

export function EnConstruccion({ setPagina }) {
  return (
    <main className="w-full min-h-[calc(100vh-160px)] mt-24 bg-[#F9F9F9] px-6 py-12 flex flex-col items-center justify-center text-center gap-6">
      <div className="text-7xl animate-bounce">🚧</div>
      <h1 className="font-['Cabin'] font-extrabold text-4xl text-[#593C28] uppercase tracking-wide">
        Zona en Obras
      </h1>
      <p className="text-gray-600 max-w-md text-lg leading-relaxed">
        Nuestros chefs están dándole la vuelta a esta sección en la parrilla. ¡Muy pronto estará lista para hincarle el diente!
      </p>
      <div className="mt-4" onClick={() => setPagina("Home")}>
        <Button variant="secondary" size="lg">
          Volver a la carta de inicio
        </Button>
      </div>
    </main>
  )
}