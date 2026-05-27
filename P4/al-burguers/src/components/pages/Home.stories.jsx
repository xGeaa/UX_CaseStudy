import { Home } from "./Home"

export default {
  title: "Pages/Home",
  component: Home,
  tags: ["autodocs"],
  argTypes: {
    setPagina: {
      action: "Cambiando de vista a", // Captura el evento cuando el usuario clica un círculo
      description: "Función de enrutamiento que maneja las pantallas del proyecto",
    },
  },
  parameters: {
    layout: "fullscreen", // Elimina márgenes extra para simular la web de verdad
  },
}

// Historia 1: La Home tal cual se inicializa en el navegador
export const Predeterminada = {
  args: {
    setPagina: (pagina) => console.log(`[Router] Navegando hacia: ${pagina}`),
  },
}