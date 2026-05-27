import { EnConstruccion } from "./EnConstruccion"

export default {
  title: "Pages/EnConstruccion",
  component: EnConstruccion,
  tags: ["autodocs"],
  argTypes: {
    setPagina: {
      action: "Navegando a", // Captura el retorno a la Home en la pestaña Actions
      description: "Función para redirigir al usuario al menú principal",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
}

// Historia 1: Vista de la pantalla de espera
export const VistaPredeterminada = {
  args: {
    setPagina: (pagina) => console.log(`[Router] Volviendo a: ${pagina}`),
  },
}