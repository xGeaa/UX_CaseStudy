import { MenuButton } from "./MenuButton"

export default {
  title: "Atoms/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Estado del menú (controla la animación de las líneas)",
    },
    onClick: { 
      action: "clicked",
      description: "Función que se ejecuta al hacer clic",
    },
  },
}

// 1. Estado por defecto: El icono con las 3 rayas horizontales
export const Cerrado = {
  args: {
    isOpen: false,
  },
}

// 2. Estado Activo: El icono transformado en una 'X' de cierre
export const Abierto = {
  args: {
    isOpen: true,
  },
}