import * as React from "react"
import { Navbar } from "./components/organisms/Navbar"
import { Footer } from "./components/organisms/Footer"
import { Home } from "./components/pages/Home"
import { Carta } from "./components/pages/Carta"
import { Eventos } from "./components/pages/Eventos"
import { EnConstruccion } from "./components/pages/EnConstruccion"

function App() {
  const [paginaActual, setPaginaActual] = React.useState("Home")

  const renderPagina = () => {
    switch (paginaActual) {
      case "Home":
        return <Home setPagina={setPaginaActual} />
      case "Carta":
        return <Carta setPagina={setPaginaActual} />
      case "Eventos": // <-- 2. Añades este caso nuevo
        return <Eventos setPagina={setPaginaActual} />
      case "EnConstruccion":
      default:
        return <EnConstruccion setPagina={setPaginaActual} />
    }
  }
  // ... resto del archivo igual

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col justify-between">
      
      {/* Pasamos la función de cambiar página a la Navbar */}
      <Navbar setPagina={setPaginaActual} />

      {/* Renderizado dinámico de la página activa */}
      {renderPagina()}

      {/* Pasamos la función de cambiar página al Footer */}
      <Footer setPagina={setPaginaActual} />

    </div>
  )
}

export default App