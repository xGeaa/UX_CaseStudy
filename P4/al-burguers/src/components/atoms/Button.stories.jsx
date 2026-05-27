import { Button } from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default"], 
    },
  },
}

// Historia 1: Variante Principal (Fondo Gris Claro / Texto Marrón)
export const Primario = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Reservar",
  },

}

// Historia 2: Variante Secundaria (Fondo Marrón / Texto Gris Claro)
export const Secundario = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Ver Carta",
  },
}

// Historia 3: Tamaño Gigante 
export const Gigante = {
  args: {
    variant: "secondary",
    size: "default",
    children: "¡Pide Ahora!",
  },
}