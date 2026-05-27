import { Footer } from "./Footer"

export default {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    setPagina: {
      action: "Navegando a", // Captura el evento en la pestaña de Actions
      description: "Función para gestionar el enrutamiento de la aplicación",
    },
  },
  // Al ser un componente ancho, forzamos que se vea completo en la pantalla de pruebas
  parameters: {
    layout: "fullscreen",
  },
}

// Historia Única: Vista por defecto del Footer corporativo
export const Predeterminado = {
  args: {
    // Mandamos una función que simule la navegación en la consola
    setPagina: (pagina) => console.log(`Cambiando de vista a: ${pagina}`),
  },
}