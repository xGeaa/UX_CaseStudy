import * as React from "react"
import { cn } from "../../lib/utils" 

const Button = React.forwardRef(({ className, variant = "primary", size = "default", ...props }, ref) => {
  
  // 1. ESTILOS BASE: 
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-bold transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 font-['Cabin'] rounded-full shadow-md"

  // 2. VARIANTES DE COLOR
  const variantStyles = variant === "secondary"
    ? "bg-[#593C28] text-[#CDCDCD] hover:bg-[#473020]" // Gris / Invertido
    : "bg-[#CDCDCD] text-[#593C28] hover:bg-[#b0b0b0]" // Marrón / Normal

  // 3. TAMAÑOS: 
  const sizeStyles = size === "sm"
    ? "text-[24px] leading-[30px] px-6 py-2"
    : "text-[49px] leading-[60px] px-14 py-5" // Un pelín más de margen a los lados (px-14) para que la curva no pegue con el texto

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles, sizeStyles, className)}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }