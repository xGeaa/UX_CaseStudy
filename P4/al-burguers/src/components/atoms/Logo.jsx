import * as React from "react"
import { cn } from "../../lib/utils"
import logoImg from "../../assets/logo.png" 

const Logo = React.forwardRef(({ className, alt = "Al-Burguers Logo", ...props }, ref) => {
  return (
    <a 
      href="#" 
      ref={ref}
      className={cn(
        // Añadimos un efecto de escala suave al pasar el ratón para que se note que es clicable
        "flex items-center transition-transform active:scale-95 hover:opacity-90", 
        className
      )}
      {...props}
    >
      <img 
        src={logoImg} 
        alt={alt} 
        // Controlamos el tamaño: h-16 (64px de alto) suele quedar perfecto en Navbars
        className="h-16 w-auto object-contain" 
      />
    </a>
  )
})

Logo.displayName = "Logo"

export { Logo }