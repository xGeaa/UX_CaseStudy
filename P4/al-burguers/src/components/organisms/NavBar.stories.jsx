import { Navbar } from "./Navbar"

export default {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    setPagina: {
      action: "Navegando a", // Registra los clics de rutas en la pestaña Actions
      description: "Función de enrutamiento global de la aplicación",
    },
  },
  parameters: {
    layout: "fullscreen", // Elimina los márgenes de Storybook para pegarla arriba como en la app real
  },
}

// Historia 1: Vista general de la barra de navegación
export const Escritorio = {
  args: {
    setPagina: (ruta) => console.log(`Redirigiendo a: ${ruta}`),
  },
}

// Historia 2: Vista de simulación en teléfono móvil
export const Movil = {
  args: {
    setPagina: (ruta) => console.log(`Redirigiendo a: ${ruta}`),
  },
  parameters: {
    // Forzamos que se cargue con un tamaño de viewport de móvil pequeño por defecto
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}