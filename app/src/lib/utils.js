import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

import logoWhite from '../data/logos/logo-bg-white.png'
import logoTransparent from '../data/logos/logo-bg-transparent.png'
import logoBlack from '../data/logos/logo-bg-black.png'

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function LogoSrc({
  background = "white"
}) {
  if(background == "white") {
    return logoWhite
  }
  if(background == "black") {
    return logoBlack

  }
  if(background == "transparent") {
    return logoTransparent
  }
  throw new Error("background can only be 'white', 'black' or 'transparent'")
}