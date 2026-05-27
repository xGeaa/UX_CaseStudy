import { Carta } from "./Carta"

export default {
  title: "Pages/Carta",
  component: Carta,
  tags: ["autodocs"],
  argTypes: {
    setPagina: {
      action: "Cambiando de vista a", // Registra el clic del banner de reservar en la pestaña Actions
      description: "Función encargada de redirigir entre las páginas del proyecto",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
}

// Historia 1: Vista general e interactiva de la Carta
export const VistaInteractiva = {
  args: {
    setPagina: (pagina) => console.log(`[Router] Solicitando pantalla: ${pagina}`),
  },
}