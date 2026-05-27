import * as React from "react"
import { cn } from "../../lib/utils"

const MenuButton = React.forwardRef(({ className, isOpen = false, onClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(
        // Tamaño del botón contenedor (Fondo marrón corporativo)
        "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#593C28] shadow-md transition-all active:scale-95",
        className
      )}
      aria-label="Abrir menú"
      {...props}
    >
      {/* Contenedor de las 3 líneas */}
      <div className="relative flex h-6 w-7 flex-col justify-between">
        
        {/* Línea Superior */}
        <span
          className={cn(
            "h-1 w-full rounded-full bg-[#CDCDCD] transition-all duration-300 origin-left",
            isOpen && "rotate-45 translate-x-[4px] -translate-y-[2px]"
          )}
        />
        
        {/* Línea Central */}
        <span
          className={cn(
            "h-1 w-full rounded-full bg-[#CDCDCD] transition-all duration-300",
            isOpen && "opacity-0 -translate-x-2"
          )}
        />
        
        {/* Línea Inferior */}
        <span
          className={cn(
            "h-1 w-full rounded-full bg-[#CDCDCD] transition-all duration-300 origin-left",
            isOpen && "-rotate-45 translate-x-[4px] translate-y-[2px]"
          )}
        />
        
      </div>
    </button>
  )
})

MenuButton.displayName = "MenuButton"

export { MenuButton }