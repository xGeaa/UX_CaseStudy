import * as React from "react"
import { Button } from "../atoms/Button"
import { Logo } from "../atoms/Logo" 

export function Footer({ setPagina }) {
  return (
    <footer className="w-full bg-[#593C28] shadow-inner mt-auto px-6 py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[#CDCDCD] font-['Cabin']">      
      
    {/* LADO IZQUIERDO: Logo e información  */}
        <div className="flex flex-col items-center md:items-start gap-2 md:w-64 order-2 md:order-1" onClick={() => setPagina("Home")}>
        
        {/* El logo*/}
        <Logo className="h-12 w-auto select-none" />

        <p className="font-['Cabin'] text-sm text-[#CDCDCD]/70 text-center md:text-left mt-2">
            © {new Date().getFullYear()} AL-BURGUERS. <br />
            Todos los derechos reservados.
        </p>
        </div>

      {/* CENTRO: Botones de navegación*/}
     <nav className="flex flex-wrap justify-center items-center gap-4 text-lg sm:text-xl order-1 md:order-2">
        <div onClick={() => setPagina("EnConstruccion")}><Button variant="primary" size="sm">Política de Privacidad</Button></div>
        <div onClick={() => setPagina("EnConstruccion")}><Button variant="primary" size="sm">Contáctanos</Button></div>
        <div onClick={() => setPagina("EnConstruccion")}><Button variant="primary" size="sm">Preguntas Frecuentes</Button></div>
      </nav>

      {/* LADO DERECHO: Iconos de Redes Sociales */}
      {/* Le ponemos md:w-64 para que mida igual que el lado izquierdo y el centro quede perfecto */}
      <div className="flex items-center justify-center md:justify-end gap-5 order-3 md:w-64">
        {/* Instagram */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-white transition-colors p-1"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </a>
        
        {/* Facebook */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-white transition-colors p-1"
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

        {/* Twitter / X */}
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-white transition-colors p-1"
          aria-label="Twitter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>
      </div>

    </footer>
  )
}