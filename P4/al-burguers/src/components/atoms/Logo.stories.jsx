import { Logo } from "./Logo"

export default {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
}

// Historia 1: Logo en el Footer
export const LogoFooter = {
  args: {
    className: "h-12 w-auto",
  },
}

// Historia 2: Logo en la Navbar
export const LogoNavbar = {
  args: {
    className: "h-16 w-auto",
  },
}