import { Eventos } from "./Eventos"

export default {
  title: "Pages/Eventos",
  component: Eventos,
  tags: ["autodocs"],
  argTypes: {
    setPagina: {
      action: "Navegando a",
      description: "Manejador del enrutamiento de la aplicación",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
}

// Historia 1: Vista general de la sección de eventos de la hamburguesería
export const VistaCompleta = {
  args: {
    setPagina: (pagina) => console.log(`Cambiando de vista a: ${pagina}`),
  },
}