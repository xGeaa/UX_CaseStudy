import * as React from "react"
import { Logo } from "../atoms/Logo"
import { MenuButton } from "../atoms/MenuButton"
import { Button } from "../atoms/Button"

export function Navbar({ setPagina }) {
  // Estado para controlar si el menú móvil está abierto
  const [menuAbierto, setMenuAbierto] = React.useState(false)

  // Función auxiliar para cambiar de página y cerrar el menú móvil a la vez
  const navegarA = (ruta) => {
    setPagina(ruta)
    setMenuAbierto(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#593C28] shadow-lg z-50 px-6 py-4 md:px-12 flex items-center justify-between">
      
      {/* LADO IZQUIERDO: Átomo Logo */}
      {/* Añadimos md:w-48 para fijar el ancho en PC */}
      <div className="md:w-48 flex-shrink-0 cursor-pointer" onClick={() => setPagina("Home")}>
        <Logo />
      </div>

      {/* CENTRO: Botones de navegación  */}
      <nav className="hidden md:flex items-center justify-center gap-4 sm:gap-8 text-[#CDCDCD] font-['Cabin'] font-bold text-lg sm:text-xl flex-grow">
          <div onClick={() => setPagina("Carta")}><Button variant="primary" size="sm">La Carta</Button></div>
          <div onClick={() => setPagina("Eventos")}><Button variant="primary" size="sm">Eventos</Button></div>
          <div onClick={() => setPagina("EnConstruccion")}><Button variant="primary" size="sm">Acerca de</Button></div>
          <div onClick={() => setPagina("EnConstruccion")}><Button variant="primary" size="sm">Contáctanos</Button></div>
      </nav>

      {/* LADO DERECHO: Botón "Reservar" en PC / Hamburguesa en Móvil */}
      {/* Le ponemos el mismo md:w-48 para equilibrar la balanza con el logo */}
      <div className="md:w-48 flex justify-end flex-shrink-0">
        
        {/* Este botón SOLO se verá en PC y destaca en contraste */}
            <div className="hidden md:block" onClick={() => setPagina("EnConstruccion")}>
              <Button variant="secondary" size="sm" className="font-bold tracking-wide uppercase">
            Reservar
          </Button>
        </div>

        {/* Esta hamburguesa SOLO se verá en móvil */}
        <div className="z-50 md:hidden">
          <MenuButton 
            isOpen={menuAbierto} 
            onClick={() => setMenuAbierto(!menuAbierto)} 
          />
        </div>
      </div>

      {/* MENÚ DESPLEGABLE LATERAL (Estilo Sidebar - SOLO MÓVIL) */}
     <div className={`fixed top-0 right-0 h-screen w-80 bg-[#422c1d] p-8 shadow-2xl transition-transform duration-300 z-40 flex flex-col gap-6 pt-28 ${menuAbierto ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button onClick={() => navegarA("Carta")} className="text-left text-[#CDCDCD] text-2xl font-bold font-['Cabin'] hover:text-white py-2 border-b border-[#593C28]">🍔 La Carta</button>
        <button onClick={() => navegarA("Eventos")} className="text-left text-[#CDCDCD] text-2xl font-bold font-['Cabin'] hover:text-white py-2 border-b border-[#593C28]">📍 Eventos</button>
        <button onClick={() => navegarA("EnConstruccion")} className="text-left text-[#CDCDCD] text-2xl font-bold font-['Cabin'] hover:text-white py-2 border-b border-[#593C28]">⭐ Reseñas</button>
        <button onClick={() => navegarA("EnConstruccion")} className="text-left text-[#CDCDCD] text-2xl font-bold font-['Cabin'] hover:text-white py-2 border-b border-[#593C28]">📅 Reservar Mesa</button>
      </div>

      {/* Capa oscura de fondo (Overlay) para el móvil */}
      {menuAbierto && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 transition-opacity md:hidden"
          onClick={() => setMenuAbierto(false)}
        />
      )}

    </header>
  )
}